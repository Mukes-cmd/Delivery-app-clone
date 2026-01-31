import React, { createContext, useState } from 'react'
import { food_items } from '../food'
export const DataContext = createContext()

const Context = ({children}) => {
     const [Category, setCategroy] = useState(food_items) 
   const [input, setinput] = useState(" ")
   const [showCard, setshowCard] = useState(false)
    let data = {
     input,
     setinput,
     Category,
     setCategroy,
     showCard,
     setshowCard
    }
  return (
    <div>
        <DataContext.Provider value={data}>

        {children}
        </DataContext.Provider>
    </div>
  )
}

export default Context