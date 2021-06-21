import styled from 'styled-components'
import { RADIUS } from '../../../constants/variables'
import Background from '../../../images/IDES-ContentBG.png'
import Seal from '../../../images/State-Seal.png'

export const HeaderLogo = styled.a`

`
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 15px;
  height: 168px;
  background-color: white;
  border-radius: ${RADIUS} ${RADIUS} 0 0;
  padding: 15px;
  border-top: 13px solid #1e4498;
  background: url(${Seal})top center no-repeat, url(${Background}) left top no-repeat!important;
`
