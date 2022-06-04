import { CheckoutPageImage } from './CheckoutStyled';

export const ProductImageAndTitle = (props) =>{

  return(
          <div>
            <CheckoutPageImage src={props.product.thumbnail}/>
              <h3> {

                props.size == undefined? props.product.name : props.product.name + " " + props.size
              }
              </h3>
          </div>
        );

}
