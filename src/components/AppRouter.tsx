import { Routes, Route } from 'react-router-dom'
import { publicRoutes, RouteNames } from '../routes'
import { privateRoutes } from './../routes/index'

const AppRouter = () => {
  const auth = true

  return auth ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element()} />
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
