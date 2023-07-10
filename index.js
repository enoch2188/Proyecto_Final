// // console.log('Soy el mejor')


// // // palabras reservadas -- Sintaxis
// // // var - const - break - instanceof - typeof - if - case 
// // // catch - continue - default - let - delete - do - else - finally
// // //  for  - functoin - if - in - inew - return - switch - this
// // //  throw - try - void - while - with - etc etc etc

// // // Variables y Valores - caja para guardar tipo de datos (string)
// // // para poder crear una caja yo tengo que utilizar ciertas palabras reservadas
// // // por ejemplo...
// // // var   nombre   = 'Sebastian'
// // // var es para crear la caja, = es para guardar el valor que yo quiera
// // // en este caso, un string.
// // // let   apellido = 'Perotti'
// // // const CURSO    = "Javascript"
// // // const curso    = 'No es java'

// // // Declaracion
// // // let apellido
// // // var nombre
// // // const curso

// // // var nombre_apellido
// // // var nombreApellidoAnio  // camel case    
// // // var NombreApellidoAnio   // pascal case
// // // // var nombre y apelllido (incorrecto)
// // // var anio

// // // Asignacion
// // // let edad = 30
// // // Inicializando variables
// // // const edad1 = 30

// // // Reasignar
// // // edad = 35
// // // edad1 = 40

// // // no usemos variables creadas con var
// // // porque no

// // //  let numero    = 1
// // //  let numero2   = 2
// // //  const NUMERO3 = 3

// // //  let resultado      = numero + numero2 // es 1+2
// // //  let resultadoResta = numero - numero2 // es 1-2
// // //  let multiplicacion = numero * NUMERO3 // es 1*3


// // // //  operaciones basicas con string
// // // let texto1   = 'Seba'
// // // let texto2   = 'Perotti'
// // // const texto3 = ' '

// // // let resultadoSuma = texto1 + texto2
// // // let resultadoSuma1 = texto1 + 1
// // // let resultadoSuma2 = texto1 + texto3 + texto2

// // // console.log(resultadoSuma2)

// // // prompt
// // // let nombreIngresadoPrompt = prompt('ingresar nombre, apura')
// // // console.log(nombreIngresadoPrompt)

// // // alert
// // // alert('Bienvenido a esta pagina')

// // // ejemplo
// // // let entrada = prompt('Ingrese un Nombre: ')
// // // let salida  = 'El nombre ingresasdo es: ' + entrada
// // // console.log(salida)
// // // alert(salida)


// // let entrada = prompt('Quien fue el mejor numero 10?: ')
// // console.log(typeof entrada)

// // let salida  = 'El nombre ingresado es: ' + entrada

// // console.log(salida)

// // // alert(salida)






// // COMIENZO SEGUNDA CLASE 

// // var 
// // const
// // let
// // sirven para crear variables, para declarar variables, var no se usa mas porque se mpuede modificar

// // const
// let numero = 3
// let condition = true
// // operadore logicos
// // ==, ===, >, <, > =, < =, !(no), !=(NO ES IGUAL), !==(ES DISTINO), &&(and)
// // ||(or)

// console.log ('Hola Comision 54890 1')
// console.log ('Hola Comision 54890 2')

// // if estructura de control para evaluar una condicion
// // if(condicion) {Bloque}

// // es lo mismo 3 que '3' ?? es lo mismo, se puede poner entre comillas
// //no es lo mismo este igual (==)  que este igual (===)
// if(numero == '3') {
//     console.log ('Hola Comision 54890 3')
// }
// if(numero == 4) {   
//     console.log ('Hola Comision 54890 4')
// }

// let unColor = 'Verde'

// if (unColor !== 'Rojo') { 
//     alert('El color no es rojo')
// }  else {
//     console.log('El color es rojo')
// }

//aca arriba me muestra que el simbolo == significa que si es igual a...
//en el caso del 4, desautoriza y entonces no muestgra esa linea en console.log


// const nombre = 'Seba'
// const edad = 30
// const variableCondicion = false //

// if(variableCondicion){ // dato harcodeado ->
// console.log(typeof variableConst)
// }


//VARIABLES
// let edad = Number(prompt('Ingrese la edad de usuario: '))
// // console.log(18)

// let edad = 20
// let condition = edad < 18

