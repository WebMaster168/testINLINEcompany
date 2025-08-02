const tabs = document.querySelectorAll('.header__tab');
const cards = document.querySelectorAll('.cards__item');

const getVisibleSlides = () => {
    return Array.from(document.querySelectorAll('.swiper-slide')).filter(slide => !slide.classList.contains('hidden'));
};

const renderBullet = (index, className) => {
    const visibleSlides = getVisibleSlides();
    
    return index < visibleSlides.length ? `<span class="${className}"></span>` : '';
};

const swiper = new Swiper('.cards__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: renderBullet
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 25
        },
        481: {
            slidesPerView: 2,
            spaceBetween: 25
        },
        801: {
            slidesPerView: 6
        }
    }
});

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(tab => tab.classList.remove('header__tab-active'));
        tab.classList.add('header__tab-active');
        const filter = tab.dataset.filter;

        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.classList.remove('cards__item-opacity');
                }, 100);
            } else {
                card.classList.add('hidden');
                setTimeout(() => {
                    card.classList.add('cards__item-opacity');
                }, 100);
            }
        });

        // Обновляем Swiper после изменения видимости карточек
        swiper.update();
    });
});
