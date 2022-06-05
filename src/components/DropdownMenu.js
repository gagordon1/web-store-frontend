
import styled from 'styled-components';
import { colors, fontSizes } from '../style/Theme';

const DropdownMenuContainer = styled.select`
  border : none;
  background: ${colors.white};
  border-radius: 7px;
  font-family : inherit;
  text-indent : 10px;
  font-size : ${fontSizes.smallText};
  border : none;
  padding : none;
  color : ${colors.darkGray};
  &:focus {
      outline: none;
  }
  &:hover {
      filter: drop-shadow(1px 1px 1px ${colors.darkGray});
      cursor: pointer;
  }
`

export const DropdownMenu = (props) => {
  return <DropdownMenuContainer
            disabled={props.disabled === undefined? false : props.disabled}
            onChange={props.onChange}
            style={{width: props.width, height: props.height }}>
              <option key={-1} value="default" selected disabled hidden>{props.placeholder}</option>
              {
                props.options?.map((opt, index) =>
                  <option key={index} value={opt} > {opt}</option>
                )
              }
          </DropdownMenuContainer>
}
