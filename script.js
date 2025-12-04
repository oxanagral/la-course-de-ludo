// Parallax sur le fond .hero : la photo démarre vers le haut et bouge quand on scrolle
document.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const offset = window.pageYOffset;

    // 20 = position de base en %, 0.03 = vitesse du mouvement
    const base = 20; 
    const move = offset * 0.03; 
    hero.style.backgroundPosition = `center ${base + move}%`;
});

// Année automatique dans le footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
