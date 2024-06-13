import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const data = require('../../data/database/Profile.json');

interface PerfilInfoProps {
  nome: string;
  foto: string;
  telefone: string;
  email: string;
}

const PerfilInfo: React.FC<PerfilInfoProps> = ({ nome, foto, telefone, email }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: foto }} style={styles.image} />
      <Text style={styles.text}>{nome}</Text>
      <Text style={styles.text}>{telefone}</Text>
      <Text style={styles.text}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
  },
});

export default PerfilInfo;
