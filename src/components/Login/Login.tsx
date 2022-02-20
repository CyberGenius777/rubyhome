import { Field, Form } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../../redux/authSlice'
import InputField from '../UI/InputField/InputField'
import { InputFieldStyled } from '../UI/InputField/styles'
import { ErrorMessageBox } from './../ErrorMessageBox'

interface initialValues {
  firstName: string | null
  email: string | null
}

const initialValues: initialValues = {
  firstName: null,
  email: null,
}

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (values: any) => {
    dispatch(login({ auth: true, name: values.firstName, email: values.email }))
    navigate('/home')
  }

  return (
    <Form
      onSubmit={onSubmit}
      // initialValues={initialValues}
      validate={(values) => {
        const errors = {}
        if (!values.firstName) {
          errors.firstNameError = 'Введите имя'
        }
        return errors
      }}
      render={({ values, handleSubmit, pristine, errors }) => (
        <form onSubmit={handleSubmit}>
          <h3>Login Form</h3>
          <div>
            <InputField
              labelName='Имя'
              name='firstName'
              component='input'
              placeholder='Имя'
              value={values.firstName}
            />
            <ErrorMessageBox>{errors.firstNameError}</ErrorMessageBox>
          </div>

          <div>
            <InputField
              labelName='Email'
              name='email'
              component='input'
              placeholder='Email'
              value={values.email}
            />
          </div>
          <button type='submit' disabled={pristine}>
            Login
          </button>
        </form>
      )}
    />
  )
}

export default Login
