import React from "react";
import ApiImg from '../assets/api.png';

const Description = () =>{
    return(
        <div className="bg-white" >
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 h-screen'>
                <img className='w-[500px] mx-auto my-auto flex' src={ApiImg} alt='/' />
                <div className='flex flex-col justify-center px-7'>
                    <p className='text-[#9370db] font-bold '>Definicion</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-5'>Interfaz de Programación de Aplicaciones</h1>
                    <p>
                    Es un conjunto de reglas y herramientas que permite que diferentes 
                    aplicaciones se comuniquen y compartan datos entre sí de manera estandarizada y segura.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Description