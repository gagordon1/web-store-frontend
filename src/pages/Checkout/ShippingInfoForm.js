import TextInput from '../../components/TextInput';
import { FormContainer, NewsCheckbox } from './CheckoutStyled'
import CountryAndStateForm from './CountryAndStateForm';


//maps ShippingInfo values to placeholder values
const shippingInfoTextInputKeys = {
  firstName : "First Name",
  lastName : "Last Name",
  email : "Email",
  address : "Address",
  suite : "Apartment, Suite, etc. (optional)",
  city : "City"
}

export default function ShippingInfoForm(props){
  const width = "100%";
  const height = "50px";


  return (
    <FormContainer>
      <h3> Shipping Information </h3>
      {Object.keys(shippingInfoTextInputKeys).map(
        (key, index) =>
        <TextInput
            key={index}
            placeholder={shippingInfoTextInputKeys[key]}
            width={width}
            height={height}
            onChange={event => {
                  let newShippingInfo = {...props.shippingInfo};
                  newShippingInfo[key] = event.target.value;
                  props.setShippingInfo(newShippingInfo)
                }
            }
        />
        )
      }
      <CountryAndStateForm
        height={height}
        shippingInfo={props.shippingInfo}
        setShippingInfo={props.setShippingInfo}
        regions={props.regions}
        setRegions={props.setRegions}
        />
        <TextInput
            key={10}
            placeholder={"Zip Code"}
            width={width}
            height={height}
            onChange={event => {
                  let newShippingInfo = {...props.shippingInfo};
                  newShippingInfo["zipCode"] = event.target.value;
                  props.setShippingInfo(newShippingInfo)
                }
            }
        />
        <NewsCheckbox>
          <input type="checkbox" id="offers" onChange={
            event => {
                  let newShippingInfo = {...props.shippingInfo};
                  newShippingInfo["newsAndOffers"] = event.target.checked;
                  props.setShippingInfo(newShippingInfo)
                  console.log(newShippingInfo.newsAndOffers)
                }
          } />
          <label htmlFor="offers"> Email me with drop alerts {props.shippingInfo.newsAndOffers}</label>
        </NewsCheckbox>



    </FormContainer>
  )
}
