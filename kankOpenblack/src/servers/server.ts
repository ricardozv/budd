require('dotenv').config();
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);

const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Rota raiz acessada'); 
  res.send('Bem vindo ao servidor de pagamentos!');
});

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const amount = req.body.amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'brl',
      confirm: false,
      automatic_payment_methods: { enabled: true },
    });

    res.json({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    
    console.error('Error creating PaymentIntent:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Ensure server is accessible at http://localhost:${PORT}/api/create-payment-intent for POST requests`);
});

app.post('/api/create-payment-intent', async (req, res) => {
  console.log("Requisição recebida:", req.body);
});
