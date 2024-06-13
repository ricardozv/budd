import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, ScrollView, Alert, TextInput } from 'react-native';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { CardField, useStripe, useConfirmPayment  } from '@stripe/stripe-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

Amplify.configure(awsconfig);
console.log(awsconfig);
const data = require('../../data/database/Profile.json');

interface CardDetails {
  complete: boolean;
  brand?: string; 
 
}

const config = {
  signUpConfig: {
    hiddenDefaults: ['phone_number'],
    signUpFields: [
     {
        label: 'Name',
        key: 'name',
        required: false,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 2,
        type: 'string',
      },
      {
        label: 'Senha',
        key: 'password',
        required: true,
        displayOrder: 3,
        type: 'password',
      },
    ],
    
  },
  includeGreetings: true,
  usernameAttributes: 'email',
  greetings: 'Welcome, {username} ({email})',
};

const theme = {
  ...AmplifyTheme,
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor:'#000'
  },
  formField: {
  marginBottom: 22,
  },
  sectionFooterLink: {
		fontSize: 14,
    paddingTop: 12,
		color:'#fff',
		alignItems: 'baseline',
		textAlign: 'center',
    backgroundColor:'#32CD32',
    height:50,
    borderRadius: 10,
    marginRight:8,
    marginLeft:8
	},
  sectionFooterLinkDisabled: {
		fontSize: 14,
		color: 'red',
	  alignItems: 'baseline',
		textAlign: 'center',
    backgroundColor:'#006400',
    height:50,
    padding: 14,
    justifyContent: 'center',
    borderRadius: 10,
	},
  input: {
    height: 40,
    backgroundColor:'#1c1c1c',
    borderRadius: 10,
    color: '#fff',
    placeholderTextColor: '#aaa',
  },
  inputLabel: {
    marginBottom: 8,
    color: '#fff',
    
  },
  button: {
    backgroundColor:'#32CD32',
    borderRadius: 10,
    height:35,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
	backgroundColor:'#006400',
		alignItems: 'center',
		padding: 16,
    borderRadius: 10,
    height: 35,
	},
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  sectionHeaderText:{
    marginTop: 10,
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sectionHeader: {
		width: '100%',
		marginBottom: 32,
		paddingTop: 20,
   color:'#fff',
	},
  errorRowText: {
		marginLeft: 10,
    color:'#fff',
	},
  
};
  
