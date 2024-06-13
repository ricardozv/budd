import { Text, View } from 'react-native';
import React, { useState } from 'react';
import {  StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import data from '../../data/database/Compras.json';

interface Purchase {
  establishment_id: string;
  establishment_name: string;
  date: string;
  time: string;
  tickets: {
    quantity: number;
    price: number;
  };
  drinks: {
    name: string;
    quantity: number;
    price: number;
  }[];
  foods: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
}

interface Purchases {
  purchases0: Purchase[];
  purchases1: Purchase[];
}

const PurchaseHistory = () => {
  const [selectedPurchase, setSelectedPurchase] = useState<Purchase | null>(null);

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop: 35, paddingBottom:5 }}>
      {Object.values(data).flat().map((purchase: Purchase) => (
        <TouchableWithoutFeedback
        onPress={() => setSelectedPurchase(selectedPurchase === purchase ? null : purchase)}
      >
      <View 
          style={selectedPurchase === purchase ? styles.selectedCard : styles.card} 
          key={purchase.establishment_id} 
          onPress={() => setSelectedPurchase(selectedPurchase === purchase ? null : purchase)}
        >
          <Text style={[styles.title, selectedPurchase === purchase ? { color: 'white' } : null]}>{purchase.establishment_name}</Text>
          <Text style={[styles.textData, selectedPurchase === purchase ? { color: 'white' } : null]}>Data: {purchase.date}</Text>
          <Text style={[styles.textHora, selectedPurchase === purchase ? { color: 'white' } : null]}>Hora: {purchase.time}</Text>
          {selectedPurchase === purchase && (
            <>
              <Text style={[styles.textIngressos, { color: 'white' }]}>Quantidade de ingressos: {purchase.tickets.quantity}</Text>
              <Text style={[styles.textBebidas, { color: 'white' }]}>Quantidade de Bebidas:</Text>
              {purchase.drinks.map((drink) => (
                <Text key={drink.name} style={[styles.text, { color: 'white' }]}>
                  {drink.name}: {drink.quantity}
                </Text>
              ))}
              <Text style={[styles.textComidas, { color: 'white' }]}>Comidas:</Text>
              {purchase.foods.map((food) => (
                <Text key={food.name} style={[styles.text, { color: 'white' }]}>
                  {food.name}: {food.quantity}
                </Text>
              ))}
              <Text style={[styles.textTotal, { color: 'white' }]}>Total: R${purchase.total}</Text>
            </>
          )}
        </View>
        </TouchableWithoutFeedback >
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 9,
    backgroundColor:'#1c1c1c'
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#32CD32'
  },
  text: {
    fontSize: 15,
    marginBottom: 3,
    color:'#32CD32'
  },
  textData: {
    fontSize: 15,
    marginBottom: 3,
    color:'#32CD32'
  },
  textHora: {
    fontSize: 15,
    marginBottom: 3,
    color:'#32CD32'
  },
  textIngressos: {
    fontSize: 15,
    marginBottom: 3,
    color:'#32CD32'
  },
  textBebidas: {
    fontSize: 15,
    marginBottom: 3,
    color:'#32CD32'
  },
  textComidas: {
    fontSize: 15,
    marginBottom: 3,
    color:'#32CD32'
  },
  textTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#32CD32'
  },
  selectedCard: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 9,
    color:'#32CD32'
  }
});

export default PurchaseHistory;
