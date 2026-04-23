// 3. 페이지 클릭 활성화/비활성화 js
const pageNumber = document.querySelectorAll('.page_wrap .page a');
console.log(pageNumber);

for (let i of pageNumber) {
    i.addEventListener('click',function(e){
        e.preventDefault();
        for (let p of pageNumber){
            p.classList.remove('active');
        }
        this.classList.add('active');
    });
}
//2. 컨버스탭제목 클릭 (active변경) -> 컨버스 보이기, 나이키 숨기기
// season_title[1].addEventListener('click',function(e){
//     e.preventDefault(); //스크롤 위로 올라가는 문제 해결
//     season_title[1].classList.add('active');
//     season_title[0].classList.remove('active');
//     season[1].style.display = 'block';
//     season[0].style.display = 'none';
// })
//3. 나이키탭제목 클릭 (active변경) -> 컨버스 숨기기, 나이키 보이기
// season_title[0].addEventListener('click',function(e){
//     e.preventDefault();
//     season_title[0].classList.add('active');
//     season_title[1].classList.remove('active');
//     season[0].style.display = 'block';
//     season[1].style.display = 'none';
// })

//a변수를 클릭이벤트함수로 사용 시 a의 다른 페이지 이동속성(href)때문에 스크롤이 위로 올라가는 문제 해결법
// HTML해결법) <a href="javascript=void(0)"> 태그가 많으면 불편할 수 있음.
// JS해결법) a태그.addEventListener('클릭',function(){}); 명령기준
// 1. 위 명령 function(매개변수) 입력
// 2. 매개변수.preventDefault(); //a의 기본기능 막기를 의미함.