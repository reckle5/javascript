class Libro{
    constructor(titulo="", autor="", genero="", edicion=1, precio=1, stock=1){
        this.titulo = titulo,
        this.autor = autor,
        this.genero = genero,
        this.edicion = edicion,
        this.precio = precio,
        this.stock = stock
    }
}

const libro1 = new Libro ("huckleberry finn", "mark twain", "ficcion",2019,10000, 8)
const libro2 = new Libro ("juego de tronos cancion de hielo y fuego", "george r.r martin", "ficcion",2011,8000, 18)
const libro3 = new Libro ("choque de reyes cancion de hielo y fuego", "george r.r martin", "ficcion",2012,7867, 28)
const libro4 = new Libro ("amor y otras palabras extrañas", "mccahan erin", "romance",2013,4819, 20)
const libro5 = new Libro ("solo un dia", " forman gayle", "romance",2013,4509, 11)
const libro6 = new Libro ("carry on", " rowell rainbow", "romance",2016,4399, 31)

const libros = [libro1, libro2, libro3, libro4, libro5, libro6]

let titulo, autor, genero, edicion, precio, stock, finalizar, buscador

// FUNCION PARA BUSCAR LIBRO
function buscarLibro(libros) {
    let tituloLibro = prompt(" Ingrese un Titulo de libro").toLowerCase()

    let tituloBuscado = libros.find( libro => libro.titulo == tituloLibro)

    if(tituloBuscado == undefined){
        console.log("No se pudo encontrar ese libro")
    }else{
        console.log(tituloBuscado)
    }
}

// FUNCION PARA BUSCAR LIBROS POR GENERO   
function buscarGenero(libros) {
    let generoLibro = prompt(" Ingrese un genero de libro").toLowerCase()

    let generoBuscado = libros.filter( libro => libro.genero == generoLibro)

    if(generoBuscado == undefined){
        console.log("No se pudo encontrar ese genero")
    }else{
        console.log(generoBuscado)
    }
    
}

// FUNCION PARA ELIMINAR UN LIBRO
function eliminarLibro(libros) {
    let buscarLibro = prompt(" Ingrese titulo de libro a eliminar").toLowerCase()
    let libroBuscado = libros.find( libro => libro.titulo == buscarLibro)
    let indice = libros.indexOf(libroBuscado)
    if(indice != -1){
        libros.splice(indice, 1)
        console.log((libroBuscado),"se ha elimminado exitosamente")
    }else{
        console.log("no se encontro libro con ese nombre")
    }
    
}
//solicitando datos al usuario
do {

    do{
        titulo = prompt("Ingrese un Titulo de libro").toLowerCase()
        autor = prompt("Ingrese el Autor del libro").toLowerCase()
        genero = prompt("Ingrese el Genero del libro").toLowerCase()
    }while( (titulo.length == 0 || autor.length == 0 || genero.length == 0))
    //VALIDACION DE DATOS CORRECTOS
    do {
        edicion = parseInt(prompt("Ingrese año de edicion del libro"))
        precio = parseFloat(prompt("Ingese Precio del producto"))
        stock = parseInt(prompt("Ingrese Stock del product"))
    } while((isNaN(edicion) || isNaN(precio) || isNaN(stock)) || (edicion <= 0 || precio <= 0 || stock <= 0 ))

    const libro = new Libro (titulo, autor, genero, edicion, precio, stock)
    libros.push(libro)
    finalizar = parseInt(prompt(`Libro ingresado con exito!! Desea seguir agregando mas:
    1- Si
    2- No
    `))
    
} while(finalizar != 2)

// BUSCADOR
do {
      buscador = parseInt(prompt(`Para Buscar Ingrese:
     1- Buscar libro
     2- Buscar por genero
     3- Eliminar un libro `))
} while (buscador <1 || buscador > 3)

switch(buscador){
    case 1:
        buscarLibro(libros)
        break;
    case 2:
        buscarGenero(libros)
        break;
    case 3:
        eliminarLibro(libros)
        break;
    default:
        alert("opcion no valida")
        break;          
}