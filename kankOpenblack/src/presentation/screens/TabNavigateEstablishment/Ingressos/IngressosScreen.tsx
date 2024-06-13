import React, { useState } from 'react';
import { Alert, Pressable, Text, View, ScrollView } from 'react-native';
import styles from './styles';
import data from '../../../../data/database/MockUp.json';
import { Fontisto } from '@expo/vector-icons';

interface Ticket {
  type: string;
  price: number;
}

const IngressosScreen: React.FC = () => {
  const [selectedTicketType, setSelectedTicketType] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);

  const handleAddIngresso = (ticketType: string, price: number) => {
    setSelectedTicketType(ticketType);
    setTotal(price);
  };

  const handleRemoveIngresso = () => {
    setSelectedTicketType(null);
    setTotal(0);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingTop: 5, paddingBottom: 35 }}>
        <View>
          {data.establishments[0].tickets.map((ticket: Ticket) => (
            <View key={ticket.type} style={styles.row}>
              <View style={{ backgroundColor: '#1c1c1c' }}>
                <Fontisto
                  name="ticket" size={34} color="#32CD32"
                  style={{
                    position: 'absolute',
                    marginLeft: 20,
                    top: 6
                  }} />
                <Text style={{
                  fontWeight: 'bold',
                  color: '#32CD32',
                  backgroundColor: '#1c1c1c',
                  marginLeft: 95,
                  marginTop: 4
                }}>{ticket.type}</Text>
                <Text
                  style={{
                    color: '#32CD32',
                    backgroundColor: '#1c1c1c',
                    marginLeft: 95,
                  }}>R$ {ticket.price} reais</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#1c1c1c',
                marginRight: 15
              }}>
                {selectedTicketType === ticket.type ? (
                  <Pressable
                    onPress={() => handleRemoveIngresso()}
                    style={styles.selectedButton}>
                    <Text style={{  color: '#3CEB3C',fontWeight: 'bold'}}>Selecionado</Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => handleAddIngresso(ticket.type, ticket.price)}
                    style={styles.selectedButton}>
                    <Text style={{  color: '#268F26',fontWeight: 'bold'}}>Selecionar</Text>
                  </Pressable>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View>
        {selectedTicketType && (
          <Pressable style={styles.payButton}
            onPress={() => {
              Alert.alert(
                'Confirmar pagamento',
                `Valor total a pagar: R$ ${total}`,
                [
                  { text: 'Cancelar', onPress: () => console.log('Cancelado') },
                  { text: 'Pagar', onPress: () => console.log('Pagamento realizado com sucesso!') },
                ],
                { cancelable: false },
              );
            }}>
            <Text style={styles.payButtonText} >Valor total a pagar: R$ {total}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default IngressosScreen;
