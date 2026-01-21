const toast = document.getElementById("toast");
const namaDepanInput = document.getElementById("nama_depan");
const namaBelakangInput = document.getElementById("nama_belakang");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nomorHandphoneInput = document.getElementById("nomor_handphone");
const registerBtn = document.getElementById("submit");

registerBtn.addEventListener("click", () => {
    if (
        !namaDepanInput.value.trim() ||
        !namaBelakangInput.value.trim() ||
        !emailInput.value.trim() ||
        !passwordInput.value.trim() ||
        !nomorHandphoneInput.value.trim()
    ) {
        toast.textContent = "Semua field wajib diisi!";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2200);
        return;
    }

    // ==========================
    // SIMPAN DATA USER
    // ==========================
    localStorage.setItem("namaDepan", namaDepanInput.value.trim());
    localStorage.setItem("namaBelakang", namaBelakangInput.value.trim());

    // redirect ke login
    window.location.href = "login.html";
});
