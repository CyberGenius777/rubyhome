import { InputFieldContainer, InputFieldStyled, Label } from './styles'
import { IInputField } from './types'

const InputField: React.VFC<IInputField> = ({ labelWidth, labelName, ...props }) => (
  <InputFieldContainer>
    <Label labelWidth={labelWidth}>{labelName}</Label>
    <InputFieldStyled {...props} />
  </InputFieldContainer>
)

export default InputField
