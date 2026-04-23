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