
import styled from 'styled-components';
import { colors, fontSizes } from '../style/Theme'

const DropdownMenuContainer = styled.select`
  border : none;
  background: ${colors.white};
  border-radius: 7px;
  font-family : inherit;
  text-indent : 10px;
  font-size : ${fontSizes.smallText};
  border : none;
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
            onChange={props.onChange}
            style={{width: props.width, height: props.height}}>
              <option value="default" selected disabled hidden>Select</option>
              {
                props.options?.map(size =>
                  <option key={size} value={size}> {size}</option>
                )
              }
          </DropdownMenuContainer>
}
