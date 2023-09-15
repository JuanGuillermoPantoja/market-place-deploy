import React, { useState } from 'react'
import { useFetch } from '../../assets/useFetch';
import { Header } from '../Header/Header';

export const Products = () => {
    const { data, loading, error } = useFetch(
        'https://fakestoreapi.com/products');


    const [selectedProduct, setSelectedProduct] = useState([]);

    const handleProductClick = (product) => {
        setSelectedProduct([...selectedProduct, product]); // Agregar el producto a la lista existente
      }
    
  return (
    <>
        <Header selectedProduct={selectedProduct} />
        <div>
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            <div>
            <div className='flex flex-wrap w-full justify-center gap-3 mt-[2.5%]'>
                {data?.map((product) => (
                        <div key={product.id} className='shadow-3xl text-[#262730] font-semibold w-80 h-96 flex flex-col justify-center items-center bg-[#f8fab4] mt-3 p-3 border-px rounded-2xl'>
                            <p className='truncate w-[80%] hover:line-clamp-2'>{product.title}</p>
                            <img className='w-48 h-[60%] m-auto border-2 rounded-2xl bg-white p-3 border-[#262730]' src={product.image} alt="" />
                            <p>Price: ${product.price}</p>
                            <p>{product.category}</p>
                            <button className='text-[#f8fab4]' onClick={() => handleProductClick(product)}>add</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
    )
}
