import { SHIPPING_RATE_ENDPOINT, TAX_RATE_ENDPOINT } from '../../config/endpoints';

export const calculateShippingPrice = async (variant, shippingInfo, regions) => {

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

  try{
    const shippingData= await fetch(SHIPPING_RATE_ENDPOINT,{
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      }).then(r => r.json())
        .then(body => body.result
        );
    const standardShipping = shippingData.find(obj => {return obj.id ===  "STANDARD"});
    return (
      {
        rate : Number(standardShipping.rate),
        minShipDays : standardShipping.minDeliveryDays,
        maxShipDays : standardShipping.maxDeliveryDays
      }
    );

  }
  catch(error){
    console.log(error);
  }
}

export const calculateTaxRate = async (shippingInfo, shippingData, regions) => {

  const data = {
    country_code : regions[shippingInfo.country].code,
    state_code : shippingInfo.state,
    city : shippingInfo.city,
    zip : shippingInfo.zipCode
  }
  try{
    const taxData= await fetch(TAX_RATE_ENDPOINT,{
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      }).then(r => r.json())
        .then(body => body.result);
    return Number(taxData.rate);

  }
  catch(error){
    console.log(error);
  }


}
