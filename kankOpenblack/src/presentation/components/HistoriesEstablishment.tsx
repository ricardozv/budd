import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Modal, Animated } from 'react-native';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

const S3_BASE_URL = 'https://kankopenblack-storage-fb359200185906-dev.s3.amazonaws.com/';

const listEstablishments = `
query ListAllBares {
  listBares {
    items {
      id
      nome
      imagem_url
    }
  }
}
`;

const constructImageUrl = (url) => {
  if(!url || url === 'null') {
      return null; 
  } else if(url.startsWith(S3_BASE_URL)) {
      return url;
  } else {
      return S3_BASE_URL + url;
  }
}

const HistoriesEstablishment = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await API.graphql(graphqlOperation(listEstablishments));
        if(result.data && result.data.listBares && result.data.listBares.items) {
          const fetchedImages = result.data.listBares.items.map(item => ({
            id: item.id,
            name: item.nome,
            image: constructImageUrl(item.imagem_url),
          }));
  
          // Pegando apenas as primeiras 30 imagens
          setImages(fetchedImages.slice(0, 20));
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
  
    fetchImages();
  }, []);
  
  const handleThumbnailPress = useCallback((image) => {
    setSelectedImage(image);
  }, []);
  
  const handleModalClose = useCallback(() => {
    setSelectedImage(null);
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

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={images}
        renderItem={renderThumbnail}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={60}
        decelerationRate="fast"
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        scrollEventThrottle={16}
        contentContainerStyle={styles.thumbnailListContainer}
      />

      {selectedImage && (
        <Modal
          visible={selectedImage !== null}
          transparent
          animationType="none"
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
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,        
    borderColor: '#3CEB3C',  
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

export default HistoriesEstablishment;
