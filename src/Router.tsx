import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './styles/DefaultLayout'
import { Home } from './pages/Cadastrar/index'
import { Import } from './pages/import'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/import" element={<Import />}></Route>
      </Route>
    </Routes>
  )
}
