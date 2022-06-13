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
    props.setLoading(true)
    const card = elements.getElement(CardElement);

    //CREATE STRIPE PAYMENT INTENT AND CONFIRM PAYMENT
    e.preventDefault()
    if (!stripe || !elements){
      props.setLoading(false);
      return;
    }
    let paymentIntentResult = {}
    try{
      paymentIntentResult = await fetch('/create-payment-intent',{
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            id : props.product.id,
            variantId :props.variant.id,
            catalogVariantId : props.variant.catalogVariantId,
            recipient : {
              name : props.shippingInfo.firstName + " " + props.shippingInfo.lastName,
              email : props.shippingInfo.email,
              address : props.shippingInfo.address,
              suite : props.shippingInfo.suite,
              city : props.shippingInfo.city,
              countryCode : props.regions[props.shippingInfo.country].code,
              stateCode : props.shippingInfo.state,
              zipCode : props.shippingInfo.zipCode,
            },
            emailNotifs : props.shippingInfo.newsAndOffers,
          })
        }).then(
          r => r.json()
        );
    }catch(error){
      console.log(error.message);
      alert("Error submitting shipping info.")
      props.setLoading(false);
      return
    }
    console.log("Payment intent created");
    console.log(paymentIntentResult);
    const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
      paymentIntentResult.clientSecret, {
        payment_method : {
          card : card
        }
      }
    )
    if (stripeError){
      alert(stripeError.message);
      props.setLoading(false);
      return;
    }

    console.log(`Payment Intent ${paymentIntent.id}: ${paymentIntent.status}`)

    if (paymentIntent.status === "succeeded"){
      console.log("submitting order to printful");
    }
    else{
      alert("Error finalizing this order.")
      props.setLoading(false);
      return
    }

    //Now get order and ship it
    //
    try{
      await fetch('/finalize-order',{
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            orderId : paymentIntentResult.orderId
          })
        })
    }catch (finalizeOrderError){
      alert("Error finalizing this order.")
      console.log(finalizeOrderError)
      props.setLoading(false);
      return
    }
    console.log("Order updated as payed - now to be confirmed by store owner.");
    props.setLoading(false);
    props.setPage("checkout-complete")

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
      <i> Please ensure that your address is correct. We cannot issue refunds.</i>
    </PaymentContainer>
  )


}

export default PaymentModule;
