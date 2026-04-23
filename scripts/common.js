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

//사이드메뉴
//햄버거 메뉴 클릭 시 사이드메뉴 나타나기
const sideMenuOpen = document.querySelector('.menu_btn');
const sideMenuBg = document.querySelector('.side_menu_bg');
const sideMenuClose = document.querySelector('.side_close');
const sideMenuOutside = document.querySelector('.side_menu_outside');
//console.log(sideMenuOpen,sideMenuBg,sideMenuClose,sideMenuOutside);

//햄버거 메뉴 클릭->열기
sideMenuOpen.addEventListener('click',function(e){
    e.preventDefault();
    sideMenuBg.classList.add('active');
})
//햄버거 메뉴 클릭->닫기
sideMenuClose.addEventListener('click',function(e){
    e.preventDefault();
    sideMenuBg.classList.remove('active');
    for(let i of sideLnb){ //열린 lnb 초기화
        i.style.height = '0px';
    }
    for(let i of sideGnb){ //화살표 애니메이션 초기화
        i.children[0].classList.remove('open');
    }
})
//밖 영역 클릭 -> 닫기
sideMenuOutside.addEventListener('click',function(e){
    e.preventDefault();
    sideMenuBg.classList.remove('active');
    for(let i of sideLnb){ //열린 lnb 초기화
        i.style.height = '0px';
    }
    for(let i of sideGnb){ //화살표 애니메이션 초기화
        i.children[0].classList.remove('open');
    }
})

//사이드메뉴의 gnb 클릭시 lnb 보이기
const sideGnb = document.querySelectorAll('.side_gnb > li');
const sideLnb = document.querySelectorAll('.side_lnb');
//console.log(sideGnb, sideLnb);

for(let i of sideGnb){
    i.addEventListener('click', function(e){
        //console.log('클릭확인');
        const lnb = i.children[1];
        const arrow = i.children[0]; //베스트,의류,신발,용품,이벤트
        
        if(!i.children[0].classList.contains('has_sub')) return; //has_sub 아닌 경우 링크 이동
        e.preventDefault(); //링크막기
        
        if(lnb.style.height == '0px') { //만약 닫혀있으면 lnb 열기
            lnb.style.height = `${lnb.scrollHeight}px`;
            arrow.classList.add('open');
        } else { //아니면 lnb 닫기
            lnb.style.height = '0px';
            arrow.classList.remove('open');
        }
    })
}

for(let i of sideLnb){i.style.transition = 'height 0.3s';}