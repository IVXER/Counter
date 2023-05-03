//Crear un contador con 3 botones, reset, sumar, restar, al pirncipio va a ver un numero, cuando presione el boton sumar que el numero suba 1, cuando le de al boton de restar que reste 1, y cuando le de al boton de reset la cuenta vuelva a cero, hacer esto en javascript y html.

let contador=0;

function incremento() {
  contador+= 1;
  updateCounter();
}

function decremento() {
  contador-= 1;
  updateCounter();
}

function resetear() {
  contador= 0;
  updateCounter();
}

function updateCounter() {
  document.getElementById("contador").textContent = contador;
}