import { Field } from 'react-final-form'
import styled from 'styled-components'
import { IInputField } from './types'

export const InputFieldContainer = styled.div``

export const InputFieldStyled = styled(Field)`
  padding: 5px 10px;
  margin: 5px 10px 0 10px;
`
export const Label = styled.label<{ labelWidth?: string }>`
  display: inline-block;
  width: ${({ labelWidth }) => labelWidth ?? '50px'};
`
