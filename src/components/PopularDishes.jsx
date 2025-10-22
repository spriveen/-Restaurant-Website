import React from 'react'
import Card from './Card'
import pizza1 from '../assets/pizza1.png'
import pizza2 from '../assets/pizza2.png'
import pizza3 from '../assets/pizza3.png'

const PopularDishes = () => {

    const menu = [
        {
            id:1,
            pizza: pizza1,
            name: "Margherita",
            desc: "Classic Italian pizza with fresh mozzarella, basil leaves, and rich tomato sauce. Simple, fresh, and delicious.",
            rating: 4
        },
        {
            id:2,
            pizza: pizza2,
            name: "Pepperoni Pizza",
            desc: "A crowd favorite topped with spicy pepperoni slices, gooey mozzarella, and tomato sauce for a perfect balance of flavor.",
            rating: 4
        },
        {
            id:3,
            pizza: pizza3,
            name: "Veggie Delight",
            desc: " Loaded with fresh vegetables like bell peppers, onions, mushrooms, and olives, this pizza is healthy, colorful, and tasty.",
            rating: 4
        },
    ]

    return (
        <div className='py-10 px-5 lg:px-0 lg:py-20 bg-gray-800' id='menu'>
            <div className='text-center max-w-7xl mx-auto'>
                <h1 className='text-3xl lg:text-4xl font-bold text-red-500'>Popular Dishes</h1>
                <p className='lg:text-xl text-sm pt-2 text-white'>Check out our most popular and highly-rated dishes.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-11 gap-7'>
                    {
                        menu.map((item)=>{
                            return <Card key={item.id} menu={item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularDishes
