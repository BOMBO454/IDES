import styled from 'styled-components'
import { RADIUS, TEXT_COLOR, LINK_COLOR } from '../../../constants/variables'

export const FooterWrapper = styled.footer`
  background-color: white;
  border-radius: 0 0 ${RADIUS} ${RADIUS};
  padding: 15px;
  border-top: 2px solid #1e4498;
  border-bottom: 2px solid #1e4498;
`
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FooterList = styled.ul`
  padding: 12px;
  margin: 0 20px;
  li {
    list-style: none;
    padding: 5px 0;
  }
  a {
    text-decoration: none;
    color: ${LINK_COLOR};
  }
`

export const FooterWatermark = styled.p`
  font-weight: 400;
  margin-top: 24px;
  text-align:center;
  line-height: 25px;
  color: ${TEXT_COLOR};

  a {
    color: ${LINK_COLOR};
  }
  span {
    color: ${LINK_COLOR};
  }
`
