
import styled from 'styled-components';

const DropdownMenuContainer = styled.select`
  border : none;
  background: #FFFFFF;
  border-radius: 7px;
  font-family : inherit;
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
