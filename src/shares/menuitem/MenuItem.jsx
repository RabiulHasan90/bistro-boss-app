import React from 'react'

export default function MenuItem({ item }) {
   const { name, image, price, recipe } = item;
  return (
     <div className='flex'>
        <img style={{borderRadius:"0 200px 200px 200px "}} className='w-[100px]' src={image} alt="" />
        <div>
           <p className='uppercase'>{name}-------</p>
           <p>{recipe}</p>
           
        </div>
        <p className='text-yellow-700'>{price }</p>
    </div>
  )
}
