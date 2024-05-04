
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularMenu from '../popularmenu/PopularMenu'
import Featured from '../Featured/Featured'
import Testimonials from '../Tetimonials/Testimonials'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <div>
       <Helmet>
        <title>Bistro Boss | Home</title>
       
      </Helmet>

      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
 
    </div>
  )
}
