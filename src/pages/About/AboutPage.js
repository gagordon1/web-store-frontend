import { ABOUT_PAGE_DESCRIPTION } from '../../config/StoreInfo'
import styled from 'styled-components';

const AboutContainer = styled.div`
  margin-left : auto;
  margin-right : auto;
  width : 90%;
  max-width : 1000px;
`

export default function AboutPage() {
  return (
    <AboutContainer> {ABOUT_PAGE_DESCRIPTION} </AboutContainer>
  )

}
