import { STORE_NAME } from '../config/StoreInfo';
import React from 'react';
import { DesktopMenu } from './DesktopMenu';
import { NavbarContainer, StoreTitle, MenuContainer, LogoImage } from './NavbarStyled';
import Logo from '../assets/logo.png';

export const menuItems = {
  "about" : "/about",
  "contact" : "/contact",
  "store" : "/"
}



class Navbar extends React.Component {
  render() {

    return (
      <NavbarContainer>
        <LogoImage src={Logo}/>
        <StoreTitle> {STORE_NAME} </StoreTitle>
        <MenuContainer>
            <DesktopMenu/>
        </MenuContainer>
      </NavbarContainer>
    )
  }
}

export default Navbar
