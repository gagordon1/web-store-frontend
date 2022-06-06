import Button from '../../components/Button';
import { CardElement } from '@stripe/react-stripe-js';


const PaymentModule = () =>{
  return (
    <div>
      <h1> Payment </h1>
      <form id="payment-form">
        <label htmlFor="card-element"> Card </label>
        <CardElement id="card-element"/>
        <Button text={"Pay"} onClick={()=>{console.log("hi")}}/>
      </form>
    </div>
  )
}

export default PaymentModule;
