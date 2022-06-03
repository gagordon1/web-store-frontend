import { DesktopMenuContainer } from './NavbarStyled';
import { menuItems } from './Navbar';

export const DesktopMenu = () =>{

  return (
    <DesktopMenuContainer>
      {Object.keys(menuItems).map(item => <h3 key={item}> {item} </h3>)}
    </DesktopMenuContainer>
  )

}
