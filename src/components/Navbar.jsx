import { useState } from 'react';
import logo from '../assets/fav-icon.png';
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <header className='bg-gray-900  font-bold items-center text-white py-4  container mx-auto px-4 fixed top-0 left-0 right-0 z-10 '>
      <div className='flex justify-between items-center '>

        {/* Logo */}
        <a href="/">
          <img src={logo} alt="logo" className="h-8" />
        </a>

        {/* Desktop Menu */}

        <nav className=' hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-amber-500'>Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonial">Testimonial</a>
        </nav>

        {/* Contact Button (Desktop) */}

        <a href="#contact" className='hidden md:block bg-green-500 px-4 py-2 hover:bg-amber-300 rounded'>
          Contact Us
        </a>

        {/* Mobile Menu Button */}

        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
          <HiMenuAlt3 className='size-6' />
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-center z-20 p-4 md:hidden">
          <a href="#home" className='block py-2'>Home</a>
          <a href="#services" className='block py-2'>Services</a>
          <a href="#about" className='block py-2'>About Us</a>
          <a href="#pricing" className='block py-2'>Pricing</a>
          <a href="#testimonial" className='block py-2'>Testimonial</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
