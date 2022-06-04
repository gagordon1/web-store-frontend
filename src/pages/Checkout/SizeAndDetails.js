import { SizeAndDetailsContainer, CheckoutPageImage, SizeSelect,
  FormContainer, DescriptionContainer} from './CheckoutStyled'

import { itemDescriptions } from '../../config/StoreInfo'

export default function SizeAndDetails(props){
    return (
      <SizeAndDetailsContainer>
        <div>
          <CheckoutPageImage src={props.product.thumbnail}/>
            <h3> {props.product.name} </h3>
        </div>
        <div>
          <FormContainer>
            <h3> Size </h3>
            <SizeSelect>
              {
                props.product.availableSizes?.map(size =>
                  <option key={size} value={size}> {size}</option>
                )
              }
            </SizeSelect>
          </FormContainer>
          <DescriptionContainer>
            <h3> Description </h3>
            <p> {
              (props.product.id in itemDescriptions)?
                itemDescriptions[props.product.id]
                :
                "No Description"
            }</p>
          </DescriptionContainer>

        </div>
      </SizeAndDetailsContainer>
    )
}
