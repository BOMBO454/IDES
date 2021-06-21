import { InputWrapper } from './styled'

function InputFile({ title, src, alt }) {
  return (
    <InputWrapper>
      <label>
        <span>{title}</span>
        <input type="file" />
        <img src={src} alt={alt} />
      </label>
    </InputWrapper>
  )
}

export default InputFile
