import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Profile from '../perfil/Profile.jsx';
import { Link } from 'react-router-dom';

const links = [

  {
    name: "Definicion",
    href: "/def"
  },
  {
    name: "APIs",
    href: "/apis"
  },
  {
    name: "Perfil",
    href: "/perfil"
  },
  {
    name: "Contactos",
    href: "/contactos"
  }
]

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleProfileClick = () => {
    setShowProfile(true); // Mostrar solo el perfil al hacer clic en el enlace de perfil
  };

  return (
    <div className='max-w-[1200px] mx-auto flex justify-between items-center text-white px-12 h-24'>
      <h1 className='w-full text-3xl font-bold text-[#9370db]'><Link to="/">Home</Link></h1>
      <ul className='hidden md:flex'>
        {links.map((link) => (
          <li key={link.name} className='p-4'>
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={`fixed top-0 left-0 w-full h-full bg-black z-50 ${showProfile ? 'block' : 'hidden'}`}>
        <div className='max-w-[1200px] mx-auto py-4'>
          <Profile />
        </div>
      </div>

      <ul className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] transform ${nav ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-500 ${showProfile ? 'hidden' : 'block'}`}>
        <h1 className='w-full text-3xl font-bold m-4 md:hidden'>Home</h1>
        <li className='p-4 border-b border-gray-100'>APIs</li>
        <li className='p-4 border-b border-gray-100'>
        <Link to='/perfil' onClick={handleProfileClick}>Perfil</Link>
        </li>
        <li className='p-4 border-b border-gray-100'>Contactos</li>
      </ul>
    </div>
  );
};

export default Navbar;