// if (condition) {
//     alert("Es menor de edad")
// } else if(edad === 18) {
//     alert('La edad es 18')
// } else if(edad >= 18) {
//     alert('La edad es mayor a 18')
// }
// if (condition) {
// alert("Es menor de edad")
// } else {
// alert('Es mayor de edad')
// }


// let nombreIngresado  = prompt('ingresar el nombre')
// let apellidoIngresado = prompt('ingresar el apellido')

// if ( (nombreIngresado ===! "") && (apellidoIngresado ===! "") ) { ""
//     alert('Nombre: '+ nombreIngresado + ' y el apellido es: '+apellidoIngresado)
// } else {
//     alert("error : no ha ingresado nombre y apellido")
// }

// let nombreIngresado  = prompt('ingresar el nombre')
// let apellidoIngresado = prompt('ingresar el apellido')

// if ( (nombreIngresado === "Seba") || (nombreIngresado === "seba") ) { ""
//     console.log('El nombre es Seba')
// } else {
//     console.log("El nombre es Seba")
// }

// _For ________________________________________

// function name(params) { // funcion   --- dato ---algo --- realiza una accion
// }

// for( desde ; hasta ; actualizacion) {     // 8, 5, 10 (0-10) (100 - 1000) , 0,1,2,3,4,5,6,7,8,9 - 0 2 4 6 8
//    //accion
//}

//for de 0 a 9 - 10 veces una tarea

// =9, <10, <= 9

// for(let contador = 0 ; contador <= 9; contador++ ){ // cpmtadpr++. contador+=1 -- contador = contador+1
//     alert(contador)
// }

// for(let contador = 11 ; contador < 21; contador++ ){ // cpmtadpr++. contador+=1 -- contador = contador+1
//     alert(contador)
// }

// let numeroIngresado = parseInt(prompt('Ingresar un numero: ')) //parseInt integer - Number
// for (let i = 1; i <= 10 ; i++) {
//     let resultado = numeroIngresado * i
//     alert(numeroIngresado+'X'+i+'='+resultado) // '3 X 1 = 3'

// }

// for(let index=1; index <= 10; index++){ //1 2 3 4 5 6 7 8 9 10
//     if (index === 5) {
//         continue
//     }
//     alert(index)
// }

// While Mientras --> se cumple una condicion
// let repetir = false
// while (repetir) {
//     console.log('ROMAN RIQUELME')
// }

// let entrada = prompt('Ingresar algun dato: ')
// while (entrada !== 'Esc') {
//     alert('El usuario ingreso: '+ entrada)
//     entrada = prompt ('Ingresar otro dato: ')
// }

//Do While
// let contador = 0

// do{
//     console.log(contador)
//     contador+=2
// }while(contador < 10)

// let numero = 0
// do {
//     numero = prompt('Ingresar un numero ')
//     console.log(numero)
// }while(parseInt(numero)) //mientras el caracter sea un numero no hay problema

// let numero = 0
// do {
//     numero = prompt('Ingresar un numero ')
//     console.log(numero)
// }while(typeof numero === 'number') 

// }while(!isNaN(numero)) //654 a A 
// isNaN(a) --> Verdadero
// isNaN(14) --> Verdadero

// SWITCH _____________________________________________________

// let numero = 3

// if (numero === 1) {
//     console.log('es un uno')
// }

// if (numero === 2) {
//     console.log('es un dos')
// }

// if (numero === 3) {
//     console.log('es un tres')
// }

// if (numero === 4) {
//     console.log('es un cuatro')
// }




// switch (numero) {
//     case 1:
//         console.log('es un tres')

//         break;
//     case 2:
//         console.log('es un dos')

//         break;    
//     case 3:
//         console.log('es un tres')

//         break;
//     case 4:
//         console.log('es un cuatro')

//         break;
//     case 5:
//         console.log('es un cinco')

//         break;
//     case 6:
//         console.log('es un seis')

//         break;
//     case 7:
//         console.log('es un siete')

//         break;  

//     default:
//         break;
// }


// FUNCIONES__________CLASE 4_________________________________

// Se declara a trabez de la palabra reservada FUNCTION. Deben tener 
// un numbre en minuscula y sin espacion seguidos de los caracteristicos
// parentesis (). El contenido de la funcion se escribe
// entre las llaves. El nombre de la fucnio no se puede repetir en otra. 

