import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderNavigation = styled.nav`
  border-bottom: 1px solid #ccc;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(6, 200px);
  align-content: center;
  justify-content: center;
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  display: grid;
  justify-content: center;
  background: #eee;
  padding: 10px;
`
