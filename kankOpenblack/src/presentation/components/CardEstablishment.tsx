import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface EstablishmentProps {
  establishment: {
    id: string;
    name: string;
    description: string;
    image: string;
    location: {
      address: number;
      distance: number | null;
    }
  }
}

const EstablishmentCard: React.FC<EstablishmentProps> = ({ establishment }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('EstablishmentDetails', { establishment })}>
      <View style={[styles.cardContainer, { backgroundColor: '#1c1c1c' }]}>
        <Image style={styles.cardImage} source={{ uri: establishment.image }} />
        <View style={styles.cardInfoContainer}>
          <Text style={styles.cardName}>{establishment.name}</Text>
          <Text style={styles.cardAddress}>{establishment.description}</Text>
          <View style={styles.distanceContainer}>
            <MaterialCommunityIcons name="map-marker-outline" size={26} color="#32CD32" />
            <Text style={styles.distanceText}>
              {establishment.location.distance !== null ? `Km ${establishment.location.distance.toFixed(2)}` : 'Calculando distância'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 7,
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 7,
    width: '97%',
    elevation: 9,
    height: 245
  },
  cardImage: {
    width: '100%',
    height: 125,
  },
  cardInfoContainer: {
    padding: 16,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#32CD32',
  },
  cardAddress: {
    fontSize: 14,
    color: '#32CD32',
    marginRight: 60,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  distanceText: {
    color: '#32CD32',
    fontSize: 13,
    marginLeft: 4,
  },
});

export default EstablishmentCard;