// function saludar() {
//     // instruccion
//     console.log('Hola esto es un saludo')
//     console.log('Hola esto es un saludo')
//     console.log('Hola esto es un saludo')
//     console.log('Hola esto es un saludo')
// }

// saludar()
// saludar()
// saludar()
// saludar()

// ejemplo de funcion

// let nombreIngresado = prompt('Ingresar nombre')
// console.log('El nombre ingresado es '+ nombreIngresado)
// let nombreIngresado = prompt('Ingresar nombre')
// console.log('El nombre ingresado es '+ nombreIngresado)

// function ingresarNombre() {
//     let nombreIngresado = prompt('Ingresar nombre: ')
//     console.log('El nombre ingresado es '+ nombreIngresado)
// }

// ingresarNombre()
// ingresarNombre()
// ingresarNombre()
// esto hace que se repita la linea de codigo de arriba

// let numero = 0

// while (numero < 2) {
//     ingresarNombre()
//     numero ++
// }


// PARAMETROS ____________________________________________
// let nombreIngresado = prompt('Ingresar Nombre: ')
// let apellidoIngresado = prompt('Ingresar Apellido: ')
// function saludar(nombre, apellido, edad) {
//     console.log('Bienvenido sr/a: ' + nombre + ' ' + apellido +  'y su edad es: '+ edad)
// }

// // saludar(nombreIngresado, apellidoIngresado)
// saludar('seba', 'perotti', 35)

// let resultado = 0

// function sumar(numero1, numero2) {
//     console.log(numero1)
//     console.log(numero2)    
//     resultado = numero1 + numero2
//     mostrarResultado(resultado)
// }

// function mostrarResultado(resultadoParam) {
//     console.log('El resultado es', resultadoParam);
// }

// sumar(3, 10)  //esto se llama argumento
// mostrarResultado(resultado)  // Esto se puede invocar en cualquier momento


// let resultado = 0

// function mostrarResultado(resultadoParam) {
//     console.log('El resultado es', resultadoParam);
// }

// function sumar(numero1, numero2) {
//     console.log(numero1)
//     console.log(numero2)    
//     // resultado = numero1 + numero2
//     return numero1 + numero2
// }

// // resultado = sumar(3, 10)  //esto se llama argumento

// mostrarResultado(sumar(3, 10))  // Esto se puede invocar en cualquier momento


// CALCULADORA___________________________________________________
// CON FUNCIONES + SWITCH_______________________________________

// function calculadora(numero1, numero2, operacion){
//     switch (operacion) {
//         case '+':
//             return numero1 + numero2
//             break
//         case '-':
//             return numero1 - numero2
//             break
//         case '*':
//             return numero1 * numero2
//             break
//         case '/':
//             if (numero2 === 0 ) {
//                 return 'no se puede divir por cero'
//             }
//             return numero1 / numero2
//             break
//             default:
//                 return 'Debe definir una operacion correcta + - * /'
//             break
//     }
// }

// let resultado = calculadora(10, 3, '+')
// console.log(resultado)

// console.log(calculadora(10, 3,'x'))

//scope - Rango - alcance o ambito variables y funciones tienen un scope
//un ambito de ejecucion

// let resultado = 0 

// function sumar(parametro1, parametro2) { //ambito, alcance, un scope
//     let resultado = 0
//     resultado = parametro1 + parametro2
//     console.log(resultado)   
//     if (true) {
//         let resultado = 1
//         console.log(resultado)
//     } 

// }

// sumar(5, 9)

// console.log(resultado)

// SIMULADOR_________________________________________________

// const calcularIva =valorProducto => valorProducto * 0.21

// const calcularValorProducto = valor => {
//     console.log(valor)
//     return valor = calcularIva(valor)
// }

// console.log(calcularValorProducto(100))

// CLASE 5 OBJETOS---------------------------------------------------------

// let nombre   = "Juan"
// // let apellido = 'Dotti'
// let edad 35

// const persona = {  //objeto Literal (donde yo ingreso los datos que tiene y pongo una llave, puede ser vacio tmb...)
//     nombre: 'Homero',
//     apellido: 'Simpson',
//     edad: 35,
//     email: 'homero@hotmail.com',
//     esMayorEdad: true,
//     calle: 'av siempreviva 742'
// }

