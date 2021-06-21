import styled from 'styled-components'
import { RADIUS } from '../../../constants/variables'

export const FooterWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: white;
  border-radius: 0 0 ${RADIUS} ${RADIUS};
  padding: 15px;
  border-bottom: 2px solid #1e4498;
`
