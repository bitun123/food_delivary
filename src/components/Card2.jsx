import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeItem} from '../redux/cartSlice';
import { Increament} from '../redux/cartSlice';
import { Decrement} from '../redux/cartSlice';


function Card2({ name, image, id, price, type ,qty}) {
    let   dispatch = useDispatch();
    return (
        <div className='w-full md:h-[120px]   p-2  shadow-lg flex justify-between items-center rounded-lg shadow-lg'>

            <div className='md:w-[70%] h-full  flex justify-between items-center gap-3  rounded-lg  p-2  w-[80%] '>
                <div className='w-[40%] h-full overflow-hidden shadow-lg'>
                    <img src={image} alt="" className='object-cover w-full h-full rounded-lg' />
                </div>
                <div className='w-[60%] h-full flex flex-col justify-between gap-5 '>
                    <div className='text-lg font-semibold text-gray-600 w-full'>{name}</div>
                    <div className='w-[110px] h-[50px] bg-slate-400 flex items-center rounded-lg overflow-hidden shadow-lg border-2 border-green-400'>
                        <button className='w-[30%] h-full bg-white  flex items-center justify-center text-green-400  text-[30px] hover:bg-green-100 '  onClick={()=>{qty>1?dispatch(Decrement({id})):1 }}>-</button>
                        <span className='w-[40%] h-full bg-slate-200 flex items-center justify-center   text-green-400  text-[30px]'>{qty}</span>
                        <button className='w-[30%] h-full bg-white  flex items-center justify-center text-green-400 font-semibold text-[30px] hover:bg-green-100' onClick={()=>{dispatch(Increament({id}))}}>+</button>
                    </div>
                </div>
            </div>

            <div className=' flex flex-col items-end gap-7 w-[30%]'>

<span className='text-xl text-green-400 font-semibold'>Rs {price}/-</span>
 <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={() => dispatch(removeItem(id))} />
            </div>

        </div>
    )
}

export default Card2
