import React, { useState } from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import mockup from '../../../data/database/MockUp.json';
import { Text, View } from 'react-native';

const { establishments } = mockup;
const { drinks } = establishments[0];
const { waterAndSoda, beer, cocktail, liquor } = drinks;

export default function BebidasScreenEvent() {
  const [selectedBebidas, setSelectedBebidas] = useState([]);
  const [total, setTotal] = useState(0);

  const sections = [
    { title: ' Água e Refrigerante',  data: waterAndSoda },
    { title: ' Cervejas', data: beer },
    { title: ' Drinks', data: cocktail },
    { title: ' Destilados', data: liquor }
  ];

  const handleSelectBebida = (item) => {
    const isAlreadySelected = selectedBebidas.some((bebida) => bebida.name === item.name);
    if (isAlreadySelected) {
      // Se já estiver selecionado, remova-o da seleção
      const newSelectedBebidas = selectedBebidas.filter(
        (bebida) => bebida.name !== item.name
      );
      setSelectedBebidas(newSelectedBebidas);
      setTotal(total - item.price);
    } else {
      // Caso contrário, adicione-o à seleção
      setSelectedBebidas([...selectedBebidas, item]);
      setTotal(total + item.price);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {sections.map((section) => (
            <View key={section.title}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={section.data}
                style={{ height: 160 }}
                renderItem={({ item }) => (
                  <>
                    <View style={styles.item}>
                      <Text style={{ fontSize: 13, color: '#32CD32' }}>
                        {item.name}
                      </Text>
                      <Image source={{ uri: item.image }} style={styles.itemImage} />
                      <Text style={{ marginTop:20, fontSize: 13, color: '#32CD32' }}>
                        {item.price}
                      </Text>
                      <Pressable
                        onPress={() => handleSelectBebida(item)}
                        style={[
                          styles.button,
                          {
                            backgroundColor:
                              selectedBebidas.some((bebida) => bebida.name === item.name)
                                ? '#32CD32'
                                : '#1c1c1c',
                            borderColor:
                              selectedBebidas.some((bebida) => bebida.name === item.name)
                                ? '#1c1c1c'
                                : '#32CD32',
                          },
                        ]}
                      >
                        <Text
                          style={{
                            fontSize: 13,
                            color:
                              selectedBebidas.some((bebida) => bebida.name === item.name)
                                ? 'white'
                                : '#32CD32',
                          }}
                        >
                          {selectedBebidas.some((bebida) => bebida.name === item.name)
                            ? 'Selecionado'
                            : 'Selecionar'}
                        </Text>
                      </Pressable>
                    </View>
                  </>
                )}
                keyExtractor={(item, index) => index.toString()}
                style={{ alignSelf: 'center' }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View>
        {selectedBebidas.length > 0 && (
          <Pressable
            style={styles.payButton}
            onPress={() => alert('Pagamento realizado com sucesso!')}
          >
            <Text style={styles.payButtonText}>Pagar R$ {total}</Text>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 3,
    color: '#32CD32',
  },
  item: {
    marginLeft: 6,
    marginTop: 6,
    marginBottom: 6,
    width: 160,
    height: 180,
    borderRadius: 8,
    elevation: 9,
    marginRight: 12,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    color: '#32CD32',
  },
  itemImage: {
    marginTop: 10,
    width: 60,
    height: 60,
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    color: '#32CD32',
  },
  button: {
    marginTop: 15,
    borderWidth: 1,
    width: 120,
    height: 30,
    borderRadius: 11,
    borderColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  payButton: {
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 11,
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    height: 50,
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
