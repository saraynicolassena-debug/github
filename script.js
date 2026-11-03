// MENÚ

let enlaces = document.querySelectorAll(".nav-link");

enlaces.forEach(function(enlace) {

    enlace.addEventListener("click", function() {

        let menu = document.querySelector(".navbar-collapse");

        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }

    });

});

// TARJETAS

let tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(function(tarjeta) {

    tarjeta.addEventListener("mouseenter", function() {
        tarjeta.style.border = "2px solid #d4af37";
    });

    tarjeta.addEventListener("mouseleave", function() {
        tarjeta.style.border = "none";
    });

});

// BOTÓN DE NOVEDADES

function mostrarMensaje() {

    document.getElementById("resultado").innerHTML =
        "¡Descubre los mejores autos deportivos del mundo!";

}

// BOTÓN CAMBIAR COLOR

function cambiarColor() {

    let colores = ["#fff1c1", "#e1efff", "#fce4ec", "#e5ffe5"];

    let color = colores[Math.floor(Math.random() * colores.length)];

    document.body.style.backgroundColor = color;

}

// BOTÓN MOSTRAR HORA

function mostrarHora() {

    let hora = new Date().toLocaleTimeString();

    document.getElementById("resultado").innerHTML =
        "La hora actual es: " + hora;

}