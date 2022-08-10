const lista = [{
    nombre: "ender 3 ProV2",
    precio: "52000"
},
{
    nombre: "ender 2 Pro",
    precio: "35000"
},
{
    nombre: "cr10 V2 Pro",
    precio: "75000"
},
{
    nombre: "cr5 Pro",
    precio: "105000"
},
];
let producto = 0;
let subTotal=0;

console.log(lista);
const carro=[];

while (producto != "NO") {

producto = prompt("ingrese el numero del prodructo que desea agregar a la lista Si no desea agregar otro producto escriba NO");
producto = parseInt(producto);
   let total = agregaCarrito (producto);   
           
    }

    function agregaCarrito(posicion) {
    
        carro.push(lista[posicion-1]);
        subTotal += parseInt(lista[posicion-1].precio);
        
        
        console.log(subTotal);
        console.log(carro);
        alert("la suma de lo acumulado es: $"+subTotal);

        
    }


    





