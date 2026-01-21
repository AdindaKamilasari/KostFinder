const toast = document.getElementById("toast");
const passwordInput = document.getElementById("password");
const passwordRepeatInput = document.getElementById("password_repeat");
const loginBtn = document.getElementById("submit");

loginBtn.addEventListener("click", () => {
    if (!passwordInput.value.trim() || !passwordRepeatInput.value.trim()) {
        toast.textContent = "Semua field wajib diisi!";
        toast.classList.add("show");

        setTimeout(() => toast.classList.remove("show"), 2200);
        return;
    }

    window.location.href = "register.html";
});
