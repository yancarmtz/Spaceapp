function uno(dos) {
    console.log("uno");
    setTimeout(dos, 2000); // <= 2000 = 2 segundos
}

function dos (tres) {
    console.log("dos");
    setTimeout(tres, 2000);
}

function tres (cuatro) {
    console.log("tres");
    setTimeout(cuatro, 2000);
}

function cuatro (cinco) {
    console.log("cuatro");
    setTimeout(cinco, 2000);
}



//FUNCION ASINCRONA:
//En JavaScript, la ejecución asíncrona se refiere a la capacidad de una función
//para esperar a que algo ocurra sin detener el proyecto completo. Esto significa
//que el código puede continuar ejecutándose mientras se espera que cierta 
//operación asíncrona se complete.
//
//Un ejemplo común de ejecución asíncrona en JavaScript es cuando se realizan 
//solicitudes a una API o se ejecutan operaciones que pueden tomar un tiempo 
//variable, como la lectura de archivos o la ejecución de funciones que 
//requieren un cierto tiempo para completarse.
//
//FUNCION CALLBACK (ASINCRONA):
//Los callbacks son una forma de manejar la ejecución asíncrona en 
//JavaScript, permitiendo que una función sea ejecutada después de que cierta
//operación asíncrona haya finalizado. Esto es fundamental para crear 
//aplicaciones web dinámicas y eficientes.
//
//        uno con parentesis se ejecuta inmediatamente.
setTimeout(() => uno(dos), 5000); // La funcion uno llama a su vez a la funcion dos
//                         5 segundos es decir 5000.
//
//*********************************************************************************** */
//callback hell - anidamiento de funciones su codigo es dificil de entender
//setTimeout(() => uno(
//    () => dos(
//        () => tres(
//            () => cuatro(
//                () => cinco(),)))), 3000);
//************************************************************************************** */

//El dos con parentesis se ejecuta primero que el setTimeout(uno, 5000)
//dos();
//
//FUNCION ANONIMA:
const nombre = function () {
    console.log("nombre");
}

nombre();

//ARROW FUNCTIONS () => {}
//              () => Las funciones de flecha, también conocidas 
//                    como arrow functions, son una forma más concisa de 
//                    escribir funciones en JavaScript. Utilizan 
//                    la sintaxis () => {} y son especialmente
//                    útiles cuando se necesita una función 
//                    anónima. Por ejemplo, una función de 
//                    flecha que recibe un parámetro y devuelve 
//                    el doble de ese parámetro se vería así: (x) => { return x * 2; }.      
const persona = () => console.log("Carlos");

persona();

//ARROW FUNCTIONS () => {}
() => console.log();
