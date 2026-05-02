import React, { useContext } from 'react'
import { mainContext } from '../Context/mainContextAPI'
import Expencecard from './Expencecard'

const ListExpence = () => {
  const{allExpence} = useContext(mainContext)
  return (
    <>
    <table className='w-full border table-auto my-10 py-3'>
      <thead>
      <tr>
        <th className='border text-zinc-600 border-gray-300'>No</th>
        <th className='border text-zinc-600 border-gray-300'>Price</th>
        <th className='border text-zinc-600 border-gray-300 hidden lg:block'>Description</th>
        <th className='border text-zinc-600 border-gray-300'>Purpose</th>
        <th className='border text-zinc-600 border-gray-300'>Action</th>
      </tr>
      </thead>
      <tbody>
        {
          allExpence && allExpence.length>0 ? <>
          {
            allExpence.map((cur,i)=>{
              return <Expencecard data={cur} no={i+1} key={i}/>
            })
          }
          </>:<></>
        }
      </tbody>
    </table>
     
    </>
  )
}

export default ListExpence