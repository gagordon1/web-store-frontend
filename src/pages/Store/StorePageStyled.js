import styled from 'styled-components'
import { breakpoints } from '../../style/Theme'

export const StorePageContainer = styled.div`
  display : grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  width: 100%;
  margin-top: 40px;
  @media (max-width: ${breakpoints.tabletLandscape}px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${breakpoints.tablet}px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.mobileLandscape}px){
    grid-template-columns: repeat(1, 1fr);
  }
`
