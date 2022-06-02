import { storeName } from '../config/StoreInfo'
import styled from 'styled-components'

const StoreTitle = styled.h1`
`
function Navbar() {
  return (
    <div className="Navbar">
      <StoreTitle> {storeName} </StoreTitle>


    </div>
  );
}

export default Navbar;
