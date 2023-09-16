import React from 'react'
import { Header } from '../../Header/Header.jsx'
import clothes from '../../../img/clothes.jpg'

export const Home = () => {
  return (
    <>
     <Header />
     <section className='h-[700px] flex-col flex justify-center items-center'>
        <div className='w-[600px] flex justify-center items-center flex-col bg-[#f8fab4] h-[250px] rounded-full text-[#262730] shadow-3xl'>
          <h1>¡Welcome to Unimarket!</h1>
          <h2 className='mt-4 text-xl'>Your style, your story, our clothing.</h2>
        </div>
        <div className='w-[600px] flex justify-center h-[250px] mt-8 shadow-3xl rounded-full'>
          <img className='rounded-full opacity-80' src={clothes} alt="" />
        </div>
     </section>
    </>
  )
}
