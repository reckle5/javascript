let cantidadLibros, genero

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
}