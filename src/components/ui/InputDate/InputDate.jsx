import { InputWrapper } from './styled'

function InputDate({ title }) {
  return (
    <InputWrapper>
      <label>
        <span>{title}</span>
        <input type="date" />
      </label>
    </InputWrapper>
  )
}

export default InputDate
