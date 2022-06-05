import { CheckoutContainer } from './CheckoutStyled';
import { ProductImageAndTitle } from './ProductImageAndTitle';
import ShippingInfoForm from './ShippingInfoForm';

export default function ShippingInfo(props){

  return(
    <CheckoutContainer>
      <ProductImageAndTitle product={props.product} size={props.size}/>
      <ShippingInfoForm
        shippingInfo={props.shippingInfo}
        setShippingInfo = {props.setShippingInfo}
        regions={props.regions}
        setRegions={props.setRegions}
        />
    </CheckoutContainer>
  )

}
