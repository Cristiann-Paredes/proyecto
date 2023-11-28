import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css'; // Importa un archivo de estilos CSS para personalizar la apariencia

const Movies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
        params: { q: 'game of thr' },
        headers: {
          'X-RapidAPI-Key': '94e3e226damsh70ed49e1f6b6fffp103bb6jsn45293185be4c',
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data.d);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="data-container max-w-[1200px] mx-auto  flex flex-col justify-center items-center">
      <h1>Resultados de Búsqueda de Películas</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Año</th>
            {/* Agrega más encabezados según la estructura de tus datos */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.l}</td>
              <td>{item.y}</td>
              {/* Agrega más celdas según la estructura de tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
