import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Linking } from 'react-native';
import styles from './styles';

interface IntroProps {
  navigation: NavigationProp<any>;
}

export default function Intro({ navigation }: IntroProps) {
  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Bem-vindo ao barbuddy, seu companheiro para uma noite perfeita.
        </Text>
        <Text style={styles.subtitle}>Você tem 18 anos ou mais?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGoHome}>
          <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL('https://www.jusbrasil.com.br/legislacao/174690102/lei-13106-15/');
          }}
        >
          <Text style={styles.buttonText}>Não</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
