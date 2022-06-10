import Button from '../../components/Button';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentForm, PaymentContainer, ButtonNavigator } from './CheckoutStyled';



const PaymentModule = (props) =>{

  const elements = useElements();
  const stripe = useStripe();

  const textLocation = (city, state, zipCode) =>{

    return (state === "")? city + ", " + zipCode
    : city + ", " + state +  ", " + zipCode

  }

  const textAddress = (address, suite ) =>{
    return (suite==="")? address : address + " " + suite
  }

  const handleSubmit = async(e) => {

    const card = elements.getElement(CardElement);

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
          card : card
        }
      }
    )
    if (stripeError){
      alert(stripeError.message);
      return;
    }

    console.log(`Payment Intent ${paymentIntent.id}: ${paymentIntent.status}`)

    if (paymentIntent.status === "succeeded"){
      console.log("submitting order to printful");
    }

    //Submit order to printful if successful
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
      <br></br>
      <h3> Payment </h3>
      <p> Price: ${props.product.retailPrice} </p>
      <p> Shipping: ${props.shippingData.rate} </p>
      <p> Sales Tax: ${props.salesTax.toFixed(2)} </p>
      <p> Total: ${props.totalPrice.toFixed(2)} </p>
      <p> Est. Delivery Time: {props.shippingData.minShipDays} - {props.shippingData.maxShipDays} days </p>
      <br></br>

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
