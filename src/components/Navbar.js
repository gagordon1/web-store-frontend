import { storeName } from '../config/StoreInfo'
import styled from 'styled-components'
import { Media, withBreakpoints } from 'react-breakpoints';
import TabletMenu from '../assets/tabletMenu.svg'
import React from 'react';
import { DesktopMenu } from './DesktopMenu';
import { NavbarContainer, StoreTitle, MenuContainer } from './NavbarStyled'

export const menuItems = {
  "about" : "/about",
  "contact" : "/contact",
  "store" : "/"
}



class Navbar extends React.Component {
  render() {
    const { breakpoints, currentBreakpoint } = this.props;

    return (
      <NavbarContainer>
        <StoreTitle> {storeName} </StoreTitle>
        <MenuContainer>
          {
            breakpoints[currentBreakpoint] > breakpoints.tablet?
             <DesktopMenu/>
             :
             <img src={TabletMenu} alt="menu"/>
          }
        </MenuContainer>
      </NavbarContainer>
    )
  }
}

export default withBreakpoints(Navbar)
