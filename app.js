let productos = prompt("Ingrese la cantidad de productos");

let cantidadProductos = parseInt(productos);

if (cantidadProductos > 0) {

  costoEnvio(cantidadProductos);

  function costoEnvio(cantidad) {
    
    let valorEnvio1 = 450;
    let valorEnvio2 = 650;
    let total=0;
    for (let i = 1; i <= cantidad; i++) {
      let alto = parseInt(prompt("Ingrese Alto del paquete N°"+i+": "));
      let ancho = parseInt(prompt("Ingrese Ancho del paquete N°"+i+": "));
      let largo = parseInt(prompt("Ingrese largo del paquete N°"+i+": "));


      if ((alto * ancho * largo) <= 6000) {

        total = total + valorEnvio1;

      } else if ((alto * ancho * largo) > 6000) {
        total = total + valorEnvio2;

      }
      
    }
    alert("El Costo de envio por todos los productos es: $" + total);


  }



} else {
  alert("Ingrese al menos un producto")
}

