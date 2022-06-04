import styled from 'styled-components';
import { colors, fontSizes } from '../style/Theme';

const ButtonContainer = styled.button`
  width: 313px;
  height: 50px;
  border : none;
  background: #FFFFFF;
  border-radius: 7px;
  font-family : inherit;
  margin-left : auto;
  margin-right : auto;
  font-size : ${fontSizes.smallText};
  &:hover{
    filter: drop-shadow(1px 1px 1px ${colors.darkGray});
    cursor: pointer;
  }
`


export default function Button(props){
  return (
    <ButtonContainer onClick={props.onClick}> {props.text} </ButtonContainer>
  )
}
