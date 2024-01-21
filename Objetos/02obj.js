const animales = {};

animales.name = ["leon", "pez", "pajaro"];
animales.mostrar = function () {
    for (let animal of animales.name) {
        console.log("el animal es", animal);
    }
};

animales.mostrar();