import { SHIPPING_RATE_ENDPOINT } from '../../config/endpoints';

export const calculateShippingPrice = (variant, shippingInfo, regions) => {

  const data = {
            address : shippingInfo.address,
            city : shippingInfo.city,
            country_code : regions[shippingInfo.country].code,
            zip : shippingInfo.zipCode,
            variant_id : variant.catalogVariantId
          };
  if (shippingInfo.state !== ""){
    data["state_code"] = shippingInfo.state;
  }


  fetch(SHIPPING_RATE_ENDPOINT,{
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response =>{
      console.log(response.data);
      return 10.99;
    }).catch(error => {
      console.log(error);
      return 10.99;
    })



}
