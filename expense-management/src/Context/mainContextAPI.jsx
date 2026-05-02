import React, { createContext, useState } from 'react'

export const mainContext=createContext()

export const MainContextAPI = ({children}) => {

    const [allExpence,setAllExpense]=useState(JSON.parse(localStorage.getItem("expence")||'[]'))


  return (
    <mainContext.Provider value={{allExpence,setAllExpense}}>{children}</mainContext.Provider>
  )
}

