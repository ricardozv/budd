import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IngressosScreen from './TabNavigateEstablishment/Ingressos/IngressosScreen';
import BebidasScreen from './TabNavigateEstablishment/BebidasScreen';
import ComidasScreen from './TabNavigateEstablishment/ComidasScreen';
import { FontAwesome } from '@expo/vector-icons';
import BeforEventsEstablishment from '../components/BeforEventsEstablishment'; 

const Tab = createMaterialTopTabNavigator();

interface EstablishmentDetailsProps {
  route: {
    params: {
      establishment: Establishment;
    };
  };
}

const EstablishmentDetails: React.FC<EstablishmentDetailsProps> = ({ route }) => {
  const { establishment } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: establishment.image }} resizeMode="contain" />
        <View style={styles.establishmentContainer}>
          <Text style={styles.name}>{establishment.name}</Text>
          <Text style={styles.address}>{establishment.location.address}</Text>
          <Text style={styles.open}>Aberto</Text>
          <FontAwesome name="hand-spock-o" size={22} color="#32CD32" style={styles.icon} />
        </View>
      </View>
      <BeforEventsEstablishment />

      <View style={styles.tabNavigatorContainer}>
        <Tab.Navigator
         screenOptions={{
          tabBarActiveTintColor: '#32CD32',
          tabBarIndicatorStyle: {
            backgroundColor: '#32CD32',
            height: 4,
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          tabBarStyle: {
            backgroundColor: '#1c1c1c',
            elevation: 10,
          },
        }}
      >
          <Tab.Screen name="Ingressos" component={IngressosScreen} />
          <Tab.Screen name="Bebidas" component={BebidasScreen} />
          <Tab.Screen name="Comida" component={ComidasScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 5,
      marginVertical: 7,
      backgroundColor: '#000000',
    },
    card: {
      height: '32%',
      width: '98%',
      backgroundColor: '#1c1c1c',
      borderRadius: 14,
      elevation: 9,
      marginTop: 2,
      marginBottom: 10,
      marginLeft: 3,
      overflow: 'hidden',
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 2 },
    },
    establishmentContainer: {
      padding: 12,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    tabNavigatorContainer: {
      flex: 1,
      borderRadius: 20,
    },
    image: {
      width: '100%',
      height: '60%',
      resizeMode: 'cover',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 15,
      color: '#32CD32',
    },
    address: {
      fontSize: 16,
      color: '#32CD32',
      marginLeft: 15,
    },
    open: {
      color: '#32CD32',
      fontSize: 11,
      top: -24,
      left: '78%', 
    },
    icon: {
      position: 'absolute',
      right: 18,
      top: 18,
    },
  });
  

export default EstablishmentDetails;
