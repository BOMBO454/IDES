import styled from 'styled-components'
import { InputWrapper as Base } from '../InputField/styled'

export const InputWrapper = styled(Base)`
  label input {
    flex: 0 0 33%;
  }
  label img {
    max-width: calc(37% - 20px);
    margin-left: 20px;
  }
`
