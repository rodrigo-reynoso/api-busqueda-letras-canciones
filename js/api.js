import * as UI from './interfaz.js';

class API{
    constructor(artista,cancion){
        this.artista = artista;
        this.cancion = cancion;
        // Se puede instanciar el metodo aquí una vez que se instancia la clase
        // this.consultarAPI
    }
    // Method
    consultarAPI(){                   
        UI.divResultado.textContent = '';
        UI.headingTitulo.textContent = '';
        this.spinner();
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
         fetch(url)
            .then(respuesta =>respuesta.json())
            .then(resultado =>{
                // Si se equivocan al escribir la cancion o el artista aparece un error 404 es decir que es false el if salta al else
                if(resultado.lyrics){
                    const {lyrics} = resultado;
                    UI.divResultado.textContent = `${lyrics}`
                    UI.headingTitulo.textContent = `Letra de la cancion ${this.cancion} de ${this.artista}`
                } else {
                    UI.divResultado.textContent =''
                    UI.headingTitulo.textContent = ''
                    // const spinner = document.querySelector('.spinner');
                    // spinner.remove()
                    UI.divMensaje.textContent = 'La canción no existe, prueba con otra búsqueda';
                    UI.divMensaje.classList.add('error');   
                    setTimeout(()=>{
                        UI.divMensaje.textContent = '';
                        UI.divMensaje.classList.remove('error');
                    },3000)
                }

            })
    }
    spinner(){
        const spinner = document.createElement('div');
        spinner.classList.add('spinner');
        UI.divResultado.appendChild(spinner)
    }
}

export default API;