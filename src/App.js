import "./App.css";
import React from "react";
import { useState } from "react";
import Ganador from "./Components/Ganador";

let tablero = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
let win = [0, 0];
let bloqueo = false;

function App() {
  const [jugador, setJugador] = useState("X");
  const [activo, setActivo] = useState("boton-activo");

  function Clicar(num) {
    if (tablero[num] === "-") {
      tablero[num] = jugador;
      jugador === "X" ? setJugador("Y") : setJugador("X");
    } else alert("no se puede cambiar el símbolo");
    bloqueo = Ganador(tablero, jugador, win, bloqueo);
    if (bloqueo === true) setActivo("boton-Noactivo");
  }

  function ReiniciaPartida() {
    console.log(win);
    if (win[0] === 3 || win[1] === 3) {
      alert("Partida finalizada");
    } else {
      tablero = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
      setJugador("X");
      setActivo("boton-activo");
      bloqueo = false;
    }
  }

  function NuevaPartida() {
    tablero = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    setJugador("X");
    setActivo("boton-activo");
    win = [0, 0];
    bloqueo = false;
  }

  return (
    <div className="App">
      <div className="juego">
        <div className="turno">
          Turno jugador: {jugador === "X" ? "1" : "2"}
        </div>
        <div className="tablero">
          {tablero.map((n, i) => (
            <button className={activo} onClick={() => Clicar(i)}>
              {tablero[i]}
            </button>
          ))}
        </div>
      </div>
      <div className="resumen">
        <div className="ganador1">Partidas Ganadas Jugador 1: {win[0]}</div>
        <div className="ganador2">Partidas Ganadas Jugador 2: {win[1]}</div>
        <button className="reinicia" onClick={() => ReiniciaPartida()}>
          Reiniciar Partida
        </button>
        <button className="nuevaPartida" onClick={() => NuevaPartida()}>
          Nueva Partida
        </button>
      </div>
    </div>
  );
}

export default App;
