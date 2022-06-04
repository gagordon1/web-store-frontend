import styled from 'styled-components';
import { breakpoints } from '../../style/Theme';

export const SizeAndDetailsContainer = styled.div`
  display : grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  @media (max-width: ${breakpoints.tablet}px){
    grid-template-columns: 1fr;
  }

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
  width : 350px;
  text-align : left;
`

export const DescriptionContainer = styled.div`
  width : 350px;
  text-align : left;
`
