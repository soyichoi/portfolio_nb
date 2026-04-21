//위로 script
const fixedTop = document.querySelector('.to_top');
//console.log(fixedTop);
fixedTop.style.display = 'none';
window.addEventListener('scroll',function(){
    if(this.window.scrollY >= 1000) fixedTop.style.display = 'block';
    else fixedTop.style.display = 'none';
})

//header
//띠 배너
const noticeBnr = document.querySelector('.notice_bnr');
//console.log(noticeBnr);

const noticeSlide = new Swiper(noticeBnr,{
    loop:true,
    direction: 'vertical',
    slidesPerView: 1,
    autoplay:{
        delay: 2500,
    },
    speed: 500,
})

//위로가기 버튼
const toTop = document.querySelector('.to_top');
//console.log(toTop);
toTop.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo(0,0);
})