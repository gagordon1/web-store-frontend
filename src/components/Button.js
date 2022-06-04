import styled from 'styled-components';
import { colors } from '../style/Theme';

const ButtonContainer = styled.button`
  width: 313px;
  height: 50px;
  border : none;
  background: #FFFFFF;
  border-radius: 7px;
  font-family : inherit;
  margin-left : auto;
  margin-right : auto;
  &:hover{
    filter: drop-shadow(4px 4px 4px ${colors.darkGray});
  }
`


export default function Button(){
  return (
    <ButtonContainer> Purchase </ButtonContainer>
  )
}