const API_URL = "http://192.168.15.6:3000";
const Profile = () => {
  const [email, setEmail] = useState('');
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);
  const { nome, foto, telefone } = data;
  const [showForm, setShowForm] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);
  const [formHeight, setFormHeight] = useState(new Animated.Value(0));
  const { confirmPayment } = useStripe();
  const { createToken } = useStripe();
  const [paymentAmount, setPaymentAmount] = useState('');


  const toggleForm = () => {
    setShowForm(!showForm);
    Animated.timing(formHeight, {
      toValue: showForm ? 0 : 300,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };


const handleCardChange = (cardDetail: CardDetails) => {
  setCardDetails(cardDetail);
  setIsCardComplete(cardDetail.complete); 
  console.log("Detalhes do cartão:", cardDetail);
};

const handlePayPress = async () => {
  const amountInCents = parseInt(paymentAmount) * 100;
  console.log("Tentativa de pagamento com:", { email, amount: amountInCents });

  try {
    const response = await fetch(`${API_URL}/api/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, amount: amountInCents }),
    });

    const responseData = await response.json();

    if (!responseData.clientSecret) {
      Alert.alert("Erro", "Não foi possível obter o clientSecret.");
      return;
    }

    // Logs adicionados aqui
    console.log("Preparando para confirmar pagamento com os detalhes do cliente e o clientSecret:", responseData.clientSecret);
    console.log({
      paymentMethodData: {
        billingDetails: { email }, // Usar o e-mail fornecido pelo usuário ou um valor fixo para testes
      },
    });

    // Confirmação do PaymentIntent com detalhes do cartão
    const result = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card', // Adicionando explicitamente o paymentMethodType
      paymentMethodData: {
        billingDetails: { email: "email@example.com" }, // Use o e-mail do usuário aqui
      },
    });

    if (result.error) {
      console.log("Erro ao confirmar pagamento:", result.error);
      Alert.alert("Erro", result.error.message);
    } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
      console.log("Pagamento confirmado com sucesso:", result.paymentIntent);
      Alert.alert("Sucesso", "Pagamento efetuado com sucesso!");
    } else {
      Alert.alert("Pagamento pendente", "O pagamento está pendente ou necessita de ação adicional.");
    }
  } catch (error) {
    console.error("Erro durante o processo de pagamento:", error);
    Alert.alert("Erro", "Não foi possível processar o pagamento.");
  }
};

  return (
    <>
    <ScrollView>
      <View>
      <TouchableOpacity>
          <MaterialCommunityIcons
                      name="face-recognition" size={75} color="#32CD32"
                      style={{
                        position: 'absolute',
                        top: 1,
                        marginLeft: 10,          
                      }} />
          </TouchableOpacity>
          
        <View style={styles.cardName}>
       
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.text}>{nome}</Text>
        </View>
        <View style={styles.cardPhone}>
          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.text}>{telefone}</Text>
        </View>
        <View style={styles.cardEmal}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
        <TouchableOpacity style={styles.cardAdd} onPress={toggleForm}>
          <Text style={styles.cardAddText}>ADICIONAR CARTÃO</Text>
        </TouchableOpacity>
        {showForm && (
          <View >
            <Animated.View style={[styles.formContainer, { height: formHeight }]}>
              <Text style={styles.cardAddText}>Dados do cartão</Text>
              <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder=" Digite seu e-mail"
              placeholderTextColor="#777"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPaymentAmount}
              value={paymentAmount}
              placeholder="Valor do Pagamento"
              placeholderTextColor="#777"
              keyboardType="numeric"
            />

              <CardField
                 postalCodeEnabled={false}
                  placeholders={{
                    number: 'NUMERO DO CARTÃO',
                  }}
                  cardStyle={{
                    backgroundColor: '#ffffff', 
                    textColor: '#000000',
                    borderRadius: 8,
                    fontSize: 16, 
                  }}
                  style={{
                    width: '100%', 
                    height: 50, 
                    marginVertical: 15, 
                    marginHorizontal: 0
                  }}
                  onCardChange={handleCardChange}
                  onFocus={(focusedField) => {
                    console.log('focusField', focusedField);
                  }}
                />

                <TouchableOpacity 
                  style={[styles.cardAddButton, { backgroundColor: isCardComplete ? '#32CD32' : '#000' }]}
                  disabled={!isCardComplete}
                  onPress={ handlePayPress}>
                  <Text style={styles.cardAddButtonText}>Pagar</Text>
                </TouchableOpacity>
            </Animated.View>
            
          </View>
        )}
      </View>
      <View style={styles.textDeleted}>
      <Text style={styles.textDel}>Sobre nós</Text>
      <Text style={styles.textDel}> Alterar senha</Text>
        <Text style={styles.textDel}> Excluir conta</Text>
        <Text style={styles.textDel}> Sair</Text>
      </View>
  </ScrollView>
  </>
  )};


  export default withAuthenticator(Profile, {
    ...config,
    theme,
  });

const styles = StyleSheet.create({
  cardName: {
    marginLeft:100,
    marginRight:10,
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    height:80,
  },
  cardPhone: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginLeft:10,
    marginRight:10,
    
  },
  cardEmal: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginLeft:10,
    marginRight:10,
  },
  cardAdd: {
    marginRight:10,
    flexDirection: 'row',
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginLeft:10
  },
  cardAddText: {
    fontSize: 16,
    color:'#32CD32',
    fontWeight: 'bold',
  },
  cardAddTitle: {
    fontSize: 18,
    color: '#32CD32',
    marginBottom: 10
  },
  input: {
    height: 40,
    marginTop: 15,
    marginVertical: 10, 
    marginHorizontal: 1, 
    borderColor: '#CCCCCC',
    borderWidth: 1, 
    borderRadius: 5,
    backgroundColor: '#ffffff', 
    fontSize: 16, 
    color: '#000000' 
  },
  cardAddButton: {
    backgroundColor: '#32CD32',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 50,
    alignSelf: 'center',
    marginLeft:200
  },
  cardAddButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  formContainer: {
    marginTop:3,
    flexDirection:'column',
    backgroundColor: '#1c1c1c',
    borderRadius: 19,
    padding: 10,
    marginBottom:5,
    marginLeft:10,
    marginRight: 10, 
    borderColor: '#32CD32',
    elevation:9
  },
  label:{
    fontSize:16,
    color:'#32CD32',
  },
  text:{
    fontSize:16,
    color:'#fff'
  },
  buttonSave:{
    alignItems:'flex-end'
  },
  textDeleted:{
    marginTop: -7,
    marginLeft: 10
  },
  textDel:{
    color:'#fff',
    fontWeight:'400',
    fontSize: 14
  }
})
