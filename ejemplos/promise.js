//      REJECT:  
//Cuando hablamos de una promesa en JavaScript, el método reject se utiliza para 
//indicar que la promesa ha sido rechazada, es decir, 
//que ha ocurrido un error en la operación que se estaba realizando.
//
//Imagina que estás esperando un paquete por correo. Si el paquete llega 
//en mal estado o no llega en absoluto, puedes "rechazar" el paquete. 
//En el contexto de una promesa, 
//el método reject es como decir "¡Algo salió mal con la entrega del paquete!".
const solicitud = new Promise((resolve, reject) => {
	const response = "resolvsse"; // <== Este es el error, no esta bien escrita la palabra resolve.

    if(response == "resolve" ){
        resolve("La promesa se cumplió");
    }
    else {
        reject("La promesa no se cumplio");
    }

});

console.log(solicitud);



//      FULLFILLED:
// Cuando hablamos de una promesa en JavaScript, el estado "fulfilled" (cumplido) 
// significa que la operación que se estaba realizando se completó con éxito.
//
//Imagina que pides una pizza a domicilio. Cuando la pizza llega a 
//tu puerta en perfectas condiciones y lista para comer, 
//puedes decir que tu deseo de tener una pizza ha sido "cumplido". 
//En el contexto de una promesa, el estado "fulfilled" 
//es como decir "¡Mi deseo se ha cumplido, la pizza está aquí y lista para disfrutar!".
const solicitudFull = new Promise((resolve, reject) => {
	const response = "resolve"; // <== Es correcto

    if(response == "resolve" ){
        resolve("La promesa se cumplió");
    }
    else {
        reject("La promesa no se cumplio");
    }

});

console.log(solicitudFull);




//         PENDING:
//cuando hablamos de una promesa en JavaScript,
//el estado "pending" (pendiente) significa 
//que la operación asociada a la promesa 
//aún no se ha completado ni ha sido rechazada.
//
//Imagina que has pedido un deseo a una estrella fugaz, 
//pero aún no sabes si se cumplirá o no. En este caso, 
//tu deseo está "pendiente" de ser cumplido. 
//En el contexto de una promesa, el estado "pending"
//es como decir "¡Aún no sabemos si se cumplirá o no, 
//estamos esperando a ver qué sucede!".
const solicitudPending = new Promise((resolve, reject) => {
	const response = "resolve";

    if(response == "resolve" ){
                                 // <== Este es el pendiente, resolve no es llamado
    }
    else {
        reject("La promesa no se cumplio");
    }

})

console.log(solicitudPending);