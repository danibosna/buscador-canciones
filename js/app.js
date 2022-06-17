import * as UI from "./interfaz.js";
import API from "./api.js";

UI.formularioBuscar.addEventListener("submit", buscarCancion);

function buscarCancion(e) {
  e.preventDefault();

  //obtener datos del formulario
  const artista = document.querySelector("#artista").value;
  const cancion = document.querySelector("#cancion").value;

  //validar el formulario
  if ((artista === "", cancion === "")) {
    UI.divMensaje.textContent = "Error... Todos los campos son obligatorios";
    UI.divMensaje.classList.add("error");

    setTimeout(() => {
      UI.divMensaje.textContent = "";
      UI.divMensaje.classList.remove("error");
    }, 3000);

    return;
  } else {
    //consultar API
    new API(artista, cancion);
  }
}
