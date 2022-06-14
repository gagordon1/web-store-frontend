import { BACKEND_API_URL, SHIPPING_RATE_ENDPOINT, TAX_RATE_ENDPOINT } from '../../config/endpoints';

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
    const standardShipping = await fetch(BACKEND_API_URL + SHIPPING_RATE_ENDPOINT,{
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      }).then(r => r.json());
    console.log(standardShipping.rate);
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
    const taxData= await fetch(BACKEND_API_URL + TAX_RATE_ENDPOINT,{
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      }).then(r => r.json());
    return Number(taxData.rate);

  }
  catch(error){
    console.log(error);
  }


}
