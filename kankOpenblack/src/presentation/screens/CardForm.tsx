import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

interface CardFormProps {
  isCardComplete: boolean;
  onCardChange: (cardDetails: any) => void;
  onSaveCard: () => Promise<void>;
}

const CardForm: React.FC<CardFormProps> = ({ isCardComplete, onCardChange, onSaveCard }) => {
  return (
    <View>
      <CardField
        postalCodeEnabled={true}
        placeholders={{ number: 'NUMERO DO CARTÃO' }}
        cardStyle={{ backgroundColor: '#ffffff', textColor: '#000000', borderRadius: 8, fontSize: 16 }}
        style={{ width: '100%', height: 50, marginVertical: 15 }}
        onCardChange={onCardChange}
      />
      <TouchableOpacity 
        style={[styles.cardAddButton, { backgroundColor: isCardComplete ? '#32CD32' : '#000' }]}
        disabled={!isCardComplete}
        onPress={onSaveCard}
      >
        <Text style={styles.cardAddButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardAddButton: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 10,
  },
  cardAddButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CardForm;
