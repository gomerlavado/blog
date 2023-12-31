function loadSection(section) {
    document.querySelectorAll("section").forEach(el => {
        el.style.display = "none";
    });

    document.querySelector(`#${section}`).style.display = "block";
}

function removeActive() {
    document.querySelectorAll(".nav-link").forEach(el => {
        if (el.classList.contains("active")) {
            el.classList.remove("active");
        } 
    })
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.onclick = function() {
            loadSection(this.dataset.section);
            removeActive();
            link.classList.add("active");

            return false
        }
    })
});
