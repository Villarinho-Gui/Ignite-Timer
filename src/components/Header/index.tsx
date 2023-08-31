import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoIgnite from '../../../public/images/logo.svg'
import { HeaderComponent } from './styles'

export function Header() {
  return (
    <HeaderComponent>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to={'/'} title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to={'/history'} title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderComponent>
  )
}
