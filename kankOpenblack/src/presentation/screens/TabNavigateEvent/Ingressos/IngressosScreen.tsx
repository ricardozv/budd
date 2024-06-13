import React, {useState} from 'react';
import { Alert, Pressable, Text, View, ScrollView } from 'react-native';
import data from '../../../../data/database/MockUp.json';
import styles from './styles';
import { Fontisto } from '@expo/vector-icons';

const GuestsScreen = () => {
  const [Ingresso1, setIngresso1] = useState(0);
  const [Ingresso2, setIngresso2] = useState(0);
  const [Ingresso3, setIngresso3] = useState(0);
  const [total, setTotal] = useState(0);

  const handleAddIngresso = () => {
    if (Ingresso1 < 5)
    setIngresso1(Ingresso1 + 1);
    setTotal(total + data.events[0].tickets.price);
    }
    
    const handleRemoveIngresso = () => {
      if (Ingresso1 > 0)
    setIngresso1(Math.max(0, Ingresso1 - 1));
    setTotal(total - data.events[0].tickets.price);
    }
 
    return (
      <View>
      <ScrollView>
          <View style={{justifyContent: 'space-between', height: '100%'}}>
            <View>
              <View style={styles.row}>
                <View style={{backgroundColor:'#1c1c1c'}}>
                <Fontisto 
                name="ticket" size={34} color="#32CD32" 
                style={{ 
                  position: 'absolute',
                    marginLeft: 20,
                  top:6
                  }} />
                  <Text style={{
                    fontWeight: 'bold', 
                    color: '#32CD32', 
                    backgroundColor:'#1c1c1c',
                    marginLeft: 25, 
                    marginTop: 20}}>INTEIRA</Text>
                  <Text 
                    style={{
                      color:'#32CD32', 
                      backgroundColor:'#1c1c1c',
                      marginLeft: 25,
                      }}>R$ {data.establishments[0].tickets.price} reais </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor:'#1c1c1c', marginRight:15}}>
                  <Pressable
                      disabled={Ingresso1 === 0}
                    onPress={handleRemoveIngresso}
                    style={styles.button}>
                    <Text style={{fontSize: 20, color: '#32CD32'}}>-</Text>
                  </Pressable>
                      <Text style={{marginHorizontal: 20, fontSize: 16, color: '#32CD32' }}>{Ingresso1}</Text>
                  <Pressable
                    disabled={Ingresso1 === 5}
                    onPress={handleAddIngresso}
                    style={styles.button}>
                    <Text style={{fontSize: 20, color: '#32CD32'}}>+</Text>
                  </Pressable>
                </View>
              </View>
                {/* Nesse componente não vou precisar desse código, vou deixar 
                para ver como vai ficar a interface quando o back end estiver 
                funcionando */}
             <View style={styles.row}>
                <View style={{backgroundColor:'#1c1c1c'}}>
                  <Text 
                    style={{
                      fontWeight: 'bold', 
                      color: '#32CD32', 
                      backgroundColor:'#1c1c1c',
                      marginLeft: 25, 
                      marginTop: 20}}>MEIA</Text>
                  <Text  style={{
                      color:'#32CD32', 
                      backgroundColor:'#1c1c1c',
                      marginLeft: 25,
                      }}>R$ 7.50</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor:'#1c1c1c', marginRight:15}}>
                  <Pressable
                    onPress={() => setIngresso2(Math.max(0, Ingresso2 - 1))}
                    style={styles.button}>
                    <Text style={{fontSize: 20, color: '#32CD32'}}>-</Text>
                  </Pressable>
                      <Text style={{marginHorizontal: 20, fontSize: 16, color: '#32CD32'}}>{Ingresso2}</Text>
                  <Pressable
                    onPress={() => Ingresso2 < 5 ? setIngresso2(Ingresso2 + 1): null }
                    style={styles.button}>
                    <Text style={{fontSize: 20, color: '#32CD32'}}>+</Text>
                  </Pressable>
                </View>
              </View> 
  
              <View style={styles.row}>
                <View style={{backgroundColor:'#1c1c1c'}}>
                  <Text style={{
                    fontWeight: 'bold', 
                    color: '#32CD32', 
                    backgroundColor:'#1c1c1c',
                    marginLeft: 25, 
                    marginTop: 20}}>COMBO</Text>
                  <Text  style={{
                      color:'#32CD32', 
                      backgroundColor:'#1c1c1c',
                      marginLeft: 25,
                      }}>R$ 25.99</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center',  backgroundColor:'#1c1c1c', marginRight:15}}>
                  <Pressable
                    onPress={() => setIngresso3(Math.max(0, Ingresso3 - 1))}
                    style={styles.button}>
                    <Text style={{fontSize: 20, color: '#32CD32'}}>-</Text>
                  </Pressable>
                    <Text style={{marginHorizontal: 20, fontSize: 16, color: '#32CD32'}}>{Ingresso3}</Text>
                  <Pressable
                    onPress={() => Ingresso3 < 5 ? setIngresso3(Ingresso3 + 1):null }
                    style={styles.button}>
                    <Text style={{fontSize: 20, color: '#32CD32'}}>+</Text>
                  </Pressable>
                </View>
              </View>
              <View>
                <Text style={{ 
                  marginLeft: 15, 
                  color: '#474747'}}> Observações </Text>
              </View>
            </View>
            
          </View>
      </ScrollView>
      
      </View>
    );
};

export default GuestsScreen;