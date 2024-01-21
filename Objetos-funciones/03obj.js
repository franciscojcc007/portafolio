function crearUsuario(id,email, name, activo){
     return{
          id,
          email,
          name,
          activo,
          recuperarClave: function(){
               console.log("recuparar clave...");
          },
     };
}
let user1 = crearUsuario(1,'fran@gmail','francisco',true);
let user2 = crearUsuario(2,'marian@gmail','mariana',true);
let user3 = crearUsuario(3,'juan@gmail','juan',false);

console.log(user1,user2,user3);