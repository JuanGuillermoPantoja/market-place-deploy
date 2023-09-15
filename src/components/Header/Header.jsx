import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
const Logo = '../../img/logoMarketPlace.jpg'
const carroCompra = '../../img/img-carro-compras.png'


export const Header = ({selectedProduct}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  
  return (
    <>
      <header className='h-32 bg-[#f8fab4] w-full flex justify-center'>
          <nav className='flex h-full w-11/12 items-center justify-between'>
            <NavLink className='p-0' to='/products'><img className='w-32' src={Logo} alt="LogoMarketPlace" /></NavLink>
            <ul className='flex justify-around items-center text-[#262730] w-1/5'>
              <li><NavLink to='/products'>Products</NavLink></li>
              <li className='relative'>
                <button className='bg-inherit' onClick={toggleDropdown}>
                  <img className='w-[50px]' src={carroCompra} alt="" />
                </button>
                {showDropdown && (
                  <div className="w-[250px] absolute top-[50px] right-0 bg-[#f8fab4] border border-gray-300 rounded shadow">
                    {/* Contenido del desplegable */}
                    <div>
                      {selectedProduct.map((product) =>(
                        <ul>
                          <li>{product.title}</li>
                          <li className='flex justify-center'><img  className="w-1/2"src={product.image} alt="" /></li>
                          <li>{product.price}</li>
                          <li><hr /></li>
                        </ul>
                      ))}
                    </div>
                      
                  </div>
                )}
              </li>
            </ul>
          </nav>
      </header>
    
      {showDropdown && (
        <div className="fixed top-0 left-0 w-full h-full" onClick={closeDropdown}></div>
      )}
    </>
  )
}
               