//========================================================1. 히어로 배너
const heroBnr = document.querySelector('.hero_bnr');
//console.log(heroBnr);

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

//========================================================2. 베스트셀러
const best = document.querySelectorAll('.best_wrap .swiper');
const best_title = document.querySelectorAll('.best_wrap .tab_menu a');
//console.log(best, best_title);

//베스트셀러 swiper
const totalSwiper = new Swiper(best[0], {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.total_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.total_swiper .swiper-scrollbar',
        draggable: true,
    }
});
const topSwiper = new Swiper(best[1], {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.top_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.top_swiper .swiper-scrollbar',
        draggable: true,
    }
});
const bottomSwiper = new Swiper(best[2], {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
        pagination: {
        el: '.top_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.top_swiper .swiper-scrollbar',
        draggable: true,
    }
})
const outerSwiper = new Swiper(best[3], {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
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

//========================================================3. 롱 슬리브
const sleeveLook = document.querySelector('.look_swiper');
//console.log(sleeveLook);
const sleeveLookSwiper = new Swiper(sleeveLook, {
    loop:true,
    navigation:{
        prevEl:'.sleeve_wrap .sleeve-prev',
        nextEl:'.sleeve_wrap .sleeve-next',
    },
})
//---------------------------------------------------------- 상품 swiper
const sleeveList = document.querySelectorAll('.sleeve_wrap .contents_wrap .swiper');
//console.log(sleeveList);
const stripeSwiper = new Swiper(sleeveList[0],{
    slidesPerView: 3,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.stripe_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.stripe_swiper .swiper-scrollbar',
        draggable: true,
    }
})
//========================================================5. 데일리 셋업
const setup = document.querySelector('.setup_swiper');
console.log(setup);
const setupSwiper = new Swiper(setup, {
    slidesPerView: 3,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.setup_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.setup_swiper .swiper-scrollbar',
        draggable: true,
    }
})
//========================================================6. 베스트 팬츠
const pantsLook = document.querySelector('.pants_contents .look_swiper');
console.log(pantsLook);
const pantsLookSwiper = new Swiper(pantsLook, {
    loop:true,
    navigation:{
        prevEl:'.pants_wrap .pants-prev',
        nextEl:'.pants_wrap .pants-next',
    },
})
//---------------------------------------------------------- 상품 swiper
const pantsList = document.querySelectorAll('.pants_wrap .tab_contents .swiper');
console.log(pantsList[0]);
const denimSwiper = new Swiper(pantsList[0],{
    slidesPerView: 3,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.denim_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.denim_swiper .swiper-scrollbar',
        draggable: true,
    }
})
//========================================================7. 러닝
const running = document.querySelector('.run_swiper');
console.log(running);
const runSwiper = new Swiper(running, {
    slidesPerView: 5,
    freeMode: true,
    freeModeMomentum: true,
    spaceBetween: 20,
    pagination: {
        el: '.run_swiper .swiper-pagination',
        type: 'fraction',
    },
    scrollbar: {
        el: '.run_swiper .swiper-scrollbar',
        draggable: true,
    }
})