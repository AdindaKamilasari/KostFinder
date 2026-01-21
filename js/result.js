import dataKos from "./data_kos.js";

// ==================================================
// BAGIAN 1: AMBIL ELEMEN DOM
// ==================================================

const searchInput = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-btn');
const applyFilterBtn = document.getElementById("applyFilterBtn");

const cardGrid = document.getElementById("cardGrid");

// user dropdown
const userIconBtn = document.getElementById("userIconBtn");
const userDropdown = document.getElementById("userDropdown");
const arrow = document.querySelector(".arrow-icon");

// modal
const modal = document.getElementById("filterModal");
const openBtn = document.getElementById("openFilterBtn");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const typeButtons = document.querySelectorAll('.btn-option');

// ==================================================
// BAGIAN 2: USER DROPDOWN
// ==================================================

if (userIconBtn && userDropdown) {
    userIconBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        userDropdown.classList.toggle("show");
        arrow.style.transform = userDropdown.classList.contains("show")
            ? "rotate(180deg)"
            : "rotate(0deg)";
    });

    window.addEventListener("click", function (e) {
        if (!userIconBtn.contains(e.target) && !userDropdown.contains(e.target)) {
            userDropdown.classList.remove("show");
            arrow.style.transform = "rotate(0deg)";
        }
    });
}

// ==================================================
// BAGIAN 3: REDIRECT / UPDATE QUERY CITY
// ==================================================

function redirectToCity(cityName) {
    const city = cityName.toLowerCase().trim();

    if (city === "") {
        alert("Silakan masukan atau pilih nama lokasi terlebih dahulu.");
        return;
    }

    const supportedCities = ["palembang", "bogor", "depok"];
    if (!supportedCities.includes(city)) {
        alert("Lokasi " + cityName + " belum tersedia saat ini.");
        return;
    }

    // tetap di halaman yang sama, ganti query
    window.location.href = `result.html?city=${city}`;
}

// ==================================================
// BAGIAN 4: EVENT PENCARIAN
// ==================================================

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        redirectToCity(searchInput.value);
    });
}

if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            redirectToCity(searchInput.value);
        }
    });
}

if (applyFilterBtn) {
    applyFilterBtn.addEventListener("click", () => {
        const selectedLokasi = document.querySelector('input[name="lokasi"]:checked');
        if (selectedLokasi) {
            redirectToCity(selectedLokasi.value);
        } else {
            alert("Silakan pilih minimal satu lokasi di filter.");
        }
    });
}

// ==================================================
// BAGIAN 5: MODAL FILTER
// ==================================================

if (openBtn) {
    openBtn.onclick = () => (modal.style.display = "block");
}

if (closeBtn) {
    closeBtn.onclick = () => (modal.style.display = "none");
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

typeButtons.forEach(button => {
    button.addEventListener("click", function () {
        typeButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});

// ==================================================
// BAGIAN 6: RENDER DATA KOS
// ==================================================

function renderKos() {
    const params = new URLSearchParams(window.location.search);
    const city = params.get("city");

    if (!city) {
        cardGrid.innerHTML = "<p>Lokasi tidak ditemukan.</p>";
        return;
    }

    searchInput.value = city.charAt(0).toUpperCase() + city.slice(1);
    cardGrid.innerHTML = "";

    const hasil = dataKos.filter(kos => {
        const target = city.toLowerCase();
        return (
            kos.nama_kost.toLowerCase().includes(target) ||
            kos.slug.toLowerCase().includes(target) ||
            kos.alamat.toLowerCase().includes(target)
        );
    });

    if (hasil.length === 0) {
        cardGrid.innerHTML = "<p>Tidak ada kos tersedia.</p>";
        return;
    }

    hasil.forEach(kos => {
        cardGrid.innerHTML += `
            <a href="detail_kos.html?slug=${kos.slug}" class="card-link">
                <div class="card">
                    <img src="${kos.gambar_utama}" alt="${kos.nama_kost}">
                    <div class="card-body">
                        <div class="card-header">
                            <span class="badge">${kos.tipe}</span>
                            <span class="location">${city.toUpperCase()}</span>
                        </div>

                        <div class="price-row">
                            <span class="price">${kos.harga}/bulan</span>
                            <span class="rooms-left">${kos.sisa_kamar}</span>
                        </div>

                        <div class="card-title">${kos.nama_kost}</div>

                        <div class="facilities">
                            <i class="fa-solid fa-tv" style="color: #cfcfcf;"></i>
                            <i class="fa-solid fa-wifi" style="color: #cfcfcf;"></i>
                            <i class="fa-solid fa-bath" style="color: #000000;"></i>
                            <i class="fa-solid fa-water" style="color: #000000;"></i>
                            <i class="fa-solid fa-bed" style="color: #000000;"></i>
                        </div>
                    </div>
                </div>
            </a>
        `;
    });
}

// ==================================================
// BAGIAN 7: INIT
// ==================================================

document.addEventListener("DOMContentLoaded", renderKos);
