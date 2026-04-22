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

//전체메뉴 클릭 시 전체메뉴 나타나기
const sideMenuOpen = document.querySelector('.menu_btn');
const sideMenuBg = document.querySelector('.side_menu_bg');
const sideMenuClose = document.querySelector('.side_close');
//console.log(sideMenuOpen,sideMenuBg,sideMenuClose);

sideMenuOpen.addEventListener('click',function(e){
    e.preventDefault();
    sideMenuBgSH('block');
})
sideMenuClose.addEventListener('click',function(e){
    e.preventDefault();
    sideMenuBgSH('none');
})

function sideMenuBgSH(status){return sideMenuBg.style.display = status;}

//사이드메뉴
//사이드메뉴의 gnb 클릭시 lnb 보이기
const sideGnb = document.querySelectorAll('.side_gnb > li');
const sideLnb = document.querySelectorAll('.side_lnb');
//console.log(sideGnb, sideLnb);

for(let i of sideGnb){
    i.addEventListener('click', function(e){
        //console.log('클릭확인');
        //has_sub 아닌 경우 링크 이동
        if(!i.children[0].classList.contains('has_sub')) return;
        e.preventDefault();
        sideLnbHide();
        //console.log(i.children[1].scrollHeight);
        i.children[1].style.height = `${i.children[1].scrollHeight}px`;
    })
}

for(let i of sideLnb){i.style.transition = 'height 0.3s';}

function sideLnbHide(){
    for(let i of sideLnb) i.style.height = 0
}