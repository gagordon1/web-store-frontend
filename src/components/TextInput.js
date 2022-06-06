import styled from 'styled-components';
import { colors, fontSizes } from '../style/Theme';

export const InputContainer = styled.input`
  border : none;
  background: ${colors.white};
  border-radius: 7px;
  font-family : inherit;
  text-indent : 10px;
  font-size : ${fontSizes.smallText};
  border : none;
  padding : none;
  margin-bottom: 10px;
  &:focus {
      outline: none;
  }
  &:hover {
      filter: drop-shadow(1px 1px 1px ${colors.darkGray});
      cursor: pointer;
`

export default function TextInput(props){
  return (
    <InputContainer
      type="text"
      style={{width: props.width, height: props.height}}
      placeholder={props.placeholder}
      onChange={props.onChange}
      />
  )
}
