//히어로 배너
const heroBnr = document.querySelector('.hero_bnr');
console.log(heroBnr);

const heroSlide = new Swiper(heroBnr,{
    loop:true,
    autoplay:{
        delay:3000,
    },
    speed: 1000,
    navigation:{
        prevEl:'.hero_bnr .hero-prev',
        nextEl:'.hero_bnr .hero-next',
    },
    pagination:{
        el:'.hero_bnr .hero-pagination',
        type:'fraction',
        renderFraction:function(current, total){
            return `
                <span class="${current}"></span>
                <span class="custom-separator"></span>
                <span class="${total}"></span>
            `;
        },
        formatFractionCurrent: function (num) {
            return ('0' + num).slice(-2);
        },
        formatFractionTotal: function (num) {
            return ('0' + num).slice(-2);
        },
    },
})

//베스트셀러
const best = document.querySelectorAll('.best_wrap .swiper');
const best_title = document.querySelectorAll('.best_wrap .tab_left a');
console.log(best, best_title);

//베스트셀러 swiper
const topSwiper = new Swiper(best[0], {
    slidesPerView: 5,
    spaceBetween: 20,
})
const bottomSwiper = new Swiper(best[1], {
    slidesPerView: 5,
    spaceBetween: 20,
})
const outerSwiper = new Swiper(best[2], {
    slidesPerView: 5,
    spaceBetween: 20,
})

//베스트셀러 탭메뉴
//초기 상태 (첫번째만 보이기)
best.forEach(function(el, i){
    if (i == 0) {
        el.classList.add('active');
    }
    else {
        el.classList.remove('active');
    }
})
//탭 클릭
best_title.forEach(function(tab, index) {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        //탭 active 처리
        best_title.forEach(function(t){
            t.classList.remove('active');
        });
        tab.classList.add('active');
        //swiper 보여주기
        best.forEach(function(swiper) {
            swiper.classList.remove('active');
        });
        best[index].classList.add('active');
    });
});