const userLabel = document.getElementById("userLabel");
const userFullName = document.getElementById("userFullName");

const guestMenu = document.getElementById("guestMenu");
const userMenu = document.getElementById("userMenu");
const logoutBtn = document.getElementById("logoutBtn");

// ambil data user
const namaDepan = localStorage.getItem("namaDepan");
const namaBelakang = localStorage.getItem("namaBelakang");

// ===============================
// CEK STATUS LOGIN
// ===============================
if (namaDepan && namaBelakang) {
    // USER LOGIN
    userLabel.textContent = namaDepan;
    userFullName.textContent = `${namaDepan} ${namaBelakang}`;

    guestMenu.style.display = "none";
    userMenu.style.display = "block";
} else {
    // GUEST
    userLabel.textContent = "Masuk / Daftar";

    guestMenu.style.display = "block";
    userMenu.style.display = "none";
}

// ===============================
// LOGOUT
// ===============================
if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "index.html";
    });
}
