let num1=1
let num2=2.0
let cadena="hola"

console.log(num1)
console.log(num2)
console.log(cadena)

console.log("hola")

const txt1 = new String ("hola a todos")//objeto
console.log(txt1)

console.log('1.2.3.4.5'.split('.'))

console.log(txt1.split(' '))

console.log(txt1.length)

console.log(txt1.charAt(5))

//arreglos objetos

var animales=['tigre','ballena','lobo','aguila']
console.log(animales.length)

console.log(animales.pop()) //elimiNA A la ultima 
console.log(animales)

console.log(animales.push('perro'))//añadir

var numeros=[11,10,5,4,12]

console.log(numeros.reverse)// regresa el arrglo de forma invertida


var juntar=numeros.join(); //convierte a variable
console.log(juntar)

let anio=[1995,1999,2024,2020]

function encontrar(item){

    return item>=2000
}
console.log(anio.find(encontrar))

console.log(anio.some(encontrar))

var vestimenta=['camisa','gorra','pantalon']

function mifuncion(item,index){
    console.log(index+":"+item)
}

vestimenta.forEach//recorre objetos

let array= Array.from("1A2B3C4D")

console.log(array)//devuelve un arreglo

let num=[32,33,15,40]
mifuncion1()
function validarArray(item){
    return item>=19
}
function mifuncion1(){
    console.log(num.every(validarArray))
}


//de un determinado arreglo con nombre y edad vas a buscar aquellas personas que tengan mas de 5 años 5 elementos

let personas=[
    {nombre: "Alan",edad:65},
    {nombre: "Abdiel",edad:10},
    {nombre: "Cesar",edad:3},
    {nombre: "Diego",edad:5},
    {nombre: "Mario",edad:6},
]

let busqueda=personas.filter(persona=>persona.edad>5)

console.log(busqueda)

// hacer una busqueda de 10 trabajadores donde sean developers (nombre y posicion)

let developers=[
    {nombre: "Alan",pocision: "programador"},
    {nombre: "Abdiel",pocision: "front"},
    {nombre: "Cesar",pocision: "backend"},
    {nombre: "Diego",pocision: "front"},
    {nombre: "Mario",pocision: "programador"},

    {nombre: "Joshua",pocision: "programador"},
    {nombre: "Carlos",pocision: "BonIce"},
    {nombre: "Malcome",pocision: "backend"},
    {nombre: "Dui",pocision: "front"},
    {nombre: "Francis",pocision: "programador"},
]

let busquda=developers.filter(persona=>persona.pocision="programador")

console.log(busquda)