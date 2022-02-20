import styled from 'styled-components'
import { ISeverity } from './types'

export const ErrorMessage = styled.span<{ severity?: ISeverity }>`
  display: inline-block;
  color: red;
  background: ${({ severity }) => (severity === ISeverity.warning ? '#f9ffca' : '#ffcfcf')};
  margin-left: 5px;
  padding: 5px 7px;
  font-size: 0.9em;
  border-radius: 5px;
`