// console.log(persona.nombre, persona.apellido)
// console.log(persona)

// console.log(persona['nombre'], persona['email'])

//ASIGNANDO NUEVO NOMBRE Y EDAD
// persona['nombre'] = 'Marge'
// persona.edad = 36

// console.log(persona.nombre, persona.edad)

//NO SE PUEDE
//persona = 'SEBA'

// persona.phone = '21212121212'

// const persona2 = {
//     nombre: 'Seba',
//     apellido: 'Perotti',
//     edad: 35,
//     email: 'Sebaperotti@hotmail.com',
//     esMayorEdad: true,
//     calle: 'av tuieja'
// }

// console.log(persona2)

// //FUNCIONES CONSTRUCTORAS (son funciones que comienzan con mayuscula)

// function Persona(nombre, apellido, edad){
//     this.nombre   = nombre
//     this.edad     = edad
//     this.apellido = apellido
// }




// class Persona {
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//         }
//         hablar() {
//             console.log('hola soy' + this.nombre)
//         }
//         getFullName(){
//             return this.nombre + ' ' + this.apellido
//         }
//     }

// const persona1 = new Persona('Seba', 'Perotti', 35)    
// persona1.hablar()

// console.log(persona1.hablar())

//Ejemplo

// class Producto {
//     Constructor(nombre, precio){
//         this.nombre  = nombre
//         this.precio  = parseFloat(precio)
//         this.vendido = false
//         //this.isStock = true
//         // this.active = true
//         // this.cantidadStock
//     }
//     sumarIva(){
//         this.precio = this.precio * 1.21
//     }
//     vender(){
//         this.vendido = true
//     }
// }

// const producto1 = new Producto('arroz', 125)
// const producto2 = new Producto('Fideo', '50')

// producto2.sumarIva()
// producto2.vender()

// console.log(producto2)

// //ingresar datos del producto prompt
// function calcularPrecioVenta(precioProducto) {
//     return precioProducto * 1.21 + 10
// }

//CLASE 6 ARRAYS

//QUE ES UN ARRAY, UN ARRAY ES UN TIPO DE DATO QUE SIRVE PARA ALMACENAR VALORES
//EN FORMA DE LISTA. pUEDE SER UNA COLECCION DE NUMEROS, STRINGS
//BOOLEANOS,, OBJETOS O HASTA UNA LISTA DE LISTAS
//Un arrays es como un conjunto de cajitas, un tren de cajitas,
//es un tipo de dato, y tambien va a tener un nombre

// const arrayA = [1, 2, ]  //posicion 0 y 1 seria,tamano 2
// const arrayA = [1, 2, 'C3', 'Fede']
// const arrayA = [1, 2, 'C3', 'fede'] // - y 3 tamano del array

//tamano del array --> ultima posicion + 1
//tamano = 6 entonces la ultima posicion es tamano - 1
// const arrayA = [true, 2, 'C3', {nombre: 'Seba'}] // 0 y 3 tamano
// const numeros = [1,2,'3',4,'Seba', true, 6, 123, 6]

// obj. nombre -> obj['nombre']
// console.log(numeros[2]+numeros[4])
// console.log(numeros[3])/
// console.log(numeros[4]) //undefinid va a dar como resultado, porque no hay posicion 4

// for(let index=0; index < 6; index++){     //numero[0], numero[2], despues en la 3 despues en la 4 y despues en la poscion el indice 5
    // alert(numeros[index])
// }

//metodos

//length

// const miArray = ['Fede', 1, 10]

// console.log(miArray.length)
// console.log(miArray[ miArray.length - 1 ])



// for(let index=0; index < numeros.legth ; index++){     //numero[0], numero[2], despues en la 3 despues en la 4 y despues en la poscion el indice 5
        // console.log(numeros[index])
// }

//console.log(numeros)
// console.dir(numeros)

// const numeros = [1,2,'3',4,'Seba', true, 6, 123, 6]

// numeros.push(3) //agrega al ultimo lugar con push
// numeros.unshift('ultimo agregado')  //agrega al principio con unshift
// console.table(numeros)

//eliminar items, ultimo y primero

// numeros.shift()
// numeros.pop() //saca el ultimo con .pop

// numeros.splice(2, 3)
// console.log(numeros)

//join

// console.log(numeros.join(' - '))
// console.log(numeros.join(' - '))

