import React, { useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { useContext } from 'react'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from "react-redux";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { toast } from "react-toastify";


function Home() {
    let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

    function handleFilter(category) {
        if (category === "All") {
            setCate(food_items);
        } else {
            let newList = food_items.filter(
                (item) => item.food_category === category
            );
            setCate(newList);
        }
    }

    let items = useSelector(state => state.cart);
    let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
    console.log(subtotal);
    let delivary = 20;
    let taxes = Math.floor(subtotal * 0.5 / 100);
    let total = Math.floor(subtotal + delivary + taxes);


    return (
        <div className='bg-slate-200 w-full min-h-screen pt-[120px]  overflow-x-hidden'>
            <Nav />
            {!input ? <div className='flex flex-wrap justify-center items-center gap-5 w-[100%] '>
                {Categories.map((cat) => {
                    return <div className='w-[140px] h-[150px] bg-white flex flex-col  justify-start items-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200 ease-in-out'
                        onClick={() => handleFilter(cat.name)}>
                        {
                            cat.icon
                        }

                        {
                            cat.name
                        }
                    </div>

                })}
            </div> : null}

            <div className='w-full  flex flex-wrap gap-5 p-5 justify-center items-center pt-8 pb-8'>

                {cate.length>1?cate.map((item) => {
                    return <Card key={item.id} name={item.food_name} image={item.food_image} id={item.id} price={item.price} type={item.food_type} />
                }):<div className='flex justify-center items-center gap-5 ' ><span className='w-full h-full flex justify-center items-center text-4xl font-600 text-green-400' >No Dish found</span> <FaRegFaceSadTear className=' flex justify-center items-center font-600 text-green-400 text-4xl' /></div>}

                



            </div>

            <div className={` w-full md:w-[40vw] h-[93%] fixed top-20 right-0 bg-white transition-all duration-500 shadow-xl p-6 ${showCart ? "translate-x-0" : "translate-x-full"} flex flex-col items-center overflow-auto z-60 `}>
                <header className='w-[100%]  flex justify-between items-center '>
                    <span className='text-green-400 font-semibold'>Order item </span>
                    <RxCross2 className='text-green-400 font-semibold w-[20px] h-[30px] cursor-pointer hover:text-gray-500' onClick={() => setShowCart(false)} />
                </header>


                {items.length > 0 ? <>

                  
                        <div className='w-full mt-9 flex flex-col gap-7 '>  {items.map((item) => (
                            <Card2 key={item.id} name={item.name} image={item.image} id={item.id} price={item.price} type={item.type} qty={item.qty} />
                        ))} </div>

                        <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-4 p-8 '>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-lg font-semibold text-gray-600'>Subtotal</span>
                                <span className='text-lg font-semibold text-green-400'>Rs {subtotal}/-</span>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <span className=' text-lg font-semibold text-gray-600'>Delivery</span>
                                <span className='text-lg font-semibold text-green-400'>Rs {delivary}/-</span>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <span className=' text-lg font-semibold text-gray-600'>Taxes</span>
                                <span className='text-lg font-semibold text-green-400'>Rs {taxes}/-</span>
                            </div>

                        </div>
                        <div className='w-full flex justify-between items-center p-7'>
                            <span className='text-lg font-semibold text-gray-600'>Total</span>
                            <span className='text-lg font-semibold text-green-400'>Rs {total}/-</span>
                        </div>
                        <button className='w-[40%] bg-green-400 text-white p-4 rounded-lg hover:bg-green-500 transition-all duration-100 ease-in-out' onClick={()=>{
                            toast.success("Order Placed Successfully");
                        }}>Place Order </button>

                </> : <div className='w-full h-full flex justify-center items-center text-4xl font-600 text-green-400 gap-3'>

                    <span>Empty Card</span>
                    <FaRegFaceSadTear className=' flex justify-center items-center font-600 text-green-400 text-3xl' />
                </div>}

            </div>



        </div>
    )
}

export default Home

