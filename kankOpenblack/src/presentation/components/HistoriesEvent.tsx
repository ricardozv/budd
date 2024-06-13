import React, { useState, useRef, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Modal, Animated } from 'react-native';
import events from '../../data/database/MockUp.json';

const HistoriesEvent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleThumbnailPress = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      // Faz algo com o valor do deslocamento horizontal (value) aqui se necessário
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const renderThumbnail = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.thumbnailContainer}
        onPress={() => handleThumbnailPress(item.image)}
      >
        <Image style={styles.thumbnail} source={{ uri: item.image }} />
      </TouchableOpacity>
    );
  };

  const scrollInterpolator = (index, carouselProps) => {
    const range = [index - 1, index + 1];
    const inputRange = carouselProps.data.map((_, i) => i);
    const outputRange = inputRange.slice(range[0], range[1] + 1);
    return { inputRange, outputRange };
  };

  const animatedStyles = (index, animatedValue, carouselProps) => {
    const translateX = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });

    return {
      transform: [{ translateX }],
    };
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={events.events}
        renderItem={renderThumbnail}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={60}
        decelerationRate="fast"
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        scrollEventThrottle={16}
        contentContainerStyle={styles.thumbnailListContainer}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
      />

      {selectedImage && (
        <Modal
          visible={selectedImage !== null}
          transparent
          animationType="fade"
          onRequestClose={handleModalClose}
        >
          <TouchableOpacity style={styles.modalContainer} onPress={handleModalClose}>
            <Image style={styles.fullImage} source={{ uri: selectedImage }} />
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  thumbnailContainer: {
    marginRight: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  thumbnailListContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default HistoriesEvent;
