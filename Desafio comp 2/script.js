
//DESAFIO COMPLEMENTARIO 2

class Libro{
    constructor(nombre, genero, autor, publicado){
     this.nombre = nombre,
     this.genero = genero,
     this.autor = autor,
     this.publicado = publicado
    } 
}

const romance = new Libro ("me before you", "romance", "jojo moyes", 2012);
const romance2 = new Libro ("amor en verso","romance","colleen hoovers",2012);

const fic= new Libro ("Fahrenheit 451", "ficcion", "Ray Bradbury", 1953);
const fic2= new Libro ("el marciano", "ficcion", "andy weir", 2011);

let romanticos=["this girl","hopeless"]
let ficcion=["passenger", "dune","la guerra de los mundos"]

romanticos.push(romance)
romanticos.push(romance2)
console.log(romanticos)

ficcion.push(fic)
ficcion.push(fic2)
ficcion.push(romance2)
console.log(ficcion)

ficcion.splice(5,1)
console.log(ficcion)

