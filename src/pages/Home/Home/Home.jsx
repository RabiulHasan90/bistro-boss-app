
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularMenu from '../popularmenu/PopularMenu'
import Featured from '../Featured/Featured'

import { Helmet } from 'react-helmet-async'
import Delyverymaninf from '../../../layout/deliveryman/Delyverymaninf'
import Testimonial from '../../testimonial/Testimonial'

export default function Home() {
  return (
    <div>
       <Helmet>
        <title>Bistro Boss | Home</title>
       
      </Helmet>

      <Banner />
      <Category />
      <Delyverymaninf />
      <PopularMenu />
      <Featured />
      <Testimonial />
 
    </div>
  )
}
