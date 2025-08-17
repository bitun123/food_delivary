import React from 'react'
import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenLeg } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Card({name,image,id,price,type}) {
let dispatch = useDispatch() 
    return (
        <div className='w-[300px] h-[400px] bg-white rounded-lg shadow-lg overflow-hidden p-3 flex flex-col gap-3'>
            <div className='w-[100%] h-[60%] overflow-hidden rounded-lg hover:border-2 border-green-300 cursor-pointer'>
                <img src={image} alt="" className='w-[100%] h-[100%] object-cover' />
            </div>
            <div className='text-2xl font-semibold '>
                {name}

            </div>
            <div className='w-full flex justify-between items-center '>

                <div className='text-lg font-bold text-green-500'>Rs {price}/-</div>
                <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'> {type==="veg"?<LuLeafyGreen />:<GiChickenLeg />} <span>{type}</span></div>
            </div>
            <button className='w-full p-3 bg-green-300  text-gray-700 rounded-lg hover:bg-green-400 transition-all font-semibold text-xl'
             onClick={()=>{dispatch(addItem({id:id,name:name,price:price,qty:1,image:image})),
            toast.success("Item Added To Cart")}
        }>Add to Dish</button>
        </div>
    )
}

export default Card
