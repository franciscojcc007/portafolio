let persona = {
     edad : 31,
     nombre : "francisco",
     documento : 4022066,
};

console.log(persona);
persona.edad = 33;
console.log(persona);
delete persona.documento;
console.log(persona);