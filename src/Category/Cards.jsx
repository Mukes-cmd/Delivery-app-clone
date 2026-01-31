import React from 'react'
import { LeafyGreen } from 'lucide-react';
import { Fish } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { AddItem } from '../Redux/cartSlice';


const Cards = ({name, image, price, food, qty, type, id}) =>  {
 
  const dispatch = useDispatch();
  
  return (
   
    <div className='w-[300px] h-[400px] bg-white p-4 font-semibold rounded-xl active:scale-95 mt-5 hover:border-2 border-green-300'>
        <div className='w-[100%] h-[60%] '>
            <img className=' h-full  w-full rounded-lg' src={image}></img>
        </div>
        <h1 className='text-2xl'>{name}</h1>
        <div className='flex justify-between pt-3 text-xl text-green-500'>
           <div>{price}/-</div>
           <div className='flex gap-2 justify-center items-center'>

             
             <span>{type=="veg"? <LeafyGreen size={20}/> : <Fish/>}</span>
             <h4>{type}</h4>
           </div>


        </div>
        <button className='w-full p-4 bg-green-300 mt-3 shadow-gray-400 active:scale-95 cursor-pointer rounded-xl' onClick={()=>dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1}))}>Add to Dish</button>
    </div>


  )
}

export default Cards

