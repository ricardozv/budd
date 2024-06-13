import React, { useEffect, useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import * as Location from 'expo-location';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports.js'; 
import CardEstablishment from '../components/CardEstablishment';
import HistoriesEstablishment from '../components/HistoriesEstablishment';

Amplify.configure(awsconfig);
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

const listBaresQuery = `
query ListAllBares {
  listBares {
    items {
      id
      nome
      endereco
      latitude
      longitude
      imagem_url
      horarioFuncionamento
      nomeResponsavel
      rgResponsavel
      cpfResponsavel
      pixResponsavel
      enderecoResponsavel
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
    const [establishments, setEstablishments] = useState([]);
    const [showSettingsAlert, setShowSettingsAlert] = useState(true);

    const requestLocationPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        setLocationPermission(status);
        if (status === 'granted') {
            const loc = await Location.getCurrentPositionAsync({});
            setUserLocation(loc);
        } else if (status === 'denied' && showSettingsAlert) {
            Alert.alert(
                'Permissão de localização necessária',
                'Este aplicativo precisa da sua localização para funcionar corretamente. Por favor, vá nas configurações do seu dispositivo e permita o acesso à localização.',
                [
                    {
                        text: 'OK',
                        onPress: () => setShowSettingsAlert(false)
                    }
                ]
            );
        }
    };

    useEffect(() => {
        requestLocationPermission();
    }, []);

    useEffect(() => {
        if (!userLocation) return;
        const fetchEstablishments = async () => {
            try {
                const result = await API.graphql(graphqlOperation(listBaresQuery));
                
                if ('data' in result && result.data.listBares && result.data.listBares.items) {
                    let sortedEstablishments = [...result.data.listBares.items];
        
                    if (userLocation) {
                        sortedEstablishments.sort((a, b) => 
                            getDistanceFromLatLonInKm(userLocation.coords.latitude, userLocation.coords.longitude, parseFloat(a.latitude), parseFloat(a.longitude)) -
                            getDistanceFromLatLonInKm(userLocation.coords.latitude, userLocation.coords.longitude, parseFloat(b.latitude), parseFloat(b.longitude))
                        );
                    }
        
                    const nearestEstablishments = sortedEstablishments.map(est => ({
                        ...est,
                        image: constructImageUrl(est.imagem_url),
                        distance: userLocation ? getDistanceFromLatLonInKm(userLocation.coords.latitude, userLocation.coords.longitude, parseFloat(est.latitude), parseFloat(est.longitude)) : null
                    }));
                    setEstablishments(nearestEstablishments);
                    
                } else {
                    console.error("Resultado inesperado:", result);
                }
            } catch (error) {
                console.error("Erro ao obter dados do AppSync", error);
            }
        };
        
        fetchEstablishments();
    }, [userLocation]);

    const renderItem = useCallback(({ item }) => (
        <CardEstablishment
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
                data={establishments}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                initialNumToRender={10}
                maxToRenderPerBatch={5}
            />
        </>
    );
};

export default React.memo(Home);
