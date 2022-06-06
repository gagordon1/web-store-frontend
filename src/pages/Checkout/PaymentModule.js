import Button from '../../components/Button';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentForm, PaymentContainer, ButtonNavigator } from './CheckoutStyled';
import { Loader } from '../../components/Loader';
import { useState } from 'react';



const PaymentModule = (props) =>{

  const elements = useElements();
  const stripe = useStripe();
  const loading = useState(false);

  const textLocation = (city, state, zipCode) =>{

    return (state == "")? city + ", " + zipCode
    : city + ", " + state +  ", " + zipCode

  }

  const textAddress = (address, suite ) =>{
    return (suite=="")? address : address + " " + suite
  }

  const handleSubmit = async(e) => {


    //CREATE STRIPE PAYMENT INTENT AND CONFIRM PAYMENT
    e.preventDefault()
    if (!stripe || !elements){
      return;
    }
    const {error: backendError, clientSecret} = await fetch('/create-payment-intent',{
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          paymentMethodType : 'card',
          currency : 'usd'
        })
      }).then(
        r => r.json()
      );
    if(backendError){
      console.log(backendError.message);
      return;
    }
    console.log("Payment intent created");

    const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
      clientSecret, {
        payment_method : {
          card : elements.getElement(CardElement)
        }
      }
    )
    if (stripeError){
      alert(stripeError.message);
      return;
    }

    console.log(`Payment Intent ${paymentIntent.id}: ${paymentIntent.status}`)

    //



  }

  return (
    <PaymentContainer>
      <h3> Order Summary </h3>
      <p> Ship To: </p>
      <p> {props.shippingInfo.firstName + " " + props.shippingInfo.lastName}  </p>
      <p> {props.shippingInfo.email}  </p>
      <p> {textAddress(props.shippingInfo.address, props.shippingInfo.suite)}  </p>
      <p> {textLocation(props.shippingInfo.city, props.shippingInfo.state, props.shippingInfo.zipCode)}  </p>

      <h3> Payment </h3>
      <PaymentForm>
        <CardElement id="card-element"/>
        <ButtonNavigator>
          <Button width={"48%"} onClick={() => props.setPage("shipping")} text={"Return to shipping details"}/>
          <Button width={"48%"} onClick={handleSubmit} text={"Pay"}/>
        </ButtonNavigator>
      </PaymentForm>
    </PaymentContainer>
  )
}

export default PaymentModule;
