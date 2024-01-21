
function Automovil(nombre){
     this.nombre = nombre;

}

console.log(Automovil.nombre);

const A = Automovil
let Aut = new A("Toyota");

console.log(Aut);

function of(Fn, arg){
     return new Fn(arg);
};

let auto1 = of(Automovil, "mazda");
console.log(auto1);
