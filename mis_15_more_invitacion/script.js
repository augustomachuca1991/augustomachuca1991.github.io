// --- CUENTA REGRESIVA ---
const targetDate = new Date("Apr 04, 2026 21:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;
  if (diff > 0) {
    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
  }
}, 1000);

// --- MÚSICA Y AUTOPLAY ---
const audio = document.getElementById("musica");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
  if (audio.paused) {
    audio
      .play()
      .then(() => {
        musicBtn.innerText = "❚❚";
      })
      .catch(() => {
        console.log("El navegador bloqueó el autoplay");
      });
  } else {
    audio.pause();
    musicBtn.innerText = "▶";
  }
}
// --- FUNCIONES INTERFAZ ---
function toggleCBU() {
  const box = document.getElementById("cbuBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function toggleUbicacionFiesta(event) {
  event.preventDefault();
  const boxFiesta = document.getElementById("ubicacionFiestaBox");
  boxFiesta.style.display = boxFiesta.style.display === "none" ? "block" : "none";
}

function toggleUbicacionMisa(event) {
  event.preventDefault();
  const boxMisa = document.getElementById("ubicacionMisaBox");
  boxMisa.style.display = boxMisa.style.display === "none" ? "block" : "none";
}

function recomendaciones() {
  // El texto predeterminado que pediste
  const texto = "Morena, te recomiendo esta canción: ";
  const mensaje = encodeURIComponent(texto);

  // Abre WhatsApp con el mensaje listo para completar
  window.open("https://wa.me/5493794324147?text=" + mensaje, "_blank");
}
