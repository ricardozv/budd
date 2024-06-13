import React from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface Props {
    establishments: Establishment[];
    events: Event[];
}

interface Establishment {
    id: number;
    name: string;
    description: string;
  }
  
  interface Event {
    id: number;
    name: string;
    description: string;
  }
  

const CardMap = ({ establishments, events }) => {
    const data = [...establishments, ...events]; 
    const renderItem = ({ item }) => (
      <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  
    return (
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        layout="default"
        loop={true}
        autoplay={true}
        autoplayInterval={5000}
      />
    );
  };

export default CardMap;
