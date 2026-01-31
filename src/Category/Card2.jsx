import React from 'react'
import { Trash } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { decrement, increment, Remove } from '../Redux/cartSlice';

const Card2 = ({name, id, price, image, qty}) => {
 let dis =  useDispatch()


  return (
    <div className='w-full h-[120px] p-3 flex justify-between items-center shadow shadow-gray-300 rounded-xl mt-5 '>
            {/* images and add boxx */}
            <div className='w-[60%] h-full flex '>
                <div className='w-[50%] h-full overflow-hidden object-cover rounded-md'>
                    <img src={image} alt=""/>
                </div>
                <div className='px-8 text-md   h-full'>
                    
                    <h1>{name}</h1>
                    
                      <div className='bg-white flex justify-between items-center  rounded-md border-2 border-green-400 px-2 mt-2'>
                        <button className='p-1  text-green-400 cursor-pointer' onClick={()=>{
                         if(qty>0){
                          dis(decrement(id))
                         }
                
                        }}>-</button>
                         <button className="p-2 px-3  text-green-400 bg-blue-50 ">{qty}</button>
                        <button className='p-1 text-green-400 cursor-pointer' onClick={()=>{
                          dis(increment(id))
                        }}>+</button>
                      </div>
                </div>
            </div>
              {/* images and add boxx */}



            {/* left box for price */}
            <div className=' h-full flex flex-col justify-start'>
                <div>
                    <span className='text-xl text-green-400'>{price}/-</span>
                </div>
                <div className='flex justify-end items-center p-3'>
                   <Trash className='text-center text-red-500 cursor-pointer' onClick={()=>dis(Remove(id))}/>
                </div>
            </div>
            {/* left box for price */}
    </div>
  )
}

export default Card2