import React from 'react'
import FoodCard from './FoodCard'

export default function Ordertab({items}) {
  return (
   
         <div className='grid md:grid-cols-3 gap-9'>
            {
              items.map(item => <FoodCard
                 key={item._id}
              item={item}
              >
              </FoodCard>)
           }
    </div>
  )
}
