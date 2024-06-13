import React, {useState} from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import {  Image, Button } from 'react-native';
import mockup from '../../../data/database/MockUp.json';
import { Text, View } from 'react-native';
import data from '../../../data/database/MockUp.json';

const { events } = mockup;
const { drinks } = events[0];
const { waterAndSoda, beer, cocktail, liquor } = drinks;

export default function BebidasScreenEvent() {
  const [bebida, setBebida] = useState(0);
  const [total, setTotal] = useState(0);

  const sections = [
    { title: ' Água e Refrigerante',  data: waterAndSoda },
    { title: ' Cervejas', data: beer },
    { title: ' Drinks', data: cocktail },
    { title: ' Destilados', data: liquor }
  ];

  const handleAddBebida = (price) => {
    if (bebida < 15)
    setBebida(bebida + 1);
    setTotal(total + price);
    }
    
    const handleRemoveBebida = (price) => {
      if (bebida > 0)
    setBebida(Math.max(0, bebida - 1));
    setTotal(total - price);

    }
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {sections.map((section) => (
          <View key={section.title}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={section.data}
              style={{height: 160}}
              renderItem={({ item }) => (
                <>
                <View style={styles.item}>
                    <Text style={{fontSize: 15, color: '#32CD32'}}>{item.name}</Text>
                        <Image source={{ uri: item.image }} 
                            style={styles.itemImage} />
                          <Text style={{fontSize: 13, color: '#32CD32'}}>{item.price}</Text>                  
                </View>
                    <View style={{
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        position: 'absolute',
                        padding: 10,
                        marginTop: 142,
                        marginLeft: 35}}>
  
                      <Pressable
                        disabled={bebida === 0}
                        onPress={() => handleAddBebida(item.price)} 
                        style={styles.button}>
                        <Text style={{fontSize: 20, color: '#32CD32'}}>-</Text>
                      </Pressable>
                          <Text style={{
                            marginHorizontal: 20, 
                            fontSize: 16, 
                            color: '#32CD32',
                            alignSelf: 'flex-end'}}>
                              {bebida}
                          </Text>
                      <Pressable
                        disabled={bebida === 15}
                        onPress={() => handleAddBebida(item.price)}
                        style={styles.button}>
                        <Text style={{fontSize: 20, color: '#32CD32'}}>+</Text>
                      </Pressable>  
                    </View>
             
              </>
            )}
                keyExtractor={(item, index) => index.toString()}
                style={{ alignSelf: 'center'}}
            />
          </View>
        ))}
      </View>
      <View>
          <Pressable 
            style={styles.payButton} 
            onPress={() => alert('Pagamento realizado com sucesso!')}>
              <Text style={styles.payButtonText}>Pagar R$ {total}</Text>
          </Pressable>
      </View>          
      </ScrollView>
      </GestureHandlerRootView>
    )}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop:3,
      color: '#32CD32',
      
    },
    item: {
      marginLeft:6,
      marginTop: 16,
      marginBottom:6,
      width: 190,
      height: 200,
      borderRadius:8,
      elevation:9,
      marginRight: 12,
      backgroundColor: '#1c1c1c',
      alignItems: 'center',
      color: '#32CD32'
    },
    itemImage: {
      marginTop: 5,
      width:60,
      height:60, 
      alignItems:'center',
      backgroundColor: '#1c1c1c',
      color: '#32CD32'
    }, 
    
    button:{
      marginTop: 5,
      borderWidth: 1,
      width: 30,
      height: 30,
      borderRadius: 15,
      borderColor: '#32CD32',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1c1c1c'
      
    },
    payButton: {
      backgroundColor: '#32CD32',
      padding: 10,
      borderRadius: 11,
      alignItems: 'center',
      marginLeft:15, 
      marginRight:15,
      marginTop: 10, 
      height:50,
    },
    payButtonText: {
      color: 'white',
      fontWeight: 'bold',
    }
  });
  