  // Criar partículas
        function createParticles() {
            const container = document.getElementById('particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.background = `rgba(${255}, ${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, ${Math.random() * 0.5 + 0.3})`;
                particle.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
                container.appendChild(particle);
            }
        }

        // Criar corações flutuantes
        function createFloatingHeart() {
            const container = document.getElementById('floatingHearts');
            const heart = document.createElement('div');
            heart.className = 'float-heart';
            heart.innerHTML = ['❤️', '💕', '💖', '💗', '💓'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 6) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(heart);

            setTimeout(() => heart.remove(), 10000);
        }

        // Animação de twinkle para partículas
        const style = document.createElement('style');
        style.textContent = `
            @keyframes twinkle {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.5); }
            }
        `;
        document.head.appendChild(style);

     

        // Inicializar
        createParticles();
        setInterval(createFloatingHeart, 600);

        // Parallax suave
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const particles = document.getElementById('particles');
            particles.style.transform = `translateY(${scrolled * 0.5}px)`;
        });