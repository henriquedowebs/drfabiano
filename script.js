document.addEventListener('DOMContentLoaded', () => {
    // 1. Accordion do FAQ (Apenas toggle da classe 'active')
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Fecha os outros (comportamento clássico)
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    // Opcional: altera o sinal de + para -
                    const span = otherHeader.querySelector('span');
                    if(span) span.textContent = '+';
                }
            });

            // Toggle atual
            header.classList.toggle('active');
            
            // Troca o sinal
            const span = header.querySelector('span');
            if(span) {
                span.textContent = header.classList.contains('active') ? '-' : '+';
            }
        });
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        if (navLinks.style.display === 'flex' && navLinks.style.flexDirection === 'column') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#ffffff';
            navLinks.style.padding = '20px';
            navLinks.style.gap = '20px';
            navLinks.style.borderBottom = '2px solid #333';
            navLinks.style.zIndex = '1000';
        }
    });
});
