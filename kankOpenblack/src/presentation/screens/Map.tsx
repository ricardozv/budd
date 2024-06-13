import React, { useEffect, useState } from 'react';
import { View, Alert, Text, StyleSheet, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import MarkersOnMaps from '../components/MarkersOnMaps';
import MockUp from '../../data/database/MockUp.json';
import { LocationObject } from 'expo-location';

const MapScreen = () => {
    const [locationPermission, setLocationPermission] = useState("undetermined");
    const [establishments, setEstablishments] = useState(MockUp.establishments);
    const [events, setEvents] = useState(MockUp.events);
    const [userLocation, setUserLocation] = useState<LocationObject | null>(null);

    useEffect(() => {
        const requestLocationPermission = async () => {
            console.log("Requesting location permission...");
            const { status } = await Location.requestForegroundPermissionsAsync();
            setLocationPermission(status);
            console.log("Location permission status:", status);

            if (status === 'granted') {
                const location = await Location.getCurrentPositionAsync({});
                console.log("User location:", location);
                setUserLocation(location);
            } else if (status === 'denied') {
                Alert.alert('Sem permissão para usar sua localização');
            }
        };

        requestLocationPermission();
    }, []);

    useEffect(() => {
        console.log("Platform:", Platform.OS);
        console.log("Establishments:", establishments);
        console.log("Events:", events);
    }, [establishments, events]);

    if (locationPermission !== 'granted' || !userLocation) {
        return (
            <View style={styles.container}>
                <Text>Aguarde, carregando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: userLocation.coords.latitude,
                    longitude: userLocation.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                customMapStyle={mapStyle}
            >
                <Marker 
                    coordinate={userLocation.coords}
                    title="Você está aqui">
                    <MaterialCommunityIcons name="account-heart" size={28} color="#ffffff" />
                </Marker>
                <MarkersOnMaps establishments={establishments} events={events} />
            </MapView>
        </View>
    );
};


const styles = StyleSheet.create({
    mapContainer: { width: '100%', height: '100%' },
    map: { width: '100%', height: '100%' },
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});


const mapStyle = [{
    "elementType": "geometry",
    "stylers": [{ 
      "color": "#000" 
    }]
},
{
  "elementType": "labels.text.fill",
  "stylers": [{
      "color": "#fff"
    }]
},
{
  "elementType": "labels.text.stroke",
  "stylers": [{
      "color": "#000"
    }]
},
{
  "featureType": "administrative",
  "elementType": "geometry.fill",
  "stylers": [{
      "color": "#000"
    }]},
{
  "featureType": "administrative",
  "elementType": "geometry.stroke",
  "stylers": [{
      "color": "#fff"
    }]
},
{
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": [{
      "color": "#1c1c1c"
    }]
},
{
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": [{
      "color": "#008000"
    }]
},
{
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [{
      "color": "#008000"
    }]
},
{
  "featureType": "road",
  "elementType": "labels.text.stroke",
  "stylers": [{
      "color": "#000"
    }]
},
{
  "featureType": "poi",
  "elementType": "labels",
  "stylers": [{
      "visibility": "off"
    }]
},
{
  "featureType": "administrative.locality",
  "elementType": "labels.text.fill",
  "stylers": [{
      "color": "#008000"
    }]
}];
export default MapScreen;