import { CheckoutContainer, DescriptionContainer, FormContainer} from './CheckoutStyled';

 import { ProductImageAndTitle } from './ProductImageAndTitle';

import { DropdownMenu } from '../../components/DropdownMenu';

import { ITEM_DESCRIPTIONS } from '../../config/StoreInfo';

export default function SizeAndDetails(props){


    return (
      <CheckoutContainer>
        <ProductImageAndTitle product={props.product}/>
        <div>
          <FormContainer>
            <h3> Size </h3>
            <DropdownMenu
                  height="70px"
                  width="200px"
                  options={props.product.availableSizes}
                  onChange={e => props.setSize(e.target.value)}
                  placeholder="Select"
                  />
          </FormContainer>
          <DescriptionContainer>
            <h3> Description </h3>
            <p> {
              (props.product.id in ITEM_DESCRIPTIONS)?
                ITEM_DESCRIPTIONS[props.product.id]
                :
                "No Description"
            }</p>
          </DescriptionContainer>

        </div>
      </CheckoutContainer>
    )
}
