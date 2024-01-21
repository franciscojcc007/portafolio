let user = {
     email: "frama@user.com",
     nombre: "francisco",
     estado: {
         activo: true,
     },
     guardarusuario: function () {
         console.log("guardar a", this.nombre );
     },
 };
 console.log(user);
//  user.guardarusuario();
