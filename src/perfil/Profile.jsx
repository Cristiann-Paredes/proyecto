import React from 'react';
import './Profile.css'; 

import gilmarImage from '../assets/gilmar.png';
import erickImage from '../assets/erick.png';
import paulImage from '../assets/paul.png';
import ismaelImage from '../assets/ismael.png';
import cristianSImage from '../assets/cristianS.png';
import cristianPImage from '../assets/cristianP.png';
import martinImage from '../assets/martin.png';

const Profile = () => {
  const profiles = [
    { username: 'Gilmar Morales', email: 'gilmar.morales@epn.edu.ec', image: gilmarImage },
    { username: 'Erick Ruiz', email: 'erick.ruiz@epn.edu.ec', image: erickImage },
    { username: 'Paul Hidalgo', email: 'paul.hidalgo@epn.edu.ec', image: paulImage },
    { username: 'Ismael Novillo', email: 'ismael.novillo@epn.edu.ec', image: ismaelImage },
    { username: 'Cristian Simba', email: 'cristian.simba@epn.edu.ec', image: cristianSImage },
    { username: 'Cristian Paredes', email: 'cristian.paredes@epn.edu.ec', image: cristianPImage },
    { username: 'Martin Jimenez', email: 'martin.jimenez@epn.edu.ec', image: martinImage }
  ];

  return (
    
    <div className='h-screen'>
      <div className='w-[100%]  flex flex-col bg-[#000300] text-white px-20 py-7 mb-2'>
        <h1 className='w-full text-3xl font-bold'>Nuestro Equipo de Trabajo</h1>
    </div>
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-container">
            <div className="profile-header">
              <img
                src={profile.image} // Ruta de la imagen de perfil
                alt="Profile"
                className="profile-picture"
              />
              <h2>{profile.username}</h2> {/* Nombre de usuario */}
            </div>
            <div className="profile-details">
              <p>Correo electrónico: {profile.email}</p>
              {/* Otros detalles del perfil */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;