// concat
// const nombres = ['Seba', 'Emilia', 'Sol']

// const arrayConcat = numeros.concat(nombres)
// console.log(arrayConcat)


//SLICE
//LO QUE HACE SLICE, ES COPIAR DESDE, HASTA... Y NO MODIFICA EL ARRAY ORIGINAL
// const numeros = [1,2,'3',4,'Seba', true, 6, 123, 6]
// const copiaNumerosParcial = numeros.slice(2, 6)
// console.log(numeros)
// console.log(copiaNumerosParcial)

//indexOf

// console.log(numeros.indexOf('Sol'))
// console.log(numeros.indexOf('Seba'))
// console.log(numeros.indexOf(56))
// console.log(numeros.indexOf(6))

//Includes
//es muy parecido a un indexOf pero no nos devuelve una posicion

// console.log(numeros.indexOf('Sol'))
// console.log(numeros.indexOf('Seba'))
// console.log(numeros.indexOf(56))
// console.log(numeros.indexOf(6))// numeros.reverse()
// console.log(numeros)





// CLASE 7______________________________________________________________________

// let total = 0 
// for (desde; desde <= hasta; desde++) {
//     total += desde
// }
// let total = 0 
// for(let i = 1; i <= 20; i++) {
//     total
// }

// function sumaRango(desde, hasta){
//     let total = 0
//     for (desde; desde <= hasta; desde++){
//         total += desde
//     }
//     return total
// }

// console.log(sumaRango(1, 10))   // 55
// console.log(sumaRango(1, 20))   // 55

//FUNCIONES DE ORDEN SUPERIOR

// 1- RETUNR Func()
// 2- Function(fm){}

// function mayorQue(n){
//     return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)  // 10 -> (m) => m > 10

// console.log(mayorQueDiez(9))
// console.log(mayorQueDiez(10))
// console.log(mayorQueDiez(11))


// function asignarOperacion(operacion) {
//     if (operacion === 'sumar') {
//         return function(numero1, numero2){return numero1+numero2}
//     } else if(operacion === 'restar') {
//         return (numero1, numero2) => numero1 - numero2
//     }
// }

//  let sumar = asignarOperacion('sumar')
// let restar = asignarOperacion('restar')

// console.log(sumar(4, 6))
// console.log(restar(4, 6))

//EJEMLOS DE 2 FUNCIONES PASADAS POR PARAMETROS
// let total = 0

// function porCadaUno(arr, fn) {  //callback
//     for(const elemento of arr){
//         fn(elemento)
//     }
// }
// const numeros = [ 0, 1, 2, 3, 4]

// function acumular(num){
//     total += num
// }

// porCadaUno(numeros, acumular)

// console.log(total)

//OTRO EJEMPLO ___________________________________________________________
// let total = 0

// function porCadaUno(arr, fn) {  //callback
//     for(const elemento of arr){
//         fn(elemento)
//     }
// }
// const numeros = [ 0, 1, 2, 3, 4]

// const duplicado = []

// porCadaUno( numeros, (elemento) => {
//     duplicado.push(elemento *2)
// })

// console.log(duplicado)


// _______________________________________________________________


// FOREACH
// let numeros = [0, 1, 2, 3, 4, 5]
// let funcion = (num) => {
    // console.log(num)
// }

// numeros.forEach((num) => {
//     console.log(num)
// })

// FIND

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJs', precio: 22000},
//     {nombre: 'AngularJs', precio: 22000},
//     {nombre: 'Desarrollo web', precio: 16000}
// ]

// let resultado  = cursos.find((cursoObject) => cursoObject.nombre == 'Javascript')
// let resultado1 = cursos.find((cursoObject) => cursoObject.nombre == 'Java')
// let resultado2 = cursos.find((cursoObject) => cursoObject.nombre == 'ReactJs')
// let resultado3 = cursos.find((cursoObject) => cursoObject.nombre == 'Desarrollo web')

// console.log(resultado)
// console.log(resultado2)
// console.log(resultado1)
// console.log(resultado3)


// FILTER_______________________________________________________


// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJs', precio: 22000},
//     {nombre: 'AngularJs', precio: 22000},
//     {nombre: 'Desarrollo web', precio: 22000}
// ]

