
import { Outlet } from 'react-router-dom'
import Footer from '../../shares/footer/Footer'
import Navbar from '../../shares/navbar/Navbar'

export default function Main() {
   const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
  return (
    <div>
      { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
    </div>
  )
}
