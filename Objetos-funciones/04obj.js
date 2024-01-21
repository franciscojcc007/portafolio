
function Automovil(nombre){
     this.nombre = nombre;
}

const A = Automovil;
let Aut = new A("Toyota");
console.log(Aut);

function of(Fn, arg){
     return new Fn(arg);
};

let auto1 = of(Automovil, "mazda");
console.log(auto1);




const punto = {
     x: 4,
     y: 10,
     dibujar(){
          console.log("dibujando un ....");
     }

};
if('dibujar' in punto){
     punto.dibujar();
}

//ver la propiedades de un objecto
//vieja forma
for(let llave of Object.keys(punto)){
     console.log(llave, punto[llave]);
}

for(let entry of Object.entries(punto)){
     console.log(entry);
}


//nueva forma
for(let llave in punto){
     console.log(llave, punto[llave]);
}