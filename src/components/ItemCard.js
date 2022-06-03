import styled from 'styled-components';
import { colors, breakpoints } from '../style/Theme'
import { MenuItem } from './MenuItem'

//
// interface{
//   thumbnail : String
//   name : String
//   retailPrice : Number
//   id : Int
// }

const ItemCardContainer = styled.div`
  width: 250px;
  height: 350px;
  background: ${colors.white};
  border-radius: 7px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  margin : auto;
`

const ImagePreview = styled.img`
  width: 100%;
  height: auto;
  border-radius: inherit
`

const ItemCardLine = styled.div`
  width: 99.25%;
  justify-content: left;
  height: 0px;
  border: 1px solid ${colors.backgroundColor};
`
const ItemTextContainer = styled.div`
  margin-top: 20px;
`

export default function ItemCard (props) {

  return (
    <ItemCardContainer>
      <ImagePreview src={props.thumbnail}/>
      <ItemCardLine/>
      <ItemTextContainer>
        <MenuItem route="/" item={props.name}/>
        <div> ${props.retailPrice} </div>
      </ItemTextContainer>
    </ItemCardContainer>
  )

}
