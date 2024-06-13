import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import tickets from '../../data/database/Tickets.json';
import {View, Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Fontisto } from '@expo/vector-icons';

interface Props {
  ticketId: number;
  eventName: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
  ticketType: string;
  ticketPrice: number;
  ticketQrCode: string;
}
const Card: React.FC<Props> = ({ 
  ticketId,
  eventName,
  eventLocation,
  eventDate,
  eventTime,
  ticketType,
  ticketPrice,
  ticketQrCode
 }) => {
  const [showQrCode, setShowQrCode] = useState(false);
  const handlePress = () => { setShowQrCode(true) };  
  const handleClose = () => { setShowQrCode(false) };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>{eventName}</Text>
          <Text style={styles.cardSubtitle}>{eventLocation}</Text>
          <Text style={styles.cardText}>{eventDate}  {eventTime} horas</Text>
          <Text style={styles.cardText}>Tipo: {ticketType}</Text>
          <Text style={styles.cardText}>Preço: R${ticketPrice}</Text>
          <Text style={styles.cardTextQr}>Código QR: {ticketQrCode}</Text>
          <Fontisto 
             name="qrcode" size={44} color="#32CD32" 
             style={{ 
               position: 'absolute',
               right: 20,
               top: 44
              }} />
        </View>
      </TouchableOpacity>
      <Modal visible={showQrCode} animationType="slide">
        <View style={styles.qrCodeContainer}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.closeButton}>Fechar</Text>
            <Text>Este QRCODE representa o seu ingresso ou produto.</Text>
          </TouchableOpacity>
          <QRCode value={ticketQrCode} size={250} />
        </View>
      </Modal>
    </View>
  );
};

const RetiradaScreen: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop: 35, paddingBottom:5 }}>
               <View style={styles.container}>
          {tickets.tickets.map(ticket => (
            <TouchableOpacity key={ticket.ticketId}>
              <Card 
                ticketId={ticket.ticketId}
                eventName={ticket.eventName}
                eventLocation={ticket.eventLocation}
                eventDate={ticket.eventDate}
                eventTime={ticket.eventTime}
                ticketType={ticket.ticketType}
                ticketPrice={ticket.ticketPrice}
                ticketQrCode={ticket.ticketQrCode} 
              />
            </TouchableOpacity>
          ))}
        </View>
    </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
   borderRadius: 10,
  },
  cardContainer: {
    marginRight: 10,
    marginLeft:10,
    backgroundColor:'#1c1c1c',
    marginTop: 10,
    height: 140,
    borderRadius: 13,
    elevation: 9,
    alignItems:'baseline'
  },
  cardTitle: {
    marginTop:5,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:9,
    color:'#32CD32'
  },
  cardSubtitle:{
    fontSize: 13,
    marginLeft:9, 
    marginEnd:2,
    color:'#32CD32',
  },
  cardText:{
    fontSize: 13,
    marginLeft:9, 
    color:'#32CD32',
  },
  cardTextQr:{
    marginHorizontal: 120,
    marginVertical: -25,
    color:'#32CD32'
  },
  qrCodeContainer: {
    alignItems:'center',
    marginVertical: 200,
    color:'#32CD32',
  },
  closeButton:{
    marginBottom: 20,
    fontSize: 20
  }
});

export default RetiradaScreen;

