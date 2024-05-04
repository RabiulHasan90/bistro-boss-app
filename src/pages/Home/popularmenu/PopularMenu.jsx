import  { useEffect, useState } from 'react'
import SectionTitle from '../../../components/sectiontitle/SectionTitle'
import MenuItem from '../../../shares/menuitem/MenuItem'
import useMenu from '../../../hooks/useMenu'

export default function PopularMenu() {
   // const [menu, setMenu] = useState([])
   // useEffect(() => {
   //    fetch('menu.json')
   //       .then(res => res.json())
   //       .then(data => {
   //          const popularItems = data.filter(item => item.category === 'popular')
   //          setMenu(popularItems)
   //    })
   // },[])
   const [menu] = useMenu();
   const popular = menu.filter(item => item.category === 'popular')
  return (
     <section className='mb-12'>
        <SectionTitle
           Heading={"popular menu"}
           subHeading={"popular item"}>
           
        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-4'>
           {
              popular.map(item => <MenuItem
                 key={item._id}
              item={item}
              >
              </MenuItem>)
           }
        </div>
    </section>
  )
}
