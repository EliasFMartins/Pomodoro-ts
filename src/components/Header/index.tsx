import { HeaderContainer } from './styled'
import { Timer, Scroll } from 'phosphor-react'

import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <HeaderContainer>
      <span>Logo</span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
