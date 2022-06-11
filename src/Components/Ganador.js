import { PartidasGanadas } from "./PartidasGanadas";

function Ganador(tablero, jugador, win, bloqueo) {
  if (
    tablero[0] === jugador &&
    tablero[1] === jugador &&
    tablero[2] === jugador
  ) {
    alert("Ganador jugador " + jugador);
    PartidasGanadas(jugador, win);
    return (bloqueo = true);
  } else if (
    tablero[3] === jugador &&
    tablero[4] === jugador &&
    tablero[5] === jugador
  ) {
    alert("Ganador jugador " + jugador);
    PartidasGanadas(jugador, win);
    return (bloqueo = true);
  } else if (
    tablero[6] === jugador &&
    tablero[7] === jugador &&
    tablero[8] === jugador
  ) {
    alert("Ganador jugador " + jugador);
    PartidasGanadas(jugador, win);
    return (bloqueo = true);
  } else if (
    tablero[0] === jugador &&
    tablero[3] === jugador &&
    tablero[6] === jugador
  ) {
    alert("Ganador jugador " + jugador);
    PartidasGanadas(jugador, win);
    return (bloqueo = true);
  } else if (
    tablero[1] === jugador &&
    tablero[4] === jugador &&
    tablero[7] === jugador
  ) {
    alert("Ganador jugador " + jugador);
    PartidasGanadas(jugador, win);
    return (bloqueo = true);
  } else if (
    tablero[2] === jugador &&
    tablero[5] === jugador &&
    tablero[8] === jugador
  ) {
    alert("Ganador jugador " + jugador);
    PartidasGanadas(jugador, win);
    return (bloqueo = true);
  } else if (
    tablero[0] === jugador &&
    tablero[4] === jugador &&
    tablero[8] === jugador
  ) {
    alert("Ganador jugador " + jugador);
    PartidasGanadas(jugador, win);
    return (bloqueo = true);
  } else if (
    tablero[2] === jugador &&
    tablero[4] === jugador &&
    tablero[6] === jugador
  ) {
    alert("Ganador jugador " + jugador);
    PartidasGanadas(jugador, win);
    return (bloqueo = true);
  }
}

export default Ganador;
