// Acumulador de compra
let totalCompra = 0;

class Vestido {

    // Las propiedades y metodos pasan a el constructor
    constructor(id, nombre, cantidad, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;

        //Validación que verifica si se tiene suficiente inventario para la compra deseada
        this.verificarInventario = (cantidaddeseada) => {
            if(cantidaddeseada>this.cantidad){
                alert("Lamentamos el inconveniente\nNo tenemos inventario suficiente");
                return false;
            }
            else
                return true;
        }

        //Al realizar la compra del producto, se saca de inventario la cantidad de prendas compradas
        this.sacarDeInventario = (cantidad) => {
            this.cantidad = this.cantidad-cantidad;
        }

    }
}

// Inventario mediante arreglo de objetos
let vestidos = [];
vestidos.push(new Vestido(1,"Vestido Nite White", 6, 89.99));
vestidos.push(new Vestido(2,"Vestido Pink Flower", 5, 24.99));
vestidos.push(new Vestido(3,"Vestido Blue Desire", 2, 39.99));
vestidos.push(new Vestido(4,"Blusa Vermilion Spring", 1, 12.99));
vestidos.push(new Vestido(5,"Falda Young Lime", 1, 9.99));


//Verifica que se ingrese una opción valida en el menú
let validarMenu = (opcion) => {
    if(!Number(opcion)){
        alert("Ingresa solo numeros");
        return false;
    }
    else
    {
        if(parseInt(opcion)<0 || parseInt(opcion)>(vestidos.length+1)){
            alert("Opción Fuera de rango");
            return false;
        }
        else{
            return true;
        }
    }
}

// Funcion que permite la compra del producto seleccionado en el menú de inicio
let comprarProductos = (opcion) => {
    let cantidadcompra = 0;

    cantidadcompra=prompt("Ingresa la cantidad de vestidos que deseas comprar");
    // Verifica que la cantidad ingresada sea un número
    if(Number(cantidadcompra)){
        cantidadcompra = parseFloat(cantidadcompra);
        if(vestidos[opcion-1].verificarInventario(cantidadcompra))
        {
            vestidos[opcion-1].sacarDeInventario(cantidadcompra);
            totalCompra = totalCompra + (cantidadcompra*vestidos[opcion-1].precio);
            alert(`Se agregaron ${cantidadcompra} prendas a tu carrito.\nTu cuenta asiende a: $${totalCompra}`);
        }
    }
    else{
        alert("Ingresa una cantidad valida");
    }
}

//Funcion principal donde se selecciona la prenda que se desea comprar
let menu = () => {
    let opcionmenu, resultadovalidacion, menuarmado="Selecciona los productos desde el siguiente menú";
    alert("Bienvenid@ a la tienda de ropa Moda Katy");

    do{        
        //Armado de menú mostrado en prompt
        for(const vestido of vestidos){
            menuarmado = `${menuarmado}
            ${vestido.id}) ${vestido.nombre} (Stock: ${vestido.cantidad})`
        }
        menuarmado=`${menuarmado}
            ${vestidos.length+1}) Salir`
        opcionmenu = prompt(`${menuarmado}`);

        resultadovalidacion = validarMenu(opcionmenu);
        console.log(resultadovalidacion);
        if(resultadovalidacion && opcionmenu!=(vestidos.length+1))
        {
            comprarProductos(parseInt(opcionmenu));
            menuarmado="Selecciona los productos desde el siguiente menú"
        }
    }while(opcionmenu!=(vestidos.length+1));
    alert(`Gracias por comprar en Moda Katy\nEl total de tu compra es de: $${totalCompra}\nVuelva Pronto`);
}
//Llamada de función principal
menu();