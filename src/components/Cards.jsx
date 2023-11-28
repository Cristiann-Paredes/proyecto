import React from 'react';
import MovieImg from '../assets/movie.png'
import WeatherImg from '../assets/weather.png'
import SportImg from '../assets/sport.jpg'
import { Link } from 'react-router-dom';


const Cards = () => {
  return (
<div className='w-full  bg-white h-screen'>
    <div className='w-[100%]  flex flex-col bg-[#000300] text-white px-20 py-7 mb-2'>
        <h1 className='w-full text-3xl font-bold'>Consumo de APIs</h1>
        <p className='py-2'> Para el trabajo se uso APIs de diferentes temas como películas, clima y deportes</p>
    </div>

    {/*Movie API*/}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-4 py-12'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={MovieImg} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Movie API</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8'>Esta API proporciona a los usuarios explorar y buscar películas de manera eficiente mediante el uso de listas.</p>
              </div>
              <Link to="/movies"><h2 className='bg-[#9370db] text-center text-[20px] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer'>Ver</h2></Link>
          </div>

    {/*Weather API*/}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={WeatherImg} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Weather API</h2>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8'>Nos permite ver datos como la ubicación exacta, latitud, longitud y la zona horaria de varias ciudades</p>
              </div>
              <Link to="/weather"><h2 className='bg-[#9370db] text-center text-[20px] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer'>Ver</h2></Link>
          </div>
    
    {/*Sport API*/}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={SportImg} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Sports API</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8'>Proporciona información sobre el baloncesto, tanto jugadores, equipos y partidos de temporadas pasadas</p>
              </div>
              <Link to="/sport"><h2 className='bg-[#9370db] text-center text-[20px] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer'>Ver</h2></Link>
          </div>
      </div>
    </div>
  );
};

export default Cards;