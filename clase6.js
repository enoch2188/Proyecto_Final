// const listaNombre =[]
// console.log(listaNombre.length)
// let cantidad = Number(prompt('Ingrese cantidad de nombres: 2'))

// do{ 
//     let entrada = prompt('ingresar nombre:')
//     listaNombre.push(entrada.toUpperCase())
//     console.log('Listado', listaNombre)
//     console.log('tamano array: ',listaNombre.length)
// }while(listaNombre.length === cantidad)

// const nuevaLista = listaNombre.concat(['SEBA', 'Emilia', 'Sol'])
// console.log(nuevaLista.join('\n'))

// alert(nuevaLista.join('\n'))

//ejemplo2

// const nombres = ['Seba', 'Sol', 'Emilia', 'choma']
// const eliminar = (nombre) => {
//     let indice = nombres.indexOf(nombre)
//     if (indice !== -1) {
//         nombres.splice(indice, 1)
//     }
// }
// eliminar('choma')
// console.log(nombres)

//OTRO EJEMPLO CON UN PRODUCTO
// const producto1 = {id: 1, nombre: 'Arroz'}

// const productosArray = [producto1, {id: 2, nombre: 'Fideo'}, {id: 3, nombre:'Pate'}]

// productosArray.push({id: 4, nombre: 'Pasta'})

// // console.table(productosArray)

// //for(in) -> objetos
// //for(of)
// for(const producto of productosArray){
//     if(producto.id == 2){
//         producto['nombre'] = 'lentejas'
//     }
//     // console.log(producto)
// }
// console.log(productosArray)

// class producto {
//     constructor(nombre, precio){
//         this.nombre = nombre.toUpperCase()
//         this.precio = parseFloat(precio)
//         this.vendido = false
//     }
//     sumarIva(){
//         this.precio = this.precio * 1.21
//     }
// }

// const productos = []

// productos.push(new producto('arros', '125'))
// productos.push(new producto('fideos', '233'))
// productos.push(new producto('harina', '155'))

// console.log(productos)

// for(const product of productos ){
//     product.sumarIva()
// }

// console.log(productos)