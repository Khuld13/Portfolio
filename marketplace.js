// ========================
// MARKETPLACE
// ========================
document.addEventListener('DOMContentLoaded', () => {

    // ========================
    // MARKETPLACE FILTER
    // ========================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const marketCards = document.querySelectorAll('.market-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            marketCards.forEach((card, index) => {

                const categories = card.dataset.category || '';

                if (filter === 'all' || categories.includes(filter)) {

                    card.classList.remove('hidden');

                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';

                    setTimeout(() => {
                        card.style.transition = 'all 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 80);

                } else {

                    card.classList.add('hidden');

                }

            });

        });
    });

    // ========================
    // CARD ANIMATION
    // ========================
    const cardObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry, i) => {

            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 100);

            }

        });

    }, {
        threshold: 0.1
    });

    marketCards.forEach(card => {

        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';

        cardObserver.observe(card);

    });

    // ========================
    // GET PROJECT BUTTONS
    // ========================
    document.querySelectorAll('.market-buy-btn').forEach(btn => {

        btn.addEventListener('click', function (e) {

            if (this.getAttribute('href') !== '#contact-market') return;

            e.preventDefault();

            const contactSection = document.getElementById('contact-market');

            const marketCard = this.closest('.market-card');

            if (marketCard) {

                const title = marketCard.querySelector('h3');

                const projectInput = document.getElementById('market-project');

                if (title && projectInput) {
                    projectInput.value = title.textContent.trim();
                }

            }

            if (contactSection) {

                window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                });

            }

        });

    });

});