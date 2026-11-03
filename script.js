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

// BOTONES

function mostrarMensaje() {

    document.getElementById("resultado").innerHTML =
        "¡Descubre los mejores autos deportivos del mundo!";

}

function cambiarColor() {

    let colores = ["#fff1c1", "#e1efff", "#fce4ec", "#e5ffe5"];

    let color = colores[Math.floor(Math.random() * colores.length)];

    document.body.style.backgroundColor = color;

}

function mostrarHora() {

    let hora = new Date().toLocaleTimeString();

    document.getElementById("resultado").innerHTML =
        "La hora actual es: " + hora;

}

// FILTRO DE GALERÍA

let botones = document.querySelectorAll(".filtro");

let elementos = document.querySelectorAll(".elemento");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let categoria = this.getAttribute("data-filter");

        botones.forEach(function(btn) {
            btn.classList.remove("active", "btn-dark");
            btn.classList.add("btn-outline-dark");
        });

        this.classList.add("active", "btn-dark");
        this.classList.remove("btn-outline-dark");

        elementos.forEach(function(elemento) {

            let tipo = elemento.getAttribute("data-category");

            if (categoria === "todos" || categoria === tipo) {
                elemento.classList.remove("ocultar");
            } else {
                elemento.classList.add("ocultar");
            }

        });

    });

});