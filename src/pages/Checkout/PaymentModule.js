import Button from '../../components/Button';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentForm, PaymentContainer } from './CheckoutStyled';


const PaymentModule = () =>{

  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async(e) => {
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



  }

  return (
    <PaymentContainer>
      <h3> Payment </h3>
      <PaymentForm>
        <CardElement id="card-element"/>
        <Button text={"Pay"} onClick={handleSubmit}/>
      </PaymentForm>
    </PaymentContainer>
  )
}

export default PaymentModule;
