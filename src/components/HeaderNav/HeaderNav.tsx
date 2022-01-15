import { RouteNames } from '../../routes'
import { HeaderNavigation, LinkStyled } from './styles'

const HeaderNav = () => (
  <HeaderNavigation>
    <LinkStyled to={RouteNames.HOME}>Home</LinkStyled>
    <LinkStyled to={RouteNames.PROPERTIES}>Properties</LinkStyled>
    <LinkStyled to={RouteNames.ABOUT}>About us</LinkStyled>
    <LinkStyled to={RouteNames.BLOG}>Blog</LinkStyled>
    <LinkStyled to={RouteNames.CONTACTS}>Contacts</LinkStyled>
  </HeaderNavigation>
)

export default HeaderNav
