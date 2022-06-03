import styled from 'styled-components'
import { SectionSeparator } from './SectionSeparator'
import { storeName } from '../config/StoreInfo.js'


const BottomSectionContainer = styled.div`
  margin-top: 40px;
  position: relative;
  height: 100px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`
const Footer = styled.footer`
  margin-top: 20px;
  float: center;
`


export const BottomSection = () =>{
  return(
    <BottomSectionContainer>
      <SectionSeparator/>
      <Footer>
        <h6>© {storeName} {new Date().getFullYear()}</h6>
      </Footer>
    </BottomSectionContainer>
  )
}
