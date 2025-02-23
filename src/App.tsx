import { BrowserRouter } from 'react-router-dom'
import './styles/Global.css'
import { Router } from './Router'
export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
