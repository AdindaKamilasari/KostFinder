// ================================
// BAGIAN 1: LOGIKA USER MENU
// ================================

const searchInput = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-btn');
const applyFilterBtn = document.getElementById("applyFilterBtn");

const userIconBtn = document.getElementById("userIconBtn");
const userDropdown = document.getElementById("userDropdown");
const arrow = document.querySelector(".arrow-icon");

if (userIconBtn && userDropdown) {
    userIconBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        userDropdown.classList.toggle("show");

        if (userDropdown.classList.contains("show")) {
            arrow.style.transform = "rotate(180deg)";
        } else {
            arrow.style.transform = "rotate(0deg)";
        }
    });

    window.addEventListener("click", function (e) {
        if (!userIconBtn.contains(e.target) && !userDropdown.contains(e.target)) {
            userDropdown.classList.remove("show");
            if (arrow) arrow.style.transform = "rotate(0deg)";
        }
    });
}

// ================================
// BAGIAN 2: LOGIKA REDIRECT RESULT
// ================================

function redirectToCity(cityName) {
    const city = cityName.toLowerCase().trim();

    if (city === '') {
        alert('Silakan masukan atau pilih nama lokasi terlebih dahulu.');
        return;
    }

    const supportedCities = ['palembang', 'bogor', 'depok'];

    if (!supportedCities.includes(city)) {
        alert('Lokasi ' + cityName + ' belum tersedia saat ini.');
        return;
    }

    // ⬇️ SATU FILE RESULT DINAMIS
    window.location.href = `./result.html?city=${city}`;
}

// Klik tombol "Cari"
if (searchBtn) {
    searchBtn.addEventListener('click', function () {
        redirectToCity(searchInput.value);
    });
}

// Tekan Enter di input
if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            redirectToCity(searchInput.value);
        }
    });
}

// Terapkan Filter (Modal)
if (applyFilterBtn) {
    applyFilterBtn.addEventListener("click", function () {
        const selectedLokasi = document.querySelectorAll('input[name="lokasi"]:checked');

        if (selectedLokasi.length > 0) {
            const lokasiValue = selectedLokasi[0].value;
            redirectToCity(lokasiValue);
        } else {
            alert("Silakan pilih minimal satu lokasi di filter.");
        }
    });
}

// ================================
// BAGIAN 3: LOGIKA MODAL FILTER
// ================================

const modal = document.getElementById("filterModal");
const openBtn = document.getElementById("openFilterBtn");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const typeButtons = document.querySelectorAll('.btn-option');

// Buka modal
if (openBtn) {
    openBtn.onclick = function () {
        modal.style.display = "block";
    };
}

// Tutup modal (X)
if (closeBtn) {
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };
}

// Tutup modal (klik luar)
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Toggle tombol jenis sewa
typeButtons.forEach(button => {
    button.addEventListener('click', function () {
        typeButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
