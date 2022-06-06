import Button from '../../components/Button';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentForm, PaymentContainer, ButtonNavigator } from './CheckoutStyled';
import Loader from '../../components/Loader';
import { useState, useEffect } from 'react';



const PaymentModule = (props) =>{

  const elements = useElements();
  const stripe = useStripe();
  const [loading, setLoading] = useState(false);

  const textLocation = (city, state, zipCode) =>{

    return (state == "")? city + ", " + zipCode
    : city + ", " + state +  ", " + zipCode

  }

  const textAddress = (address, suite ) =>{
    return (suite=="")? address : address + " " + suite
  }

  const handleSubmit = async(e) => {

    const card = elements.getElement(CardElement);

    setLoading(true);
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
      setLoading(false);
      return;
    }
    console.log("Payment intent created");

    const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
      clientSecret, {
        payment_method : {
          card : card
        }
      }
    )
    if (stripeError){
      alert(stripeError.message);
      setLoading(false);
      return;
    }

    console.log(`Payment Intent ${paymentIntent.id}: ${paymentIntent.status}`)

    if (paymentIntent.status === "succeeded"){
      console.log("submitting order to printful");
    }

    //Submit order to printful if successful


    setLoading(false);
  }

  return (
    <PaymentContainer>
      <h3> Order Summary </h3>
      <p> Ship To: </p>
      <p> {props.shippingInfo.firstName + " " + props.shippingInfo.lastName}  </p>
      <p> {props.shippingInfo.email}  </p>
      <p> {textAddress(props.shippingInfo.address, props.shippingInfo.suite)}  </p>
      <p> {textLocation(props.shippingInfo.city, props.shippingInfo.state, props.shippingInfo.zipCode)}  </p>
      <p> {props.shippingInfo.country}  </p>

      <h3> Payment </h3>
      <p> Price: ${props.product.retailPrice} </p>
      <p> Shipping: ${props.shippingPrice} </p>

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
