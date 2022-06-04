import { SizeAndDetailsContainer, CheckoutPageImage,
 DescriptionContainer, FormContainer} from './CheckoutStyled';
 import React, { useState } from 'react';

 import { DropdownMenu } from '../../components/DropdownMenu';

import { itemDescriptions } from '../../config/StoreInfo';

export default function SizeAndDetails(props){


    const [size, setSize] = useState();


    return (
      <SizeAndDetailsContainer>
        <div>
          <CheckoutPageImage src={props.product.thumbnail}/>
            <h3> {props.product.name} </h3>
        </div>
        <div>
          <FormContainer>
            <h3> Size </h3>
            <DropdownMenu
                  height="70px"
                  width="200px"
                  options={props.product.availableSizes}
                  onChange={e => setSize(e.target.value)}
                  />
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
