// Inventario
let cantidadvestido1=6;
let cantidadvestido2=5;
let cantidadvestido3=2;
let cantidadvestido4=1;
let cantidadvestido5=1;

// Precio
const PRECIOVESTIDO1=89.99;
const PRECIOVESTIDO2=24.99;
const PRECIOVESTIDO3=39.99;
const PRECIOVESTIDO4=12.99;
const PRECIOVESTIDO5=9.99;

// Acumulador de compra
let totalCompra = 0;

//Verifica que se ingrese una opción valida en el menú
let validarMenu = (opcion) => {
    if(!Number(opcion)){
        alert("Ingresa solo numeros");
        return false;
    }
    else
    {
        if(parseInt(opcion)<0 || parseInt(opcion)>6){
            alert("Opción Fuera de rango");
            return false;
        }
        else{
            return true;
        }
    }
}

//Validación que verifica si se tiene suficiente inventario para la compra deseada
let verificarInventario = (cantidaddeseada, stock) => {
    if(cantidaddeseada>stock){
        alert("Lamentamos el inconveniente\nNo tenemos inventario suficiente");
        return false;
    }
    else
        return true;
}

//Al realizar la compra del producto, se saca de inventario la cantidad de prendas compradas
let sacarDeInventario = (opcion, cantidad) => {
    switch(opcion){
        case 1: cantidadvestido1 = cantidadvestido1 - cantidad;
                break;
        case 2: cantidadvestido2 = cantidadvestido2 - cantidad;
                break;
        case 3: cantidadvestido3 = cantidadvestido3 - cantidad;
                break;
        case 4: cantidadvestido4 = cantidadvestido4 - cantidad;
                break;
        case 5: cantidadvestido5 = cantidadvestido5 - cantidad;
                break;
    }
}

// Funcion que permite la compra del producto seleccionado en el menú de inicio
let comprarProductos = (opcion) => {
    let inventariovestido=0, precio=0, cantidadcompra = 0;
    switch(opcion){
        case 1: inventariovestido = cantidadvestido1;
                precio = PRECIOVESTIDO1;
                break;
        case 2: inventariovestido = cantidadvestido2;
                precio = PRECIOVESTIDO2;
                break;
        case 3: inventariovestido = cantidadvestido3;
                precio = PRECIOVESTIDO3;
                break;                
        case 4: inventariovestido = cantidadvestido4;
                precio = PRECIOVESTIDO4;
                break;
        case 5: inventariovestido = cantidadvestido5;
                precio = PRECIOVESTIDO5;
                break;
        default: return 0;
    }
    cantidadcompra=prompt("Ingresa la cantidad de vestidos que deseas comprar");
    if(Number(cantidadcompra)){
        cantidadcompra = parseFloat(cantidadcompra);
        if(verificarInventario(cantidadcompra, inventariovestido))
        {
            sacarDeInventario(opcion, cantidadcompra);
            totalCompra = totalCompra + (cantidadcompra*precio);
            alert(`Se agregaron ${cantidadcompra} prendas a tu carrito.\nTu cuenta asiende a: $${totalCompra}`);
        }
    }
    else{
        alert("Ingresa una cantidad valida");
    }
}

//Funcion principal donde se selecciona la prenda que se desea comprar
let menu = () => {
    let opcionmenu, resultadovalidacion;
    alert("Bienvenid@ a la tienda de ropa Moda Katy");
    do{        
        opcionmenu = prompt(`Selecciona los productos desde el siguiente menú
        1) Vestido Nite White (Stock: ${cantidadvestido1})
        2) Vestido Pink Flower (Stock: ${cantidadvestido2})
        3) Vestido Blue Desire (Stock: ${cantidadvestido3})
        4) Blusa Vermilion Spring (Stock: ${cantidadvestido4})
        5) Falda Young Lime (Stock: ${cantidadvestido5})
        6) Finalizar Compra`);
        resultadovalidacion = validarMenu(opcionmenu);
        console.log(resultadovalidacion);
        if(resultadovalidacion)
        {
            comprarProductos(parseInt(opcionmenu));
        }
    }while(opcionmenu!=6);
    alert(`Gracias por comprar en Moda Katy\nEl total de tu compra es de: $${totalCompra}\nVuelva Pronto`);
}
//Llamada de función principal
menu();