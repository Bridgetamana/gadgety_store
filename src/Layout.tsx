import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <div className='flex-grow'>

      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout