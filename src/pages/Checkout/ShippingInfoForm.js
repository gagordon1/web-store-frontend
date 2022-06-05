import TextInput from '../../components/TextInput';
import { FormContainer } from './CheckoutStyled'
import { DropdownMenu } from '../../components/DropdownMenu'
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
        key =>
        <TextInput
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
        />



    </FormContainer>
  )
}
