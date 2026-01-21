const otpInputs = document.querySelectorAll(".otp-underline input");

otpInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        // pindah ke input berikutnya
        if (input.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }

        // cek apakah semua field sudah terisi
        const isComplete = Array.from(otpInputs).every(i => i.value.trim() !== "");
        if (isComplete) {
            window.location.href = "change_password.html";
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});
