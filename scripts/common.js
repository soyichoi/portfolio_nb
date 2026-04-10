//header
//띠 배너
const noticeBnr = document.querySelector('.notice_bnr');
console.log(noticeBnr);

const noticeSlide = new Swiper(noticeBnr,{
    loop:true,
    direction: 'vertical',
    slidesPerView: 1,
    autoplay:{
        delay: 2500,
    },
    speed: 500,
})