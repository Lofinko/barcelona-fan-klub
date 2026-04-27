// Počkáme, kým sa nahrá celý dokument
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Interaktívny prvok: Dark Mode Toggle ---
    const darkModeBtn = document.getElementById('darkModeToggle');
    
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            // Pridá alebo odoberie triedu 'dark-theme' na elemente <body>
            document.body.classList.toggle('dark-theme');
            
            // Zmena textu tlačidla podľa aktuálneho režimu
            if (document.body.classList.contains('dark-theme')) {
                darkModeBtn.textContent = '☀️ Svetlý režim';
            } else {
                darkModeBtn.textContent = '🌙 Tmavý režim';
            }
        });
    }

    // --- 2. Interaktívny prvok: Podmienený formulár a Toast notifikácia ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Zabránime štandardnému odoslaniu (obnoveniu stránky)
            event.preventDefault();

            // Kontrola HTML5 validity pred "odoslaním"
            if (contactForm.checkValidity()) {
                // Ak je formulár platný, zobrazíme Bootstrap Toast
                const toastElement = document.getElementById('successToast');
                const toast = new bootstrap.Toast(toastElement);
                toast.show();

                // Vyčistenie formulára po úspešnom odoslaní
                contactForm.reset();
            } else {
                // Ak nie je platný, Bootstrap zobrazí natívne hlášky vďaka "required"
                contactForm.reportValidity();
            }
        });
    }

});
