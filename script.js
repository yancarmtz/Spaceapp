
//   DEMO_KEY: Una "demo key" es una clave de demostración que se utiliza
//   para acceder a una API en un entorno de pruebas o demostración.
//   Estas claves suelen tener ciertas limitaciones, como un número 
//   limitado de solicitudes por período de tiempo o acceso restringido
//   a ciertas funcionalidades de la API. Las "demo keys" son útiles para
//   probar y familiarizarse con una API antes de obtener una 
//   clave de acceso completa. En el contexto del curso, 
//   se menciona la necesidad de obtener una "API Key" 
//   para poder seguir realizando solicitudes a la API de la NASA.  
// DIRECCION URL CON DEMO_KEY TIENE UN NUMERO LIMITADO PARA USARLA
//   const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5" <= DEMO_KEY
//
//                                                       //DESPUES DE API_KEY= SE GENERA EN LA PAGINA NASA API LA KEY SI MARCA UN ERROR LA DEMO_KEY  
const url = "https://api.nasa.gov/planetary/apod?api_key=3jEskoFoPENxdXpz9XOPBcReP3um69Fd3FbO6ALh&count=15" //count=15 es el limite de elementos que se van a traer 

//DIFERENCIA ASYNC, AWAIT Y THEN, CATCH
// async/await permite escribir código asíncrono como si fuera síncrono, 
// lo que mejora la legibilidad, mientras que then/catch conduce a una cascada 
// de promesas, que puede volverse difícil de manejar a medida que el código crece.

//           ASYNC Y AWAIT
//Este código es una función llamada listaImagenes que utiliza la palabra clave async para indicar que es una función asíncrona. 
//Dentro de la función, se utiliza la palabra clave await para esperar a que la solicitud fetch a la URL se complete
// y se obtengan los datos en formato JSON.
//
//Después de obtener los datos, se selecciona un elemento del documento con el atributo [data-ul] y se itera sobre cada elemento
//del arreglo datosImagenes utilizando el método forEach. Por cada elemento, se crea un contenido HTML que representa una
// tarjeta de imagen con el título y la URL de la imagen, y este contenido se agrega al HTML de la página.
//
//Si ocurre algún error durante el proceso, se captura con la palabra clave catch y se muestra en la consola.

async function listaImagenes() {
    // TRY: HACER LA SOLICITUD.
    //El bloque try se utiliza en conjunción con catch para manejar errores en JavaScript. 
    //Dentro del bloque try, se coloca el código que se espera que pueda generar un error. 
    //Si se produce un error en ese bloque, el control se transfiere al bloque catch, 
    //donde se puede manejar el error de manera adecuada. Esto es útil para prevenir 
    //que los errores detengan por completo la ejecución del programa y para poder manejarlos de manera controlada.
    //

    try{
        let fetchImagen = await fetch(url)
        let datosImagenes = await fetchImagen.json()

        const card = document.querySelector("[data-ul]")
        
                     //forEach: quiere decir para cada elemento del arreglo has alguna cosa, ejecuta el codigo que se escribio a continuacion. 
        datosImagenes.forEach(elemento => {
            const contenido = ` <li class="card">
                                     <img class="card__image" src="${elemento.url}" alt="imagen">
                                     <h3 class="card__title">${elemento.title}</h3>
                                </li> `
                                card.innerHTML = card.innerHTML + contenido

        })     
    } 
    // CATCH: SI HAY UN ERROR, EJECUTAR EL CATCH.
    catch(error){
        console.log(error)
    }
}

listaImagenes()



//           THEN Y CATCH
//Este código es una función llamada listaImagenes que utiliza la función fetch para hacer una solicitud
// a una URL y obtener datos de imágenes. Después de obtener la respuesta, se convierte en formato JSON y se procesa.
//
//La función fetch devuelve una promesa, por lo que usamos el método then para manejar la respuesta. 
//Luego, dentro del primer then, se procesan los datos de las imágenes obtenidos y se realiza una acción con ellos.
//
//Dentro de la función forEach, que itera sobre cada elemento del arreglo datosImagenes, 
//se crea un contenido HTML que representa una tarjeta de imagen con el título y la URL de la imagen.
//Este contenido se agrega al HTML de la página.
//
//Finalmente, si ocurre algún error en el proceso, se captura con el método catch y se muestra en la consola.
//
/*
function listaImagenes(){
    fetch(url)
    .then(response => response.json())
    .then(datosImagenes => {
        console.log(datosImagenes)

        const card = document.querySelector("[data-ul]")
        
                     //forEach: quiere decir para cada elemento del arreglo has alguna cosa, ejecuta el codigo que se escribio a continuacion. 
        datosImagenes.forEach(elemento => {
            const contenido = ` <li class="card">
                                     <img class="card__image" src="${elemento.url}" alt="imagen">
                                     <h3 class="card__title">${elemento.title}</h3>
                                </li> `
                                card.innerHTML = card.innerHTML + contenido

        })     
    })
    .catch(error => console.log(error))    
}

listaImagenes()
*/
