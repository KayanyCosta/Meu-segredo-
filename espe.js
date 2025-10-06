// Criar corações flutuantes
        function createFloatingHeart() {
            const container = document.getElementById('floatingHearts');
            const heart = document.createElement('div');
            heart.className = 'float-heart';
            heart.innerHTML = ['❤', '❤', '❤', '❤'][Math.floor(Math.random() * 4)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(heart);

            setTimeout(() => heart.remove(), 13000);
        }

        setInterval(createFloatingHeart, 800);

        // Scroll suave
        document.querySelector('.scroll-indicator').addEventListener('click', () => {
            document.querySelector('.content-section').scrollIntoView({
                behavior: 'smooth'
            });
        });

        // Parallax no hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');
            const balloon = document.querySelector('.heart-balloon');
            
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - (scrolled / window.innerHeight);
            }
            
            if (balloon && scrolled < window.innerHeight) {
                balloon.style.transform = `translateY(calc(-50% + ${scrolled * 0.3}px))`;
            }
        });