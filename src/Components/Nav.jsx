import React, { useContext, useEffect } from 'react'
import { Search } from 'lucide-react';
import { Hamburger } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { DataContext } from '../useContext/Context';
import { food_items } from '../food';
import { useSelector } from 'react-redux';



const Nav = () => {
    let {input, setinput, Category, setCategroy, showCard, setshowCard} =   useContext(DataContext); 
    
    useEffect(()=>{
      let newList = food_items.filter((items) =>items.food_name.includes(input) || items.food_name.toLowerCase().includes(input))
      setCategroy(newList)
    }, [input])

    const submitHandler = (e) =>{
      e.preventDefault()
      setinput(" ")
    }

      let item =  useSelector(state=>state.card)
      console.log(item);
      
  
  return (
    <div className=' w-full flex h-[100px] items-center justify-between px-5 md:px-8'>

      {/* {left icon} */}
       <div className='w-[60px] h-[60px] bg-white text-center flex justify-center items-center rounded-md shadow-xl'>
         <Hamburger className='w-[30px] h-[30px] text-green-500' />
       </div>
        {/* {left icon} */}

         <form  onSubmit={submitHandler}
         className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-3 rounded-md shadow-md md:w-[70%] ' >
          <Search className='text-green-500 w-[20px] h-[20px]'/>
          <input type='text' placeholder='Search dish.....' className='w-[100%] outline-none text-xl'
          value={input}
          onChange={(e)=>{
            setinput(e.target.value)
          }}
          />
          </form>   

           <div className='w-[60px] h-[60px] bg-white text-center flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{
            setshowCard(true)
           }}>
            <span className='absolute top-0 right-2 text-green-500 font-bold'>{item.length}</span>
               <ShoppingBag className='w-[30px] h-[30px] text-green-500' />
           </div>

          
            </div>     

    
  )
}

export default Nav