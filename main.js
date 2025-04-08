let side = document.getElementById("side-bar");
let side_max_height = document.body.scrollHeight * (30/100); /* 전체 높이의 30% */
let first_scroll = false;

/* side-bar */
window.addEventListener('scroll',function(){

    if(!first_scroll)
    {
        first_scroll = true;
        return;
    }
    
    if(window.scrollY > side_max_height){ 
        side.style.opacity = '0';
        side.style.pointerEvents = 'none';
        side.style.transition = 'all 0.5s ease';
    }

    else { 
        side.style.display = 'flex';
        side.style.opacity = '1';
        side.style.pointerEvents = 'auto';
    }

})


/* inner img */
let fade = document.getElementsByClassName("fade");

for(let i=1;i<=fade.length;i++){
    
    fade[i-1].style.opacity = 0;
    let opacity = 0;

    setTimeout(() => {

        for(let j=0;j<1000;j++){

            setTimeout(() => {
                opacity += 0.01;
                fade[i-1].style.opacity = opacity;
            },j*10);
            
        }
    
    },1000 * i)
}

/* carousel */
// 나중에 정리하기
let carousel_item = document.querySelectorAll('#carousel .item');

/* 초기화 */
for(let i=0;i<carousel_item.length;i++){
    carousel_item[i].style.transform = 'translate(0 , 0)';
    carousel_item[i].style.transition = 'all 1s';
}

let add = 62;   // 이동 높이
let count = 0;  // 이동 횟수
let time = 3000; // 반복 시간

setInterval(function(){

    for(let i=0;i<carousel_item.length;i++){

        // 각각의 이동 높이 = transfrom
        let transfrom = window.getComputedStyle(carousel_item[i]).transform;
        transfrom = parseInt(transfrom.split(',')[5]);
        carousel_item[i].style.transform = `translate(0,${transfrom - (add)}px)`
        carousel_item[i].style.transition = 'all 1s';
    
        setTimeout(function(){

            let target = count - 1;
            let loc = count;

            if(target == -1) 
            {
                target = carousel_item.length - 1;
                loc = 1;
            }

            carousel_item[target].style.transform = `translate(0,${add * (carousel_item.length-(loc))}px)`;
            carousel_item[target].style.transition = 'none';

          
           
        },time/2);
    }


    count  = (count + 1) % (carousel_item.length + 1);
    if(count == 0) count = 1;

},time);
 

    
   