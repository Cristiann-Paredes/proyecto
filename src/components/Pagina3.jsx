import React from 'react';
import './pagina3.css';
import logoImage from './usuario.png';
import equipoImage from './equipo.png';
import juegoImage from './ganador.png';
import { Link } from 'react-router-dom';

const pagina3 = () => {
  const url = "https://www.balldontlie.io/api/v1/players";
  const datosBC = async() => {
    const response = await fetch(url);
    const result = await response.json();
    const datos = result.data;
    let primer = document.querySelector(".cuadro1")
    for(const jugadores of datos){
      let cuadro = document.createElement("div")
      cuadro.setAttribute("Id","cuadroN")
      cuadro.innerText= "Nombre: "+jugadores.first_name + "\n" 
      +"Apellido:" +jugadores.last_name + "\n" + "Posicion:"+ jugadores.position + "\n"
      + "Equipo:" + jugadores.team.full_name;
      primer.appendChild(cuadro)
    } 
  }
  const url1 = "https://www.balldontlie.io/api/v1/teams";
  const datosEC = async() => {
    const response = await fetch(url1);
    const result = await response.json();
    const datos = result.data;
    let primer = document.querySelector(".cuadro2")
    for(const equipos of datos){
      let cuadro = document.createElement("div")
      cuadro.setAttribute("Id","cuadroN")
      cuadro.innerText= "Ciudad: "+equipos.city + "\n" 
      +"Apellido:" +equipos.division + "\n" + "Nombre completo:"+ equipos.full_name + "\n" +
      "Nombre comun: " + equipos.name;
      primer.appendChild(cuadro)
    } 
  }
  const url2= "https://www.balldontlie.io/api/v1/games"
  const datosJG = async() => {
    const response = await fetch(url2);
    const result = await response.json();
    const datos = result.data;
    let primer = document.querySelector(".cuadro3")
    for(const match of datos){
      let cuadro = document.createElement("div")
      cuadro.setAttribute("Id","cuadroN")
      cuadro.innerText= "Temporada: "+match.season + "\n" 
      +"Fecha:" +match.date + "\n" + "Equipo local : "+ match.home_team.full_name + " VS " +
      "Equipo visitante :"+ match.visitor_team.full_name + "\n" + "Partido: " + match.status +
      "\n"+ "Puntuacion local: " + match.home_team_score + "\n"+"Puntuacion visitante: " + match.visitor_team_score  ;
      primer.appendChild(cuadro)
    } 
  }
  datosBC()
  datosEC()
  datosJG()
  
  
  return (
    <div className='fondo'>
      <h1><div className='titulo'>DATOS NBA</div></h1>
      <div className='cuadro1'>
        <div className='titulo-b2'>DATOS DE JUGADORES</div>
      </div> 

      <div className='datos' style={{backgroundColor: "blue", width: "75px", display: "block", position: "fixed ",top: "200px", borderRadius: "15px", boxShadow: "5px 5px 10px gray", textAlign: "center"}}>
        <p><img src={logoImage} style={{width: "50px"}}/><div className='muestra' style={{ color: "white",backgroundColor: "#0E1C75"}}>Jugadores</div></p>
        <p><img src={equipoImage} style={{width: "50px"}}/><div className='equipo' style={{ color: "white",backgroundColor: "#0E1C75"}}>Equipos</div></p>
        <p><img src={juegoImage} style={{width: "50px"}}/><div className='partido' style={{ color: "white",backgroundColor: "#0E1C75"}}>Partido</div></p>
      </div>

      <div className='cuadro2'>
      <div className='titulo-b2'>DATOS DE EQUIPOS</div>
      </div>

      <div className='cuadro3'>
      <div className='titulo-b2'>HISTORIAL DE JUEGOS</div>
      </div>
        
    </div>
  )
}

export default pagina3;
