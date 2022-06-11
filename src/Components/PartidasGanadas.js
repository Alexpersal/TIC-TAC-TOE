export function PartidasGanadas(jugador, win) {
  let cont1 = win[0];
  let cont2 = win[1];
  jugador === "X" ? cont1++ : cont2++;
  win[0] = cont1++;
  win[1] = cont2++;
}
