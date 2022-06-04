import { SizeAndDetailsContainer, CheckoutPageImage } from './CheckoutStyled'

export default function SizeAndDetails(props){
    return (
      <SizeAndDetailsContainer>
        <CheckoutPageImage src={props.product.thumbnail}/>
      </SizeAndDetailsContainer>
    )
}
