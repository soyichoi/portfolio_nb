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