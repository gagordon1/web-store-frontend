import { DesktopMenuContainer } from './NavbarStyled';
import { menuItems } from './Navbar';
import { MenuItem } from './MenuItem';

export const DesktopMenu = () =>{

  return (
    <DesktopMenuContainer>
      {Object.keys(menuItems).map(item => <MenuItem
        key={item}
        item={item}
        route={menuItems[item]}/>
      )}
    </DesktopMenuContainer>
  )

}
