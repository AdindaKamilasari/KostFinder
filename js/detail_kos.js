// ===============================
// IMPORT DATA KOS
// ===============================
import dataKos from "./data_kos.js";

// ===============================
// AMBIL SLUG DARI URL
// ===============================
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

// Cari kos sesuai slug
const kos = dataKos.find(item => item.slug === slug);

if (!kos) {
    console.error("Data kos tidak ditemukan untuk slug:", slug);
} else {
    // ===============================
    // ISI DATA KE HALAMAN
    // ===============================
    const namaEl = document.querySelector(".kost-header h1");
    if (namaEl) namaEl.textContent = kos.nama_kost;

    const badgeEl = document.querySelector(".badge");
    if (badgeEl) badgeEl.textContent = kos.tipe;

    const sisaEl = document.querySelector(".rooms-left");
    if (sisaEl) sisaEl.textContent = kos.sisa_kamar;

    const hargaEl = document.querySelector(".price");
    if (hargaEl) hargaEl.textContent = kos.harga;

    const mainImg = document.querySelector(".main-img img");
    if (mainImg) mainImg.src = kos.gambar_utama;

    const subImg = document.querySelector(".sub-img img");
    if (subImg) subImg.src = kos.gambar_sub;

    const descEl = document.querySelector(".desc-text p");
    if (descEl) descEl.textContent = kos.deskripsi;

    const phoneEl = document.querySelector(".phone");
    if (phoneEl) phoneEl.textContent = kos.telepon;

    const alamatEl = document.querySelector(".info-card .card-content p");
    if (alamatEl) alamatEl.textContent = kos.alamat;
}

// ===============================
// DROPDOWN
// ===============================
const userIconBtn = document.getElementById("userIconBtn");
const userDropdown = document.getElementById("userDropdown");
const arrow = document.querySelector(".arrow-icon");

if (userIconBtn && userDropdown) {
    userIconBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        userDropdown.classList.toggle("show");

        if (userDropdown.classList.contains("show")) {
            arrow.style.transform = "rotate(180deg)";
        } else {
            arrow.style.transform = "rotate(0deg)";
        }
    });

    window.addEventListener("click", function(e) {
        if (!userIconBtn.contains(e.target) && !userDropdown.contains(e.target)) {
            userDropdown.classList.remove("show");
            if (arrow) arrow.style.transform = "rotate(0deg)";
        }
    });
}

// Accordion alamat & fasilitas
window.toggleDropdown = function(header) {
    const card = header.parentElement;
    card.classList.toggle("active");
};
