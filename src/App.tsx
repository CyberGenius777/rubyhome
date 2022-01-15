import AppRouter from './components/AppRouter'
import { HeaderNav } from './components/HeaderNav'
import { useAppSelector } from './hooks/redux'

const App = () => {
  return (
    <div>
      <HeaderNav />
      <AppRouter />
    </div>
  )
}

export default App
