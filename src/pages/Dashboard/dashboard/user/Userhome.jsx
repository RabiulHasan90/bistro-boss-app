import React from 'react'
import useAuth from '../../../../hooks/useAuth'

export default function Userhome() {
   const { user } = useAuth();
  return (
     <div>
         <div className="max-w-sm rounded overflow-hidden shadow-lg  p-4 m-4">
      <img className="w-full h-48 object-cover" src={user?.photoURL}  />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">Name: {user?.displayName}</div>
        <div className="font-bold text-xl mb-2 ">Email: {user?.email}</div>
      </div>
    </div>
    </div>
  )
}
