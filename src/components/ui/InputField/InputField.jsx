import { InputWrapper } from './styled'

function InputField({ title }) {
  return (
    <InputWrapper>
      <label>
        <span>{title}</span>
        <input type="text" />
      </label>
    </InputWrapper>
  )
}

export default InputField
