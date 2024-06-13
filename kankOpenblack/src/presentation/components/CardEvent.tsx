import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons} from '@expo/vector-icons';

interface EventProps {
    event: {
        id: string;
        name: string;
        description: string;
        image: string;
        location: {
            address: string;
    }}}
    const EventCard: React.FC<EventProps> = ({ event }) => {
    const navigation = useNavigation();
    const colorScheme = 'dark';
    const textColor = '#32CD32';

    return (
        <TouchableOpacity 
            activeOpacity={0.9} 
            onPress={() => navigation.navigate('EventDetails',{ event })}>
                <View style= {[styles.cardContainer, { 
                        width: '97%', 
                        elevation:9,
                        backgroundColor: true ? '#1c1c1c' : 'white' }]}>
                    <Image 
                        style={styles.cardImage}  
                        source={{ uri: event.image }}/>
                    <View style={styles.cardInfoContainer}>
                        <Text style={[
                            styles.cardName, { 
                                color:textColor}]}>{event.name}</Text>
                        <Text style={[
                            styles.cardAddress, {
                            color:textColor}]}>{event.description}</Text>
                             {/* máximo 27 caracters*/}
            <Text style={styles.distan}>Km 1.5</Text>
              <MaterialCommunityIcons 
                name="map-marker-outline" size={30} color="#32CD32" 
                style={{ 
                  position: 'absolute',
                  right: 25,
                  top: 14
                  }} />
                    </View>
                </View>
        </TouchableOpacity >
    )}

    const styles = StyleSheet.create({
        cardContainer: {
        marginLeft:5,
        borderRadius: 15,
        overflow: 'hidden',
        marginVertical: 7,
        width: '97%', 
        elevation:9, 
        height: 220
    },
        cardImage: {
        width: '100%',
        height: 125,
    },
        cardInfoContainer: {
        padding: 16
    },
        cardName: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#32CD32',
    },
        cardAddress: {
        marginTop: 5,
        fontSize: 14,
        color:'#32CD32',
        marginRight: 60
    },
    distan:{
        color: '#32CD32',
        fontSize: 14,
        top:-25,
        left: 263,
        
      }});

export default EventCard;



