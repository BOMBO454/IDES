import { InputWrapper } from './styled'

function InputFile({ title }) {
  return (
    <InputWrapper>
      <label>
        <span>{title}</span>
        <input type="file" />
      </label>
    </InputWrapper>
  )
}

export default InputFile
