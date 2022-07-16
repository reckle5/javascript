class Producto {
    constructor (id=1, nombre="", precio=1, tipo=""){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.tipo = tipo
    }
}


 const p1 = new Producto (1, "Alisa", 850,  "N14" )
 const p2 = new Producto (2, "White", 1200, "N°16")
 const p3 = new Producto (3, "Golden", 850, "N14" )
 const p4 = new Producto (4, "Wooden Like" , 450, "N°8")
 const p5 = new Producto (5, "Daisy", 680, "N°12")
 const p6 = new Producto (6, "Marga", 680, "N°12")
 const p7 = new Producto (7, "Mate", 680, "N°12")
 const p8 = new Producto (8, "Fatima", 850, "N14" )
 const p9 = new Producto (9, "Brains", 680, "N°12")
 const p10 = new Producto (10, "Llama", 680, "N°12")
 const p11 = new Producto (11, "Homero", 750, "N°10")
 const p12 = new Producto (12, "Perfect", 450, "N°8")
    
 const p13 = new Producto (13,"Parma",  600, "Tussor Rayas")
 const p14 = new Producto (14,"Invierno Pack x3",  2300,  "Piel Sintetica, Tussor")
 const p15 = new Producto (15,"Vikings Pack x3",  2300,  "Piel Sintetica, Tussor")
 const p16 = new Producto (16,"Tussor Pack x3",  1950, "Tussor Liso")
 const p17 = new Producto (17,"Tussor silla", 440, "Tussor Liso")
 const p18 = new Producto (18,"Grey Pack x2",  2200,  "Piel Sintetica, Tussor Print")
 const p19 = new Producto (19,"Tussor",  440,  "Tussor Liso")
 const p20 = new Producto (20,"Pack Bohemian",  2100,  "Tussor Rayas, Decorado")
 const p21 = new Producto (21,"Della",  1500,  "Seda")


const productos = [p1,p2,p3,p4,p5,p6,p7,p8,p8,p9,p10,p11,p12,p13,p14,p15,p16]



const divProductos = document.getElementById("misProductos");

productos.forEach(productoArray => {
    divProductos.innerHTML += `
    <div class="card div-prod" style="width: 18rem;">
            <div class="card-body prod">
                <h5 class="card-title">${productoArray.nombre}</h5>
                <p class="card-text">Marca: ${productoArray.tipo}</p>
                <p class="card-text">Precio: $${productoArray.precio}</p>
        </div>
        </div>
        `
})



