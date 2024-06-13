import React, { useEffect, useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import * as Location from 'expo-location';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import config from '../../../src/aws-exports.js'; 
import CardEvent from '../components/CardEstablishment';
import HistoriesEstablishment from '../components/HistoriesEstablishment';

Amplify.configure(config);
const S3_BASE_URL = 'https://kankopenblack-storage-fb359200185906-dev.s3.amazonaws.com/';

const constructImageUrl = (url) => {
    if (!url || url === 'null') {
        return null; 
    } else if (url.startsWith(S3_BASE_URL)) {
        return url;
    } else {
        return S3_BASE_URL + url;
    }
};

const listEventosQuery = `
query ListAllEventos {
  listEventos {
    items {
      id
      nome
      endereco
      latitude
      longitude
      image_url
      createdAt
      updatedAt
    }
  }
}
`;

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1); 
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    const d = R * c;
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

const Home = () => {
    const [locationPermission, setLocationPermission] = useState("undetermined");
    const [userLocation, setUserLocation] = useState(null);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            setLocationPermission(status);
            if (status === 'granted') {
                const loc = await Location.getCurrentPositionAsync({});
                setUserLocation(loc);
            } else if (status === 'denied') {
                Alert.alert('Sem permissão para usar sua localização');
            }
        })();
    }, []);

    useEffect(() => {
        if (!userLocation) return;
        const fetchEvents = async () => {
            try {
                const result = await API.graphql(graphqlOperation(listEventosQuery));
                
                if ('data' in result && result.data.listEventos && result.data.listEventos.items) {
                    let sortedEvents = [...result.data.listEventos.items];
        
                    if (userLocation) {
                        sortedEvents.sort((a, b) => 
                            getDistanceFromLatLonInKm(userLocation.coords.latitude, userLocation.coords.longitude, parseFloat(a.latitude), parseFloat(a.longitude)) -
                            getDistanceFromLatLonInKm(userLocation.coords.latitude, userLocation.coords.longitude, parseFloat(b.latitude), parseFloat(b.longitude))
                        );
                    }
        
                    const nearestEvents = sortedEvents.map(evt => ({
                        ...evt,
                        image: constructImageUrl(evt.image_url),
                        distance: userLocation ? getDistanceFromLatLonInKm(userLocation.coords.latitude, userLocation.coords.longitude, parseFloat(evt.latitude), parseFloat(evt.longitude)) : null
                    }));
                    setEvents(nearestEvents);
                    
                } else {
                    console.error("Resultado inesperado:", result);
                }
            } catch (error) {
                console.error("Erro ao obter dados do AppSync", error);
            }
        };
        
        fetchEvents();
    }, [userLocation]);

    const renderItem = useCallback(({ item }) => (
        <CardEvent
            establishment={{
                id: item.id,
                name: item.nome,
                description: item.endereco,
                image: item.image,
                location: {
                    address: item.endereco,
                    distance: item.distance
                }
            }}
        />
    ), []);

    return (
        <>
            <HistoriesEstablishment />
            <FlatList
                style={{ backgroundColor: '#000000', height: '100%', width: '100%' }}
                showsVerticalScrollIndicator={false}
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                initialNumToRender={10}
                maxToRenderPerBatch={5}
            />
        </>
    );
};

export default React.memo(Home);
