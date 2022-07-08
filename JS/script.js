/*let cantidadLibros, genero

do{
    cantidadLibros = parseFloat(prompt("Ingrese cuantos libros leiste este año"))
    genero = parseFloat (prompt("El genero que mas frecuentas es: 1.Ficcion, 2.SciFi, 3.RomComs, 4.Crimen/Policiales o 5.Horror?"))

   if(isNaN(cantidadLibros) || isNaN(genero)) {
       alert ("Por favor, ingrese un número válido ")
      }
   if(genero !== 1 && genero !== 2  && genero !== 3  && genero !== 4  && genero !== 5){
       alert("Por favor, ingrese un número entre 1 y 5")
       }
        
    } while ((isNaN(cantidadLibros) || isNaN(genero)) || (genero !== 1 && genero !== 2  && genero !== 3  && genero !== 4  && genero !== 5 ))


    
if((genero === 1 || genero === 2)  && cantidadLibros >= 4){
    alert("Amas escapar a realidades alternas e imaginar mundo inimaginables, aqui te van unas recomendaciones para que agregues a tu lista de lectura:'passenger");
} 
else if(genero === 3 && cantidadLibros >= 4){
    alert("Eres un/a romantico/a de naturaleza, aqui te van unas recomendaciones para que agregues a tu lista de lectura: 'me before you'");
} 
else if((genero === 4 || genero === 5) && cantidadLibros >= 4){
    alert("Te apasiona resolver misterios y el suspenso que lleva a esa gran revelacion final, aqui te van unas recomendaciones para que agregues a tu lista de lectura: 'el sabueso de los baskerville");
}
else{
    alert("No eres alguien facil de encacillar, disfrutas de un libro sin importar su genero y eso es asombroso! aqui te van algunas recomendaciones: 'El hobbit' 'Los ojos del perro siberiano' 'Amor en verso' 'La chica del tren'");
}*/

//DESAFIO COMPLEMENTARIO 2

class libro{
    constructor(nombre, genero, autor, publicado){
     this.nombre= nombre,
     this.genero= genero,
     this.autor= autor,
     this.publicado= publicado
    } 
}

const romance = new libro ("me before you", "romance", "jojo moyes", 2012);
const romance2 = new libro ("amor en verso","romance","colleen hoovers",2012);

const fic= new libro ("Fahrenheit 451", "ficcion", "Ray Bradbury", 1953);
const fic2= new libro ("el marciano", "ficcion", "andy weir", 2011);

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