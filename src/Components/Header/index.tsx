import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <div className="bg-gray-900 pt-4 flex flex-col justify-between">
      <div className=" flex justify-center items-center gap-3 mx-auto">
        <img src={logo} width={130} />
        <div className="gap-2">
          <h1 className="text-blue font-bold text-4xl">English</h1>
          <span className="text-purple pl-10 text-4xl font-bold">Compare</span>
        </div>
      </div>

      <div className="flex items-end justify-end gap-2 pr-5">
        <nav className="gap-2">
          <NavLink
            to={''}
            className="text-gray-100 bg-gray-400 rounded-t-md p-2 active:bg-purple"
          >
            Cadastrar
          </NavLink>

          <NavLink
            to={''}
            className="text-gray-100 bg-gray-400 rounded-t-md p-2 active:bg-purple"
          >
            Importar
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
