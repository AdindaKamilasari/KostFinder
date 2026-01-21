(function () {
    const namaDepan = localStorage.getItem("namaDepan");
    const namaBelakang = localStorage.getItem("namaBelakang");

    if (!namaDepan || !namaBelakang) {
        window.location.replace("login.html");
    }
})();