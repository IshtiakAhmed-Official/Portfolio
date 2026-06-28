 document.addEventListener('DOMContentLoaded', () => {
        const html = document.documentElement;
        const themeBtn = document.getElementById('theme-toggle');
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

            // 1. Theme Toggle (Defaults to Dark)
            if (localStorage.theme === 'light') {
                html.classList.remove('dark');
            } else {
                html.classList.add('dark');
            }

            themeBtn.addEventListener('click', () => {
                html.classList.toggle('dark');
                localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
            });

            // 2. Mobile Menu Toggle
            mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
            document.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
            });

            // 3. Scroll Reveal Animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('active');
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // 4. Mouse Blob Effect
              const blob = document.getElementById('blob');
                document.addEventListener('mousemove', (e) => {
                blob.style.transform = `translate(${e.clientX - 64}px, ${e.clientY - 64}px)`;});
});