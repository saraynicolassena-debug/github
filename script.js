// MENÚ DE NAVEGACIÓN

console.log("Bienvenido a Luxury Cars");

let enlaces = document.querySelectorAll(".nav-link");

enlaces.forEach(function(enlace) {

    enlace.addEventListener("click", function() {

        let menu = document.querySelector(".navbar-collapse");

        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }

    });

});

// TARJETAS DE VEHÍCULOS

let tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(function(tarjeta) {

    tarjeta.addEventListener("mouseenter", function() {
        tarjeta.style.border = "2px solid #d4af37";
    });

    tarjeta.addEventListener("mouseleave", function() {
        tarjeta.style.border = "none";
    });

});

console.log("Tarjetas de vehículos cargadas");