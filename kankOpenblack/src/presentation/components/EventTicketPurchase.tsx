import React, { useState } from 'react';
import { Alert, Text, View, ScrollView, Image, Pressable } from 'react-native';
import styles from './styles'; 
import { Fontisto } from '@expo/vector-icons';

interface Ticket {
  type: string;
  price: number;
}

interface Event {
  image: string;
  name: string;
  date: string;
  ticketType: string;
  ticketPrice: number;
  tickets: Ticket[];
}

interface EventTicketPurchaseProps {
  event: Event;
  onClose: () => void;
}

const EventTicketPurchase: React.FC<EventTicketPurchaseProps> = ({ event, onClose }) => {
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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image style={styles.eventImage} source={{ uri: event.image }} />
        <Text style={styles.eventTitle}>{event.name}</Text>
        <Text style={styles.ticketType}>Data: {event.date}</Text>
        <Text style={styles.ticketType}>Tipo de Ingresso: {event.ticketType}</Text>
        <Text style={styles.ticketPrice}>Valor do Ingresso: R$ {event.ticketPrice} reais</Text>
        <Text style={styles.ticketPrice}>Ingressos para o evento abaixo!</Text>
        <View>
          {event.tickets.map((ticket: Ticket) => (
            <View key={ticket.type} style={styles.row}>
              <View style={styles.ticketInfo}>
                <Text style={styles.ticketType}>{ticket.type}</Text>
                <Text style={styles.ticketPrice}>R$ {ticket.price} reais</Text>
              </View>
              <Fontisto
                name="ticket" size={30} color="#32CD32"
                style={styles.icon}
              />
              <View style={styles.buttonContainer}>
                {selectedTicketType === ticket.type ? (
                  <Pressable
                    onPress={() => handleRemoveIngresso()}
                    style={styles.selectedButton}>
                    <Text style={styles.buttonText}>Selecionado</Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => handleAddIngresso(ticket.type, ticket.price)}
                    style={styles.selectButton}>
                    <Text style={styles.buttonText}>Selecionar</Text>
                  </Pressable>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
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
            <Text style={styles.payButtonText}>Pagar</Text>
          </Pressable>
        )}
        <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EventTicketPurchase;
