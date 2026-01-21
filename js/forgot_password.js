const toast = document.getElementById("toast");
const emailInput = document.getElementById("email");
const loginBtn = document.getElementById("submit");

loginBtn.addEventListener("click", () => {
    if (!emailInput.value.trim()) {
        toast.textContent = "Semua field wajib diisi!";
        toast.classList.add("show");

        setTimeout(() => toast.classList.remove("show"), 2200);
        return;
    }

    window.location.href = "otp.html";
});
