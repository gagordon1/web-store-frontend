import { storeName } from '../config/StoreInfo';
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

    return (
      <NavbarContainer>
        <StoreTitle> {storeName} </StoreTitle>
        <MenuContainer>
            <DesktopMenu/>
        </MenuContainer>
      </NavbarContainer>
    )
  }
}

export default Navbar
