/* tslint:disable */
/* eslint-disable */
import { RouteNames } from '../../routes'
import { HeaderNavigation, LinkStyled } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { logout } from '../../redux/authSlice'
import { useNavigate } from 'react-router'

const HeaderNav = () => {
  const { auth, name } = useSelector<RootState>((state) => state.authReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () => {
    dispatch(logout())
    navigate(RouteNames.LOGIN)
  }

  return auth ? (
    <HeaderNavigation>
      <LinkStyled to={RouteNames.HOME}>Home</LinkStyled>
      <LinkStyled to={RouteNames.PROPERTIES}>Properties</LinkStyled>
      <LinkStyled to={RouteNames.ABOUT}>About us</LinkStyled>
      <LinkStyled to={RouteNames.BLOG}>Blog</LinkStyled>
      <LinkStyled to={RouteNames.CONTACTS}>Contacts</LinkStyled>
      <LinkStyled to={RouteNames.LOGIN} onClick={logOut}>
        {[name].filter(Boolean)}, <span>Logout</span>
      </LinkStyled>
    </HeaderNavigation>
  ) : (
    <HeaderNavigation>
      <LinkStyled to={RouteNames.LOGIN}>Login</LinkStyled>
      <LinkStyled to={RouteNames.CONTACTS}>Contacts</LinkStyled>
    </HeaderNavigation>
  )
}

export default HeaderNav
