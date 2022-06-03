import styled from 'styled-components'

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

`
export const StoreTitle = styled.h1`
  margin : auto;
  grid-column-start: 2;
`
export const MenuContainer = styled.div`
  justify-self : end;
  align-self: center;
  margin-right: 40px;
`
