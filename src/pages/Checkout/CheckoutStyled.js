import styled from 'styled-components';
import { breakpoints } from '../../style/Theme';

export const CheckoutContainer = styled.div`
  display : grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  @media (max-width: ${breakpoints.tablet}px){
    grid-template-columns: 1fr;
  }

`

export const NewsCheckbox = styled.div`
  margin-bottom : 20px;
`

export const CheckoutPageImage = styled.img`
  width: 400px;
  height: auto;
  margin-left : auto;
  margin-right : auto;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 7px;
`


export const FormContainer = styled.div`
  width : 400px;
  text-align : left;
`

export const DescriptionContainer = styled.div`
  width : 350px;
  text-align : left;
`

export const CountryAndState = styled.div`
  display : flex;
  justify-content : space-between;
  width : 100%;
  margin-bottom : 10px;
`
