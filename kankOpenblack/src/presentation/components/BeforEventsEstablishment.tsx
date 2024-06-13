import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Modal, Animated, Text } from 'react-native';
import EventTicketPurchase from './EventTicketPurchase';
import establishments from '../../data/database/MockUp.json';

const BeforEventsEstablishment = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleThumbnailPress = useCallback((event) => {
    setSelectedEvent(event);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  useEffect(() => {
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const renderThumbnail = useCallback(({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handleThumbnailPress(item)}
        style={styles.thumbnailContainer} // Estilo aplicado aqui
      >
        <View style={styles.thumbnailBorder}>
          <Image style={styles.thumbnail} source={{ uri: item.image }} />
        </View>
      </TouchableOpacity>
    );
  }, [handleThumbnailPress]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximos Eventos</Text>
      <Animated.FlatList
        data={establishments.establishments}
        renderItem={renderThumbnail}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={60}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.thumbnailListContainer}
      />

      {selectedEvent && (
        <Modal
          visible={true}
          transparent
          animationType="fade"
          onRequestClose={handleModalClose}
        >
          <EventTicketPurchase event={selectedEvent} onClose={handleModalClose} />
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#32CD32',
    marginLeft: 15,
    marginTop: 10,
  },
  thumbnailContainer: {
    marginRight: 6, 
  },
  thumbnailBorder: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 4,
  },
  thumbnail: {
    width: 75,
    height: 55,
    borderRadius: 5,
  },
  thumbnailListContainer: {
    paddingVertical: 12,
    paddingLeft: 15, 
    paddingRight: 15, 
  },
});

export default BeforEventsEstablishment;
