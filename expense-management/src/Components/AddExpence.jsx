import React, { useContext, useState } from 'react'
import { mainContext } from '../Context/mainContextAPI'
import Swal from 'sweetalert2'

const AddExpence = () => {
    const [isHide,setIsHide]=useState(true)
    const {allExpence,setAllExpense}=useContext(mainContext)

    const onsubmitHandler=(event)=>{
        try{
            event.preventDefault()
            const formData=new FormData(event.target)
            const price=formData.get("price") ||0
            const description=formData.get("description") ||''
            const purpose=formData.get("purpose") ||''

            if(!description || price<=0 || !purpose){
                alert("Please! fill all details properly")
                return
            }

            const exp={
                price,
                description,
                purpose,
                created_at:new Date(),
                id:Date.now()
            }
            const new_expences=[
                ...allExpence,
                exp
            ]

            setAllExpense(new_expences)
            localStorage.setItem("expence",JSON.stringify(new_expences))
             Swal.fire({
             title: 'Success!',
             text: 'Expence Added Successfully :)',
             icon: 'Success',
             confirmButtonText: 'OK'
            })
            event.target.reset()
            setIsHide(true)

        }catch(error){
            console.error(error.message)
        }
    }
      function open(){
        setIsOpen(true)
    }
    function close(){
        setIsOpen(false)
    }




  return (
   <>
    <div className="flex justify-end py-3">
         <button onClick={()=>setIsHide(!isHide)} className='px-3 py-2 bg-indigo-500 rounded text-white cursor-pointer'>
            {
                isHide?'Add +':'Close X'
            }
         </button>
    </div>

  {!isHide && <div className="py-5 ">
    <form onSubmit={onsubmitHandler}>
        <div className="mb-3">
            <label htmlFor="price">Price (in ruppes)</label>
            <input id='price' type="number" name='price' required className="w-full py-2 border border-gray-400 rounded outline-none px-3" placeholder='Enter Price'/>
        </div>
        <div className="mb-3">
            <label htmlFor="description">Description</label>
            <textarea id='description' type="number" name='description'required className="w-full py-2 border border-gray-400 rounded outline-none px-3" placeholder='Enter Description'/>
        </div>
        <div className="mb-3">
            <label htmlFor="purpose">Purpose</label>
            <select className='w-full py-2 border border-gray-400 rounded outline-none px-3' name="purpose" id="purpose" required>
                <option value="expence">Expence</option>
                <option value="income">Income</option>
            </select>
        </div>
        <div className="mb-3">
            <button className="w-full py-2  bg-indigo-500 rounded-md text-white">Add Expence</button>
        </div>
    </form>
   </div>}
   </>
  )
}

export default AddExpence