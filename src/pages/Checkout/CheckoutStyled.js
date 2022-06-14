import styled from 'styled-components';
import { breakpoints } from '../../style/Theme';

export const CheckoutContainer = styled.div`
  display : grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  @media (max-width: ${breakpoints.tablet}px){
    grid-template-columns: 1fr;
  }

`
export const PaymentForm = styled.form`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`

export const PaymentContainer = styled.div`
  margin: auto;
  position: relative;
  text-align: left;
  width: 70%;

`
export const ButtonNavigator = styled.div`
  display : flex;
  position : relative;
  width : 100%;
  justify-content: space-between;
`

export const CheckoutDiv = styled.div`
  width: 400px;
  justify-self: center;
  @media (max-width: ${breakpoints.mobile}px){
    width : 320px;
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
  @media (max-width: ${breakpoints.mobile}px){
    width : 300px;
    height: auto;
  }
`


export const FormContainer = styled.div`
  width : 80%;
  text-align : left;
  justify-self : center;
`

export const DescriptionContainer = styled.div`
  width : 90%;
  text-align : left;
`

export const CountryAndState = styled.div`
  display : flex;
  justify-content : space-between;
  width : 100%;
  margin-bottom : 10px;
`
