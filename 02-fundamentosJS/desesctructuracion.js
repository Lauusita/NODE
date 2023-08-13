const deadpool = {
    nombre: "Kriff",
    apellido: 'Hola',
    poder: 'no sé',
    // edad: 50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`    
        
    } 
} 
console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder  = deadpool.poder;

const {nombre, apellido, poder, edad = 30} = deadpool;
// Esta es la manera de desestructuración para extraer variables

console.log(nombre, apellido, poder, edad);

function imprimirHeroe({nombre, apellido, poder, edad = 45}){
    // const {nombre, apellido, poder, edad = 45} = heroe;
    console.log(nombre, apellido, poder, edad);
}

imprimirHeroe(deadpool);

const hero = ['batman', 'superman', 'spiderman'];
// h1= hero[0];
// h2= hero[1];
// h3= hero[2];
// console.log(hb);

const [h1, h2, h3]= hero;
console.log(h1, h2, h3);



