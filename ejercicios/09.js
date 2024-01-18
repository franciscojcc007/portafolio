let pairs = [
     [1, {  name: "nicolas" }],
     [2, {  name: "felipe" }],
     [3, {  name: "chanchito" }],
];

let array =[{
     id: 1,
     name: 'nicolas',
},{
     id: 2,
     name:'felipe',
},{
     id: 3,
     name:'chanchito',
}];


function toCollectio(arr){

     let pairs =[];
     for(idx in arr){
          let elemento = arr[idx];
          pairs[idx] =[elemento.id, elemento]
     }
     return pairs;
}

let resultado = toCollectio(pairs);
console.log(resultado);