import styled from 'styled-components'
import { breakpoints } from '../style/Theme'

export const DesktopMenuContainer = styled.div`
  display : flex;
  flex-direction: row;
  align-content: space-between;
  gap: 40px;
`

export const NavbarContainer = styled.div`
  margin-top: 20px;
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: ${breakpoints.desktop}px;
  margin-left: auto;
  margin-right: auto;

`
export const StoreTitle = styled.h1`
  margin : auto;
  grid-column-start: 2;
`
export const MenuContainer = styled.div`
  justify-self : end;
  margin-right: 40px;
  align-self: center;
  @media (max-width: ${breakpoints.tablet}px){
    justify-self: center;
    margin: auto;
    grid-row-start: 2;
    grid-column-start: 2;
  }
`
