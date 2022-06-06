import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import { STRIPE_PUBLISHABLE_API_KEY } from './config/StoreInfo'



(async () => {

  const stripePromise = loadStripe(STRIPE_PUBLISHABLE_API_KEY);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </React.StrictMode>
  );
})();
