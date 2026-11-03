// MENÚ DE NAVEGACIÓN

console.log("Bienvenido a Luxury Cars");

// Cerrar el menú al seleccionar una opción
let enlaces = document.querySelectorAll(".nav-link");

enlaces.forEach(function(enlace) {

    enlace.addEventListener("click", function() {

        let menu = document.querySelector(".navbar-collapse");

        if (menu.classList.contains("show")) {
            let instancia = bootstrap.Collapse.getOrCreateInstance(menu);
            instancia.hide();
        }

    });

});