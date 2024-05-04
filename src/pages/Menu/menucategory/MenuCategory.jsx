import React from 'react'
import Covers from '../../../shares/covers/Covers'
import MenuItem from '../../../shares/menuitem/MenuItem'
import SectionTitle from '../../../components/sectiontitle/SectionTitle'
import { Link } from 'react-router-dom'

export default function MenuCategory({img, title, item, stitle}) {
  return (
    <div className='mb-5'>
       <SectionTitle
           Heading={title}
           subHeading={stitle}>
           
        </SectionTitle>
      {title && <Covers img={img} title={title} />}
      <div className='grid md:grid-cols-2 gap-4'>
           {
              item.map(item => <MenuItem
                 key={item._id}
              item={item}
              >
              </MenuItem>)
           }
        </div>
       
        <Link to={`/orderFood/${title}`}>
           <button>type</button>
        </Link>
    </div>
  )
}
