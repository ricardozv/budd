import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

const listEstablishments = `
query ListAllBares {
  listBares(limit: 50) {
    items {
        id
        nome
        endereco
        latitude
        longitude
        createdAt
        updatedAt
    }
  }
}
`;

type Establishment = {
    id: string;
    name: string;
    location: {
        latitude: number;
        longitude: number;
    }
}

const MarkersOnMaps: React.FC = () => {
    const [establishments, setEstablishments] = useState<Establishment[]>([]);

    useEffect(() => {
        const fetchEstablishments = async () => {
            try {
                const result = await API.graphql(graphqlOperation(listEstablishments));
        
                if ('data' in result && result.data.listBares && result.data.listBares.items) {
                    const mappedEstablishments = result.data.listBares.items
                        .filter(item => !isNaN(parseFloat(item.latitude)) && !isNaN(parseFloat(item.longitude)))
                        .map(item => ({
                            id: item.id,
                            name: item.nome,
                            location: {
                                latitude: parseFloat(item.latitude),
                                longitude: parseFloat(item.longitude)
                            }
                        }));
        
                    setEstablishments(mappedEstablishments);
                } else {
                    console.error("Resultado inesperado:", result);
                }
            } catch (error) {
                console.error("Erro ao obter dados do AppSync", error);
            }
        };        

        fetchEstablishments();
    }, []);

    return (
        
        <>
            {establishments.map(establishment => (
                <Marker
                    key={`establishment-${establishment.id}`}
                    coordinate={{
                        latitude: establishment.location.latitude,
                        longitude: establishment.location.longitude
                    }}
                    title={establishment.name}>
                    <MaterialCommunityIcons name="map-marker" size={28} color="#ffffff" />
                </Marker>
            ))}
        </>
        
    );
};

export default MarkersOnMaps;
