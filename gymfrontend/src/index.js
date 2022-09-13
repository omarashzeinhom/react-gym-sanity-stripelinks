import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { CartProvider } from 'use-shopping-cart'

const root = ReactDOM.createRoot(document.getElementById('root'));
const REACT_APP_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_51LgJSeLiZAbNGcKOMadZJOspum1fTo7lwDrH1zcM69l7MvRic1VItzVLqxZileiDujlFfpawsTA2kdn9FQsQWzkm00LU4GfvIR";

root.render(
<CartProvider
    mode="payment"
    cartMode="client-only"
    stripe={process.env.REACT_APP_PUBLIC_STRIPE_PUBLISHABLE_KEY}
    successUrl="stripe.com"
    cancelUrl="twitter.com/"
    currency="USD"
    allowedCountries={['US', 'GB', 'CA', 'EG']}
    billingAddressCollection={true}
  >
    <App />
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
