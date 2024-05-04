import React from 'react'

export default function SectionTitle({Heading, subHeading}) {
  return (
     <div className='w-3/12 mx-auto text-center mb-4'>
        <p className='text-yellow-700 mb-2'>{subHeading}</p>
        <h3 className='text-3xl uppercase border-y-4 py-4 font-bold'>{Heading }</h3>
    </div>
  )
}
