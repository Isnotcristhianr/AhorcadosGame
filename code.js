//funcion no nativa js
//siempre arriba
String.prototype.replaceAt = function (index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};
//-> Uso: palabraconGuiones = palabraconGuiones.replace(i*2, letra);

const palabras = [
  "casa",
  "perro",
  "gato",
  "coche",
  "moto",
  "avion",
  "bicicleta",
  "Universidad"
]; //generar palabras aleatorias

//encontrar palabra
const palabra = palabras[Math.floor(Math.random() * palabras.length)];

//determinar palabras con guiones
let palabraconGuiones = palabra.replace(/./g, "_ ");

//contador fallos
let contadorFallos = 0;

// comprobar generacion de palabras => alert(palabra + " - " + palabraconGuiones);

//determinar guiones y verificar palabra
document.querySelector("#calcular").addEventListener("click", () => {
  const letra = document.querySelector("#letra").value;
  //fallo
  let Fallo = true;
  for (const i in palabra) {
    if (letra == palabra[i]) {
      palabraconGuiones = palabraconGuiones.replaceAt(i * 2, letra);
      Fallo = false;
    }
  }

  if (Fallo) {
    contadorFallos++;
    document.querySelector("#Ahorcado").style.backgroundPosition =
      -(263 * contadorFallos) + "px 0";

    if (contadorFallos == 5) {
      alert("Has perdido");
    }
    //comprobar si gana -> cuando no hay ningun guion
  } else {
    if (palabraconGuiones.indexOf('_') < 0) {
      document.querySelector("#ganador").style.display = "flex";
    }
  }
  //pintar guiones
  document.querySelector("#output").innerHTML = palabraconGuiones;
  palabraconGuiones;

  //limpiar input
  document.querySelector("#letra").value = "";
  document.querySelector("#letra").focus();
});
