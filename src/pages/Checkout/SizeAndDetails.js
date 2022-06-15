import { CheckoutContainer, DescriptionContainer, FormContainer, CheckoutDiv} from './CheckoutStyled';

 import { ProductImageAndTitle } from './ProductImageAndTitle';

import { DropdownMenu } from '../../components/DropdownMenu';

import { ITEM_DESCRIPTIONS, DEFAULT_PRODUCT_DESCRIPTION } from '../../config/StoreInfo';

export default function SizeAndDetails(props){


    return (
      <CheckoutContainer>
        <ProductImageAndTitle product={props.product}/>
        <CheckoutDiv>
          <FormContainer>
            <h3> Size </h3>
            <DropdownMenu
                  height="70px"
                  width="200px"
                  options={props.product.variants.map(variant => variant.size)}
                  onChange={e => {

                    props.setVariant(props.product.variants.find(obj =>{
                          return obj.size === e.target.value;
                        }
                      )
                    );
                  }
                }
                  placeholder="Select"
                  />
          </FormContainer>
          <DescriptionContainer>
            <h3> Description </h3>
            <p> {
              (props.product.id in ITEM_DESCRIPTIONS)?
                ITEM_DESCRIPTIONS[props.product.id]
                :
                DEFAULT_PRODUCT_DESCRIPTION
            }</p>
          </DescriptionContainer>

        </CheckoutDiv>
      </CheckoutContainer>
    )
}
