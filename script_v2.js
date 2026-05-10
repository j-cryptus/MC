const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

let audio; // Variable global para el audio
let intervaloCorazones; // Variable para el intervalo de corazones

// Función para crear corazones flotantes
function crearCorazonesFlotantes() {
    for (let i = 0; i < 5; i++) {
        const corazon = document.createElement("div");
        corazon.className = "corazon-flotante";
        corazon.innerHTML = "❤️";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.animationDelay = Math.random() * 2 + "s";
        document.body.appendChild(corazon);
        
        setTimeout(() => {
            corazon.remove();
        }, 3000);
    }
}

// Función para remover corazones flotando
function removerCorazonesFlotando() {
    const corazones = document.querySelectorAll(".corazon-flotante");
    corazones.forEach(corazon => corazon.remove());
}

// Función para reproducir audio
function reproducirAudio() {
    audio = new Audio('💘Beautiful Female Love Song   Deep Love & Emotional Music 2026  Romantic Song🎼 - Song Mood.mp3');
    audio.play();
}

// Función para pausar audio
function pausarAudio() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reiniciar al inicio
    }
}

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
        
        // Si se abre, iniciar intervalo de corazones y reproducir audio
        if (envoltura.classList.contains("abierto")) {
            intervaloCorazones = setInterval(crearCorazonesFlotantes, 500); // Crear 5 corazones cada 0.5s
            reproducirAudio();
        } else {
            // Si se cierra, detener intervalo, remover corazones y pausar audio
            clearInterval(intervaloCorazones);
            removerCorazonesFlotando();
            pausarAudio();
        }
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})