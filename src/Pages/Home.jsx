import React, { useContext } from 'react'
import Nav from '../Components/Nav'
// import { useState } from 'react'
import Categories from '../Category/Items'
import Cards from '../Category/Cards'
import { food_items } from '../food'
import { DataContext } from '../useContext/Context'
import { X } from "lucide-react";
import Card2 from '../Category/Card2'
import { useSelector } from 'react-redux'





const Home = () => {
  
  let {Category, setCategory, input, showCard, setshowCard} = useContext(DataContext)
  const filter = (category)=>{
        if(category==="All"){
          setCategory(food_items)
        }else{
         let newList =  food_items.filter((item)=>item.food_category===category)
          setCategory(newList)
        }
  }

   

let item =   useSelector(state=>state.card)
let subTotal = item.reduce((total,item)=>total+item.qty*item.price, 0)
let deliveryFee = 20;
let taxes = subTotal*0.5/100;
let total = subTotal+deliveryFee+taxes

console.log(subTotal)

  return (
    <div className='bg-sky-200 w-full min-h-screen'>
      <Nav/>
      {!input?
      <div className='flex justify-center items-center gap-5 w-[100%] flex-wrap '>
        {Categories.map((item, idx)=>{
            return   <div className='w-[140px] h-[150px] bg-white flex flex-col px-5 py-4 rounded-md shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200 ' onClick={()=>filter(item.text)}>
                   <div>{item.icon}</div> 
                   <div className='font-bold py-5 px-2'>{item.text}</div>
                   </div>
            
        })}
       </div>
      :null}
       
       <div className='flex w-full flex-wrap gap-5 px-5 pt-8 justify-center items-center'>
        {Category.map((items)=>{
          // console.log(items)
        
          return <Cards name ={items.food_name} price={items.price} food = {items.food_category} image = {items.food_image} quantity = {items.food_quantity} type={items.food_type} id={items.id}/>
        })}
       </div>

       {/* left card div */}
       <div className= {`w-full  md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all flex flex-col items-center justify-between duration-500 ${showCard?"translate-x-0" : "translate-x-full"}`}>
           <header className='w-[100%] flex justify-between items-center'>
            <span className='text-2xl text-green-400 font-semibold'>Order items</span>
               <X className='w-[30px] h-[30px] text-[18px] text-green-400 font-semibold cursor-pointer hover:text-gray-500' onClick={()=>setshowCard(false)

               }/>
           </header>
           <div className='w-full h-full overflow-y-scroll gap-8 mt-5 flex flex-col'>
            {item.map((item)=>(
              <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}
              />
            ))}
            <div className='w-full border-t-2 border-gray-400 mt-5 flex flex-col p-6 gap-2' >
               <div className=' w-full flex justify-between items-center'>
                <span className='font-semibold text-lg'>Subtotal</span>
                <span className='text-green-400 text-lg'>{subTotal}/-</span>
               </div >
               <div className=' w-full flex justify-between items-center'>
                <span className='font-semibold text-lg'>Delivery Fee</span>
                <span className='text-green-400 text-lg'>{deliveryFee}/-</span>
               </div>
               <div className=' w-full flex justify-between items-center'>
                <span className='font-semibold text-lg'>Taxes</span>
                <span className='text-green-400 text-lg'>{taxes}/-</span>
               </div>
           </div>
           <div className='w-full border-t-2 border-gray-400 flex justify-between items-center p-6 gap-2' >
                    <span className='font-semibold text-2xl'>Total</span>
                    <span className='font-semibold text-lg'>{total}</span>
           </div>



             <div className='flex justify-center'>
           <button className='w-[80%] p-4 bg-green-500  shadow-gray-400 active:scale-95 cursor-pointer rounded-xl'>Place order</button>
           </div>
           </div>
          
       </div>
    </div>
  )
}

export default Home