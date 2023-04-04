import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styled'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
