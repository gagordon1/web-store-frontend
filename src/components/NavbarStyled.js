import styled from 'styled-components'
import { breakpoints } from '../style/Theme'

export const DesktopMenuContainer = styled.div`
  display : flex;
  flex-direction: row;
  align-content: space-between;
  gap: 40px;
`
export const LogoImage = styled.img`
  margin-top : 8px;
  margin-left: 40px;
  width :80px;
  height : auto;
  @media (max-width: ${breakpoints.tablet}px){
    justify-self: center;
    margin: auto;
    grid-row-start: 1;
    grid-column-start: 2;
  }
`

export const NavbarContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

`
export const StoreTitle = styled.h1`
  margin : auto;
  @media (max-width: ${breakpoints.tablet}px){
    justify-self: center;
    margin: auto;
    grid-row-start: 2;
    grid-column-start: 2;
  }
`
export const MenuContainer = styled.div`
  justify-self : end;
  margin-right: 40px;
  align-self: center;
  @media (max-width: ${breakpoints.tablet}px){
    justify-self: center;
    margin: auto;
    grid-row-start: 3;
    grid-column-start: 2;
  }
`
