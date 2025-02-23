import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './styles/DefaultLayout'
import { Register } from './pages/Register/index'
import { Import } from './pages/Import'
import { Home } from './pages/Home/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/import" element={<Import />}></Route>
      </Route>
    </Routes>
  )
}
