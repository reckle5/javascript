class Producto {
    constructor (id=1, nombre="", precio=1, tipo="", imagen){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.tipo = tipo
        this.imagen = imagen
    }
}

 const p1 = new Producto (1, "Alisa", 850,  "N14", './imagenes/alisa.png');
 const p2 = new Producto (2, "White", 1200, "N°16", './imagenes/white.png' );
 const p3 = new Producto (3, "Golden", 850, "N14", './imagenes/golden.png' );
 const p4 = new Producto (4, "Wooden Like" , 450, "N°8", './imagenes/m6.png');
 const p5 = new Producto (5, "Daisy", 680, "N°12", './imagenes/maceta amarrilla.png');
 const p6 = new Producto (6, "Marga", 680, "N°12", './imagenes/m5.png');
 const p7 = new Producto (7, "Mate", 680, "N°12", './imagenes/maceta mate.png');
 const p8 = new Producto (8, "Fatima", 850, "N14", './imagenes/m7.png' );
 const p9 = new Producto (9, "Brains", 680, "N°12", './imagenes/macetabrains.png');
 const p10 = new Producto (10, "Llama", 680, "N°12", './imagenes/llama.png');
 const p11 = new Producto (11, "Homero", 750, "N°10", './imagenes/m4.png');
 const p12 = new Producto (12, "Perfect", 450, "N°8", './imagenes/m8.png');
    
 const p13 = new Producto (13,"Parma",  600, "Tussor Rayas", './imagenes/almohadones parma.jpeg');
 const p14 = new Producto (14,"Invierno Pack x3",  2300,  "Piel Sintetica, Tussor", './imagenes/almo.jpg');
 const p15 = new Producto (15,"Vikings Pack x3",  2300,  "Piel Sintetica, Tussor", './imagenes/pakx3.png');
 const p16 = new Producto (16,"Tussor Pack x3",  1950, "Tussor Liso", './imagenes/car5.jpg');
 const p17 = new Producto (17,"Tussor silla", 440, "Tussor Liso", './imagenes/almopra silla.png');
 const p18 = new Producto (18,"Grey Pack x2",  2200,  "Piel Sintetica, Tussor Print", './imagenes/amoha gris.jpg');
 const p19 = new Producto (19,"Tussor",  440,  "Tussor Liso", './imagenes/tussor.png');
 const p20 = new Producto (20,"Pack Bohemian",  2100,  "Tussor Rayas, Decorado", './imagenes/pack 3 boho.webp');
 const p21 = new Producto (21,"Della",  1500,  "Seda", './imagenes/della.jpg');


const productos = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21]

const divProductos = document.getElementById("misProductos");

productos.forEach(productoArray => {
    divProductos.innerHTML += `
    <div class="card " style="width: 18rem;">
    <div class="img-productos"><img src="${productoArray.imagen}" class="card-img-top img-productos" alt=""></div>
            <div class="card-body prod ">
                <h5 class="card-title">${productoArray.nombre}</h5>
                <p class="card-text">Marca: ${productoArray.tipo}</p>
                <p class="card-text">Precio: $${productoArray.precio}</p>
                <a href="#" class="btn btn-outline-success" id="idCarrito">Agregar al carrito</a>
        </div>
        </div>
        `
})


const input1 = document.getElementById("input1");
const botonBusqueda = document.getElementById("botonBusqueda");

botonBusqueda.addEventListener("click", () => {
    console.log(input1.value);
})


const carrito = document.getElementById("idCarrito");

carrito.addEventListener ( "click", () =>{
    console.log(`${p1.nombre} se ha agregado al carrito`);
})

//mi idea era que por cada "agregar al carrito" devuelva por consola el nombre del producto y el mensaje, pero solo me funciona el evento con el primer objeto y me tira undefined
/* carrito.addEventListener ( "click", () =>{
    console.log(`${Producto.nombre} se ha agregado al carrito`);
}) */