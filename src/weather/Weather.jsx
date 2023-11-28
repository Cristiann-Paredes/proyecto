import React, { useState, useEffect } from 'react';
import './Weather.css';

import iconoweather from '../assets/weather2.png';

const Weather = () => {
    const [ciudades, setCiudades] = useState([]);

    const obtenerDatosCiudad = async (nombreCiudad, url) => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9ac5674456mshbe678e8595bcc8ap1ccafajsnf283d0e7d782',
                    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
                }
            };

            const response = await fetch(url, options);
            const responseData = await response.json();

            const ciudadInfo = responseData.locations[nombreCiudad];
            const nuevaCiudad = {
                nombre: ciudadInfo.name,
                direccion: ciudadInfo.address,
                latitud: ciudadInfo.latitude,
                longitud: ciudadInfo.longitude,
                zonaHoraria: ciudadInfo.tz,
            };

            setCiudades((prevCiudades) => [...prevCiudades, nuevaCiudad]);
        } catch (error) {
            console.error(`Error al obtener datos de ${nombreCiudad}:`, error);
            alert(`Error al obtener datos de ${nombreCiudad}. Por favor, inténtelo de nuevo.`);
        }
    };

    useEffect(() => {
        obtenerDatosCiudad('QUITO', 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=QUITO&contentType=json&unitGroup=us&shortColumnNames=0');
        obtenerDatosCiudad('WASHINGTON', 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=WASHINGTON&contentType=json&unitGroup=us&shortColumnNames=0');
        obtenerDatosCiudad('MANCHESTER', 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=MANCHESTER&contentType=json&unitGroup=us&shortColumnNames=0');
        obtenerDatosCiudad('ROMA', 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=ROMA&contentType=json&unitGroup=us&shortColumnNames=0');
    }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

    return (
        <div className="body text-white">
            <header>
            <nav className="nav">
                    <p><img className="imagen-1" src={iconoweather} alt="Weather icon" /></p>
                    <ul className="nav-list">
                        <li className="nav-item"><button className="btn btn-header quito" id="quito">Quito</button></li>
                        <li className="nav-item"><button className="btn btn-header washington" id="washington">Washington</button></li>
                        <li className="nav-item"><button className="btn btn-header manchester" id="manchester">Manchester</button></li>
                        <li className="nav-item"><button className="btn btn-header roma" id="roma">Roma</button></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div id="todos">
                    <div className="ciudades-todas" id="listaCiudades">
                        {ciudades.map((ciudad, index) => (
                            <div key={index} className="ciudad">
                                <p className="ciudad-id-back">{ciudad.nombre}</p>
                                <div className="ciudad-info">
                                    <div className="nombre-contenedor">
                                        <p className="ciudad-id">{ciudad.nombre}</p>
                                        <h2 className="nombre-ciudad">{ciudad.nombre}</h2>
                                    </div>
                                    <div className="ciudad-stats">
                                        <p className="stat">{ciudad.direccion}</p>
                                        <p className="stat">Latitud: {ciudad.latitud}</p>
                                        <p className="stat">Longitud: {ciudad.longitud}</p>
                                        <p className="stat">{ciudad.zonaHoraria}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Weather;
