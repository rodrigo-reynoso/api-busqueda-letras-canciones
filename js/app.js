// cuando vas a usar todos los paquetes es mejor usar " * as from "
import * as UI from './interfaz.js';
import API from './api.js';
UI.formularioBuscar.addEventListener('submit',buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    const artista = document.querySelector('#artista').value,
          cancion = document.querySelector('#cancion').value;
    
    if(artista ===''||cancion===''){
        UI.divMensaje.textContent = 'Error!..Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error')
        setTimeout(()=>{
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error')
        },3000)
    }
    // Consultar API
    const busqueda = new API(artista,cancion)
    busqueda.consultarAPI();

}