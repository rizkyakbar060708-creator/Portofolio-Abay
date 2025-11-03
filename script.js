// Animasi muncul bertahap
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("h1, img, p, h2, .scroll-container");
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("fade-in");
    }, index * 200);
  });

  // Inisialisasi tombol disable awal
  updateScrollButtons("hobi");
  updateScrollButtons("skills");
});

// Efek klik di foto profil
const profileImg = document.querySelector("img");
profileImg.addEventListener("click", () => {
  alert("Halo! Saya Abay 👋\nSenang bisa berbagi karya dengan Anda!");
});

// Fungsi geser kanan & kiri
function scrollLeft(id) {
  const container = document.getElementById(id);
  container.scrollBy({ left: -300, behavior: "smooth" });
  setTimeout(() => updateScrollButtons(id), 500);
}

function scrollRight(id) {
  const container = document.getElementById(id);
  container.scrollBy({ left: 300, behavior: "smooth" });
  setTimeout(() => updateScrollButtons(id), 500);
}

// Tombol Fakta Menarik
document.addEventListener("DOMContentLoaded", () => {
  const faktaBtn = document.getElementById("faktaBtn");

  faktaBtn.addEventListener("click", () => {
     alert("💻 Aku kayak fungsi tanpa return — nggak lengkap tanpa kehadiran kamu ❤️");
  });
});