
import React, { useState } from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';
import { ScrollView,GestureHandlerRootView } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import mockup from '../../../data/database/MockUp.json';
import { Text, View } from 'react-native';

const { establishments } = mockup;
const { foods } = establishments[0];
const { Hambuguers } = foods;

export default function ComidasScreen() {
  const [selectedComidas, setSelectedComidas] = useState([]);
  const [total, setTotal] = useState(0);

  const handleSelectComida = (item) => {
    const isAlreadySelected = selectedComidas.some((comida) => comida.name === item.name);
    if (isAlreadySelected) {
      // Se já estiver selecionado, remova-o da seleção
      const newSelectedComidas = selectedComidas.filter(
        (comida) => comida.name !== item.name
      );
      setSelectedComidas(newSelectedComidas);
      setTotal(total - item.price);
    } else {
      // Caso contrário, adicione-o à seleção
      setSelectedComidas([...selectedComidas, item]);
      setTotal(total + item.price);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {Hambuguers.map((item) => (
            <View style={styles.cardContainer} key={item.id}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Image source={{ uri: item.image }} style={[styles.cardImage, { maxHeight: 60, maxWidth: 60 }] } />
              <Text style={styles.cardPrice}>  R$ {item.price}</Text>
              <View style={styles.buttonContainer}>
                <Pressable
                  onPress={() => handleSelectComida(item)}
                  style={[
                    styles.button,
                    {
                      backgroundColor: selectedComidas.some(
                        (comida) => comida.name === item.name
                      )
                        ? '#32CD32'
                        : '#1c1c1c',
                      borderColor: selectedComidas.some(
                        (comida) => comida.name === item.name
                      )
                        ? '#1c1c1c'
                        : '#32CD32',
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: selectedComidas.some(
                        (comida) => comida.name === item.name
                      )
                        ? 'white'
                        : '#32CD32',
                    }}
                  >
                    {selectedComidas.some((comida) => comida.name === item.name)
                      ? 'Selecionado'
                      : 'Selecionar'}
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View>
        {selectedComidas.length > 0 && (
          <Pressable
            style={styles.payButton}
            onPress={() => alert('Pagamento realizado com sucesso!')}
          >
            <Text style={styles.payButtonText}>
              Pagar: R$ {total}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
    </GestureHandlerRootView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContainer: {
    height: 100,
    elevation: 9,
    borderRadius: 15,
    margin: 10,
    marginLeft: 3,
    marginRight: 7,
    borderColor: '#32CD32',
    borderWidth: 0.3,
  },
  cardTitle: {
    marginLeft: 90,
    marginTop: 20,
    color: '#32CD32',
  },
  cardImage: {
    height: 80,
    width: 80,
    borderRadius: 20,
    marginLeft: 10,
    marginVertical: -20,
  },
  cardPrice: {
    marginLeft: 240,
    marginTop: -40,
    textAlign: 'center',
    color: '#32CD32',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 220,
    marginVertical: 11,
  },
  button: {
    borderWidth: 1,
    width: 120,
    height: 28,
    borderRadius: 11,
    borderColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  payButton:{
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 11,
    alignItems: 'center',
    marginLeft:3, 
    marginRight:3,
    marginTop: 10, 
    height:50,
  },
  payButtonText:{
    color: 'white',
    fontWeight: 'bold',
  }
});


