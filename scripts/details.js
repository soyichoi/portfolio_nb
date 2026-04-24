//상세페이지 상단 이미지 swiper
const detailSwiper = document.querySelector('.detail_swiper');
console.log(detailSwiper);

const detailSlide = new Swiper(detailSwiper,{
    loop:true,
    slidesPerView: 1.7,
    spaceBetween: 10,
})