import React, {useState} from 'react';
import { Text, View } from '../../components/Themed';
import {events} from '../../../data/database/MockUp.json';
import { StyleSheet, Image, Pressable } from 'react-native';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import data from '../../../data/database/MockUp.json';

interface Props {
  children: React.ReactNode;
}

const food = events[0].foods?.Hambuguers

const ComidasScreen: React.FC<Props> = () => {
  const [Comida, setComida] = useState(0);
  const [total, setTotal] = useState(0);

  const handleAddComida = () => {
    if (Comida < 10)
    setComida(Comida + 1);
    setTotal(total + data.events[0].foods.Hambuguers);
  }
  
  const handleRemoveComida = () => {
      if (Comida > 0)
    setComida(Math.max(0, Comida - 1));
    setTotal(total - data.events[0].foods.Hambuguers);
  }

  if (!food || !Array.isArray(food)) {
    return <Text>Nenhuma comida encontrada</Text>;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
  <ScrollView showsVerticalScrollIndicator={false} >
    <View >
      {food.map((item) => (
        <View style={styles.cardContainer} key = {item.id} >
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <Text style={styles.cardPrice}>  R$ {item.price}</Text>

          <View style={{
            flexDirection: 'row', 
            alignItems: 'center',
            marginLeft: 120, 
            marginVertical: 11}}>
            <Pressable
              disabled={Comida === 0}
              onPress={handleRemoveComida}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#32CD32'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{Comida}</Text>
            <Pressable
              disabled={Comida === 10}
              onPress={handleAddComida}
              style={styles.button}> 
              <Text style={{fontSize: 20, color: '#32CD32'}}>+</Text>
            </Pressable>
          </View> 
        </View>
        
      ))}
      <View>
            <Pressable style={styles.payButton} elevation={9}
            onPress={() => alert('Pagamento realizado com sucesso!')}>
              <Text style={styles.payButtonText} >Valor total a pagar: R$ {total}</Text>
            </Pressable>
        </View>
          
    </View>
  </ScrollView>
  </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 130,
    elevation: 9, 
    //backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
    marginLeft: 3,
    marginRight:7
  },
  cardTitle: {
    marginLeft: 120,
    marginTop: 20
  },
  cardImage: {
    height: 80,
    width: 80,
    borderRadius: 60, 
    marginLeft: 10,
    marginVertical:-20, 
  },
  cardPrice: {
    marginLeft: -53,
    marginTop: -40,
    textAlign:'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#32CD32',
  },
  payButton:{
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 11,
    alignItems: 'center',
    marginLeft:15, 
    marginRight:15,
    marginTop: 10, 
  },
  payButtonText:{
    color: 'white',
    fontWeight: 'bold',
  }
});

export default ComidasScreen;

