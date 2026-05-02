// import React from 'react'
// import { useContext } from 'react'
// import { mainContext } from '../Context/mainContextAPI'
// import UpdateExpence from './UpdateExpence'
// import Swal from 'sweetalert2'
// const Expencecard = (data,no) => {
// const{allExpence,setAllExpense}=useContext(mainContext)
// const deleteExpence=()=>{
//   const new_expence=allExpence.filter((cur,i)=>cur.id!=data.id)
//   setAllExpense(new_expence)
//   Swal.fire({
//   title: 'Success!',
//   text: 'Expence Deleted',
//   icon: 'Success',
//   confirmButtonText: 'OK'
// })
// localStorage.setItem("expence",JSON.stringify(new_expence))

// }

//   return (
//     <tr>
//         <td className='border border-gray-300 py-3 px-3'>{no}</td>
//         <td className='border border-gray-300 py-3 px-3 font-semibold'>&#8377;{data.price}</td>
//         <td className='border border-gray-300 py-3 px-3 hidden lg:block'>{data.description}</td>
//         <td className={'border border-gray-300 py-3 px-3'}>
//             {data.purpose=='income' &&<span className='px-4 py-1 bg-gray-300 text-green-600'>{'Income'}</span>}
//             {data.purpose=='expence' &&<span className='px-4 py-1 bg-gray-300 text-red-600'>{'Income'}</span>}
//             </td>
//         <td className='border border-gray-300 py-3 px-3'>
//             <button onClick={deleteExpence} className='px-3 py-1 rounded bg-red-500 text-white'>Delete</button>
//             <UpdateExpence data={data}/>
//         </td>
//     </tr>
//   )
// }

// export default Expencecard
import React, { useContext } from 'react'
import { mainContext } from '../Context/mainContextAPI'
import UpdateExpence from './UpdateExpence'
import Swal from 'sweetalert2'

// Notice the { data, no } destructuring here
const Expencecard = ({ data, no }) => {
  const { allExpence, setAllExpense } = useContext(mainContext)

  const deleteExpence = () => {
    const new_expence = allExpence.filter((cur) => cur.id !== data.id)
    setAllExpense(new_expence)
    
    Swal.fire({
      title: 'Success!',
      text: 'Expense Deleted',
      icon: 'success', // Lowercase
      confirmButtonText: 'OK'
    })
    localStorage.setItem("expence", JSON.stringify(new_expence))
  }

  return (
    <tr>
      <td className='border border-gray-300 py-3 px-3'>{no}</td>
      <td className='border border-gray-300 py-3 px-3 font-semibold'>₹{data.price}</td>
      <td className='border border-gray-300 py-3 px-3 hidden lg:block'>{data.description}</td>
      <td className='border border-gray-300 py-3 px-3'>
        {data.purpose === 'income' ? (
          <span className='px-4 py-1 bg-gray-300 text-green-600'>Income</span>
        ) : (
          <span className='px-4 py-1 bg-gray-300 text-red-600'>Expence</span>
        )}
      </td>
      <td className='border border-gray-300 py-3 px-3 flex gap-2'>
        <button onClick={deleteExpence} className='px-3 py-1 rounded bg-red-500 text-white'>Delete</button>
        <UpdateExpence data={data} />
      </td>
    </tr>
  )
}

export default Expencecard