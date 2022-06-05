
import { CountryAndState } from './CheckoutStyled';
import { DropdownMenu } from '../../components/DropdownMenu';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CountryAndStateForm(props){

  const [regions, setRegions] = useState({});

  useEffect(() => {

    axios.get('/regions')
    .then((resp) => {
      setRegions(resp.data);
    }).catch(error => {
    });


  }, []);

  return(
    <CountryAndState>
        <DropdownMenu
          height={props.height}
          width="195px"
          options={Object.keys(regions)}
          onChange={event => {
                let newShippingInfo = {...props.shippingInfo};
                newShippingInfo["country"] = event.target.value;
                newShippingInfo["state"] = "none";
                props.setShippingInfo(newShippingInfo)
              }}
          placeholder={"Country / Region"}
          />
          <DropdownMenu
            disabled={regions[props.shippingInfo.country]?.states === null}
            height={props.height}
            width="195px"
            options={regions[props.shippingInfo.country]?.states?.map(
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