// let resultado  = cursos.filter((cursoObject) => cursoObject.precio == '22000')
// let resultado1  = cursos.filter((cursoObject) => cursoObject.nombre.includes('js'))
// console.log(resultado)

// SOME_____________________________________________________________________

// let resultado  = cursos.some((cursoObject) => cursoObject.nombre == 'Javascript')
// let resultado1 = cursos.some((cursoObject) => cursoObject.nombre == 'Java')

// console.log(resultado, resultado1)

// // MAP   <--- NUEVO ARRAY A PARTIR DE UN ARRAY BASE ['javascript', 'ReactJs', 'AngularJs']

// const nombres = cursos.map(curso => curso.nombre)
// const preciosCalculados = cursos.map(curso => ({ nombre: curso.nombre.toLocaleUpperCase(), precio: curso.precio * 1.21}))


// console.log(preciosCalculados)

//REDUCE (EL REDUCE DEVUELVE UN VALOR)_____________________________________________________
// const numeros =[0, 1, 2, 3, 4, 5]
// let total = 0
// const total = numero.reduce( (total, elemento)=> total += elemento , 0)
// console.log(total)


// ___________________________________________________________________________________________________________________________-


// SORT (EL METODO SORT NOS PERMITE ORDENAR EL ARRAY SEGUN UN CRITERIO QUE DEFINAMOS. RECIBE UNA FUNCION DE COMPARACION POR PARAMETRO QUE, A LA VEZ, RECIBE DOS ELEMENTOS DEL ARRAY. LA FUNCION RETORNA UN VALOR NUMERICO(1, -1, 0) QUE INDICA QUE ELEMENTO SE POSICIONA ANTES O DESPUES.)

// const numeros =[23, 32, 57, 72]

// // numeros.sort((numero1, numero2) => numero1-numero2) //en forma ascendente
// numeros.sort((numero1, numero2) => numero2-numero1) //en forma descendente
// console.log(numeros)



// cursos.sort((a, b)=>{
//     if(a.nombre > b.nombre){
//         return 1
//     }
//     if(a.nombre > b.nombre){
//         return -1
//     }
// })

// cursos.sort((a, b)=>{
//     if(a.nombre > b.nombre){
//         return -1
//     }
//     if(a.nombre > b.nombre){
//         return 1
//     }
// })
// console.log(cursos)

// const productos = [
//         {id: 1, producto: 'Fideo', precio: 15000},
//         {id: 2, producto: 'Arroz', precio: 22000},
//         {id: 3, producto: 'Pan', precio: 12000},
//         {id: 4, producto: 'flan', precio: 52000}
// ]

// const buscado = productos.find(producto => producto.id == 3) //3 ingresado por prompt
// const exist   = productos.some(prod => prod.nombre == 'Harina')
// const baratos = productos.filter(producto => producto.precio < 20000)
// const listaProductosNombres = productos.map(prod => prod.producto)

// console.log(buscado)
// console.log(exist)
// console.log(baratos)
// console.log(listaProductosNombres)



// MATH_________________________________________________________________________________

// console.log('index.js') 

// console.log(Math.E)
// console.log(Math.PI) 

// console.log(math.max(55, Infinity, 13, -25, 93, 4))
// console.log(math.max(55,13, -25, 93, -Infinity, 4))

//CEIL FLOOR ROUND_____________________________________________________________________

// const pi = Math.PI
// const pi = 3.61

// console.log(pi)
// console.log(Math.ceil(pi))
// console.log(Math.floor(pi))
// console.log(Math.round(pi))

// //SQUARE ROOT
// console.log(Math.sqrt(9))
// console.log(Math.sqrt(2))
// console.log(Math.sqrt(1))
// console.log(Math.sqrt(1-1))

//RANDOMS 0 => nro > 1______________________________________________________________
// console.log(Math.random())
// console.log(Math.random())
// console.log(Math.random())

// console.log(Math.random() * 10
// // 0 => nro > 50
// console.log(Math.random() * 50
// // 20 => 
// console.log(Math.random() * 30 + 20)

//Entre 1 y 10
// console.log(Math.random() * 10)
//floor redonde hacia abajo
console.log(Math.floor(Math.random() * 10 + 1))
//redonde hacia arriba
console.log(Math.ceil(Math.random() * 10 + 1))
// Math.floor(Math.random*10)
// Math.ceil()

