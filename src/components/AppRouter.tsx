import { Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { privateRoutes, RouteNames, publicRoutes } from './../routes/index'

const AppRouter = () => {
  const { auth } = useSelector<RootState>((state) => state.authReducer)

  return auth ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path='*' element={RouteNames.HOME} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path='*' element={RouteNames.LOGIN} />
    </Routes>
  )
}

export default AppRouter
