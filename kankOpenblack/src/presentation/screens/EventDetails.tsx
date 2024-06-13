import React from 'react';
import {Image, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IngressosScreen from './TabNavigateEvent/Ingressos/IngressosScreen';
import BebidasScreen from './TabNavigateEvent/BebidasScreen';
import ComidasScreen from './TabNavigateEvent/ComidasScreen';
import { Text, View } from '../components/Themed';

const TabNavigator = createMaterialTopTabNavigator();

interface EventDetailsProps {
  event: {
    id: string;
    name: string;
    image: string;
    location: {
      address: string;
    }}}

const EventDetails: React.FC<EventDetailsProps> = ({ route }) => {
  const { event } = route.params;
  return (
    <View style={styles.container}>
        <View style = {styles.card}>
            <Image 
                style={styles.image} 
                source={{ uri: event.image }} 
                resizeMode={'contain'} 
            />
            <View style = { styles.eventContainer}>
                <Text style={styles.name}>{event.name}</Text>
                <Text style={styles.address}>{event.location.address}</Text>
            </View>
        </View>

        <View style={styles.tabNavigatorContainer}>
        <TabNavigator.Navigator
            tabBarOptions={{
                activeTintColor: '#32CD32',
                indicatorStyle: {
                    backgroundColor: '#32CD32',
                    height: 4,
                },
                labelStyle: {
                    fontSize: 13
                },
                style: {
                    backgroundColor: '#1c1c1c',
                    elevation:10
                }}}>
                <TabNavigator.Screen 
                    key={'Ingressos'}
                    name="Ingressos" 
                    component={IngressosScreen} />
                <TabNavigator.Screen 
                    key={'Bebidas'}
                    name="Bebidas" 
                    component={BebidasScreen} />
                <TabNavigator.Screen 
                    key={'Comidas'}
                    name="Comidas" 
                    component={ComidasScreen} />
        </TabNavigator.Navigator>
        </View>
    </View>
  )};

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:5,
        marginVertical: 7,
        backgroundColor:'#1c1c1c',
    },
    card: {
        height: '25%',
        width: '99%',
        backgroundColor:'#32CD32',
        borderRadius: 14,
        elevation: 9,
        marginTop: 2,
        marginBottom: 10,
        marginLeft: 3,
        overflow: 'hidden',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 }
    },
    eventContainer: {
        padding: 12,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    tabNavigatorContainer: {
        flex: 1,
        borderRadius: 20
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft:15,
        color: '#32CD32'
    },
    address: {
        fontSize: 16,
        color: '#32CD32',
        marginLeft:15,
    }
});

export default EventDetails;
