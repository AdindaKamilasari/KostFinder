const userIconBtn = document.getElementById("userIconBtn");
const userDropdown = document.getElementById("userDropdown");
const arrow = document.querySelector(".arrow-icon");

if (userIconBtn && userDropdown) {
    userIconBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        userDropdown.classList.toggle("show");
        
        // Animasi panah berputar
        if (userDropdown.classList.contains("show")) {
            arrow.style.transform = "rotate(180deg)";
        } else {
            arrow.style.transform = "rotate(0deg)";
        }
    });

    // Menutup dropdown saat klik di mana saja di luar menu
    window.addEventListener("click", function(e) {
        if (!userIconBtn.contains(e.target) && !userDropdown.contains(e.target)) {
            userDropdown.classList.remove("show");
            if(arrow) arrow.style.transform = "rotate(0deg)";
        }
    });
}