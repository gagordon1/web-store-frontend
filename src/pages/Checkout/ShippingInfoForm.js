import TextInput from '../../components/TextInput';
import { FormContainer, CountryAndState } from './CheckoutStyled'
import { DropdownMenu } from '../../components/DropdownMenu'

//maps ShippingInfo values to placeholder values
const shippingInfoTextInputKeys = {
  firstName : "First Name",
  lastName : "Last Name",
  email : "Email",
  address : "Address",
  suite : "Apartment, Suite, etc. (optional)",
  city : "City"
}

const shippingInfoDropdownInputKeys = {
  country : "Country / Region",
  state : "State"
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
      <CountryAndState>
        {Object.keys(shippingInfoDropdownInputKeys).map(key =>
          <DropdownMenu
            height={height}
            width="195px"
            options={["option1", "option2", "option3"]}
            onChange={event => {
                  let newShippingInfo = {...props.shippingInfo};
                  newShippingInfo[key] = event.target.value;
                  props.setShippingInfo(newShippingInfo)
                }}
            placeholder={shippingInfoDropdownInputKeys[key]}
            />
          )
        }
      </CountryAndState>

    </FormContainer>
  )
}
