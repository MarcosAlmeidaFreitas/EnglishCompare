import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink, useLocation } from 'react-router-dom'
import { Routes } from '../../Constants/routes'
import { cn } from '../../utils/Cn_Tailwind'

export function Header() {
  const location = useLocation()
  const isScreenSelectedHome = (route: Routes): boolean => {
    if (location.pathname === route) {
      return true
    } else {
      return false
    }
  }

  const isScreenSelected = (route: Routes): boolean =>
    location.pathname.includes(route)
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
        <nav className=" flex gap-1">
          <NavLink
            to={'/'}
            className={cn(
              'text-gray-100 bg-gray-400 rounded-t-md p-2 cursor-pointer hover:bg-purple',
              {
                'bg-purple': isScreenSelectedHome(Routes.HOME),
              },
            )}
          >
            Sobre
          </NavLink>

          <NavLink
            to={'/register'}
            className={cn(
              'text-gray-100 bg-gray-400 rounded-t-md p-2 cursor-pointer hover:bg-purple',
              {
                'bg-purple': isScreenSelected(Routes.REGISTER),
              },
            )}
          >
            Cadastrar
          </NavLink>

          <NavLink
            to={'/import'}
            className={cn(
              'text-gray-100 bg-gray-400 rounded-t-md p-2 cursor-pointer hover:bg-purple',
              {
                'bg-purple': isScreenSelected(Routes.IMPORT),
              },
            )}
          >
            Importar
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
