
import { CountryAndState } from './CheckoutStyled';
import { DropdownMenu } from '../../components/DropdownMenu';
import axios from 'axios';
import { useEffect } from 'react';

export default function CountryAndStateForm(props){



  useEffect(() => {

    axios.get('/regions')
    .then((resp) => {
      props.setRegions(resp.data);
    }).catch(error => {
    });


  }, [props]);

  return(
    <CountryAndState>
        <DropdownMenu
          height={props.height}
          width="195px"
          options={Object.keys(props.regions)}
          onChange={event => {
                let newShippingInfo = {...props.shippingInfo};
                newShippingInfo["country"] = event.target.value;
                newShippingInfo["state"] = "none";
                props.setShippingInfo(newShippingInfo)
              }}
          placeholder={"Country / Region"}
          />
          <DropdownMenu
            disabled={
              props.shippingInfo.country=== "none" ||
              props.regions[props.shippingInfo.country]?.states === null
            }
            height={props.height}
            width="195px"
            options={props.regions[props.shippingInfo.country]?.states?.map(
              obj => obj.name
            )}
            onChange={event => {
                  let newShippingInfo = {...props.shippingInfo};
                  newShippingInfo["state"] = event.target.value;
                  props.setShippingInfo(newShippingInfo)
                }}
            placeholder={"State"}
            />
    </CountryAndState>
  )

}
