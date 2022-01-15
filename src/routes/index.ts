import { Login } from '../components/Login'
import { About } from '../pages/About'
import { Blog } from '../pages/Blog'
import { Contacts } from '../pages/Contacts'
import { Home } from '../pages/Home'
import { Properties } from '../pages/Properties'
import { IRoute } from './types'

export enum RouteNames {
  LOGIN = '/login',
  HOME = '/home',
  PROPERTIES = '/properties',
  ABOUT = '/about',
  BLOG = '/blog',
  CONTACTS = './contacts',
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    element: Login,
  },
  {
    path: RouteNames.CONTACTS,
    element: Contacts,
  },
]

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.HOME,
    element: Home,
  },
  {
    path: RouteNames.PROPERTIES,
    element: Properties,
  },
  {
    path: RouteNames.ABOUT,
    element: About,
  },
  {
    path: RouteNames.BLOG,
    element: Blog,
  },
  {
    path: RouteNames.CONTACTS,
    element: Contacts,
  },
]
