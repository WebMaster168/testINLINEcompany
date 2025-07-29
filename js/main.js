const tabs = document.querySelectorAll('.header__tab');
const cards = document.querySelectorAll('.cards__item');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(tab => tab.classList.remove('header__tab-active'));
        tab.classList.add('header__tab-active');
        const filter = tab.dataset.filter;
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
                setTimeout(()=>{
                    // С помощью setTimeout делаем отображение более плавным
                    card.classList.remove('cards__item-opacity');
                }, 100)
            } else {
                card.classList.add('hidden');
                setTimeout(()=>{
                    card.classList.add('cards__item-opacity');
                }, 100)
            }
        });
    });
});

new Swiper('.cards__slider', {
    // Optional parameters
    pagination: {
            el: '.swiper-pagination',
            clickable: true
            },
    //slidesPerView:6,
    breakpoints:{
        
        320: {
            slidesPerView: 1,
            spaceBetween: 25,
            pagination: {
            el: '.swiper-pagination',
            clickable: true
            }
        },
        481: {
            slidesPerView:2,
            spaceBetween:25,
            pagination: {
            el: '.swiper-pagination',
            clickable: true
            }
        },
        801:{
            slidesPerView:6
        }
    }

    // If we need pagination
    
})
  