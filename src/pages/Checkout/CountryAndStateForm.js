
import { CountryAndState } from './CheckoutStyled';
import { DropdownMenu } from '../../components/DropdownMenu';
import axios from 'axios';
import { useEffect } from 'react';
import { BACKEND_API_URL, REGIONS_ENDPOINT } from '../../config/endpoints'

export default function CountryAndStateForm(props){

  const setRegions = props.setRegions

  useEffect(() => {
    axios.get(BACKEND_API_URL + REGIONS_ENDPOINT)
    .then((resp) => {
      setRegions(resp.data);
    }).catch(error => {
    });


  }, [setRegions]);

  return(
    <CountryAndState>
        <DropdownMenu
          height={props.height}
          width="195px"
          options={Object.keys(props.regions)}
          onChange={event => {
                let newShippingInfo = {...props.shippingInfo};
                newShippingInfo["country"] = event.target.value;
                newShippingInfo["state"] = "";
                props.setShippingInfo(newShippingInfo)
              }}
          placeholder={"Country / Region"}
          />
          <DropdownMenu
            disabled={
              props.shippingInfo.country=== "" ||
              props.regions[props.shippingInfo.country]?.states === null
            }
            height={props.height}
            width="195px"
            options={props.regions[props.shippingInfo.country]?.states?.map(
              obj => obj.code
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
