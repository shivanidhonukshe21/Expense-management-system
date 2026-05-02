import React, { useContext } from 'react'
import { mainContext } from '../Context/mainContextAPI'

const AllExpence = () => {
    const {allExpence}=useContext(mainContext)
    const totalMoney=allExpence.length>2?(
      allExpence.reduce((pre,cur)=>{
        return pre+parseInt(cur.price)
      },0)
    ):allExpence.length==1? allExpence[0].price: 0
    const calculateMoney=(purpose)=>{
       if(allExpence.length<=0){
        return 0
       }
        const expences=allExpence.filter((cur,i)=>cur.purpose == purpose).map((cur)=>parseInt(cur.price))
        if(expences.length<=1){
            return expences[0]
        }
        const price=expences.reduce((pre,cur)=>pre+cur)
        return price
        
    }


  return (
    <>
    <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2">
        <div className="w-[96%] lg:w-[80%] mx-auto py-5 px-3 rounded border border-gray-300"><p className='font-bold text-2xl text-green-400'>Income</p><p className='text-3xl font-bold text-end text-green-600'>&#8377; {calculateMoney('income')||0}</p></div>
        <div className="w-[96%] lg:w-[80%] mx-auto py-5 px-3 rounded border border-gray-300"><p className='font-bold text-2xl text-red-500'>Expence</p><p className='text-3xl font-bold text-end text-red-600'>&#8377; {calculateMoney('expence')||0}</p></div>
         <div className='col-span-5 py-5 px-3 rounded border border-gray-300'>
          <p className='font-bold text-2xl text-red-500'>Total <span className='text-green-500'>Balance</span></p>
          <p className="text-end font-bold text-2xl text-red-600">&#8377;{totalMoney}</p>
         </div>
    </div>
    </>
  )
}

export default AllExpence