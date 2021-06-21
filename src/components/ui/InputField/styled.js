import styled from 'styled-components'
import { TRANSITION_FAST } from '../../../constants/variables'

export const InputWrapper = styled.div`
  margin-bottom: 15px;
  
  label{
    display: flex;
    span{
      text-align: right;
      padding-right: 30px;
      flex: 0 0 30%;
    }
    input{
      flex: 0 0 70%;
      height: 34px;
      padding: 2px 5px;
      border: 1px solid #ababab;
      border-radius: 4px;
      box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
      transition: ${TRANSITION_FAST};
      &:focus{
        outline: 0;
        border-color: #2a8dd4;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
      }
    }
  }
`
