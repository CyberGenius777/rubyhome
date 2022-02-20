import { ErrorMessage } from './styles'
import { IErrorMessageBox } from './types'

const ErrorMessageBox: React.FC<IErrorMessageBox> = ({ severity, children }) => (
  <ErrorMessage severity={severity}>{children}</ErrorMessage>
)

export default ErrorMessageBox
