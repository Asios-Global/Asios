import React, { useState, useRef } from 'react';
import logo from '../src/assets/Logo.jpg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  React.useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        display: 'block'
      });
    } else {
      gsap.to(menuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          menuRef.current.style.display = 'none';
        }
      });
    }
  }, [isOpen]);

  return (
    <div className='flex md:justify-around justify-between items-center py-3 px-4 bg-white shadow-md sticky top-0 z-10'>
      <div>
        <Link to="/">
          <img src={logo} className='w-auto h-12 object-cover' alt="Logo" />
        </Link>
      </div>
      <div className="hidden md:flex gap-4 sm:gap-6">
        <Link to="/" className=' hover:text-primary'>Home</Link>
        <Link to='/product' className=' hover:text-primary'>Product</Link>
        <Link to='/catalogue' className=' hover:text-primary'>E-Catalogue</Link>
        <Link to="/about" className=' hover:text-primary'>About</Link>
        <Link to='/contact' className=' hover:text-primary'>Contact</Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className=''>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div
        ref={menuRef}
        className={`fixed top-16 right-0 h-full w-full bg-white  md:hidden transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ display: 'none' }}
      >
        
        <nav className='flex flex-col items-center py-4'>
          <Link to="/" className=' hover:text-primary py-2' onClick={toggleMenu}>Home</Link>
          <Link to='/product' className=' hover:text-primary py-2' onClick={toggleMenu}>Product</Link>
          <Link to='/catalogue' className=' hover:text-primary py-2 onClick={toggleMenu}'>E-Catalogue</Link>
          <Link to="/about" className=' hover:text-primary py-2' onClick={toggleMenu}>About</Link>
          <Link to='/contact' className=' hover:text-primary py-2' onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
