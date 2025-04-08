let carousel_item = document.querySelector('#carousel .box');
const max = carousel_item.querySelectorAll('div').length;

let add = 20;
let count = 0;

let button = document.querySelector('button'); 

/* button.addEventListener('click',function(){

    count = (count + 1) % (carousel_item.length + 1);

    for(let i=0;i<carousel_item.length;i++){
        carousel_item[i].style.transition = 'all 1s';
        carousel_item[i].style.transform = `translate(0, ${-(add * count)}px)`;       
    }

    if(count == carousel_item.length){

        setTimeout(function(){

            for(let i=0;i<carousel_item.length;i++){
                carousel_item[i].style.transition = 'none';
                carousel_item[i].style.transform = `translate(0, ${add}px)`;       
            }

            setTimeout(function(){

                for(let i=0;i<carousel_item.length;i++){
                    carousel_item[i].style.transition = 'all 1s';
                    carousel_item[i].style.transform = `translate(0, ${(0)}px)`;       
                }

                count++;
    
            },10); 

        },500);


       
    }

});  */


button.addEventListener('click',function(){

    count++;
    carousel_item.style.transform = `translate(0, ${-(count * add)}px)`;
    carousel_item.style.transition = 'all 1s';
    
    if(count == max){

        count = 0;

        setTimeout(function(){
        carousel_item.style.transform = `translate(0, ${add}px)`;
        carousel_item.style.transition = 'none';


        setTimeout(function(){
            carousel_item.style.transform = `translate(0, ${0}px)`;
            carousel_item.style.transition = '1s all';
        },10);

       },500);

    } 

})

let time = 2000;

setInterval(function(){

    count++;
  
    if(count >= max){
       
        /* console.log("마지막 이동중"); */

        /* 위로 절반 정도 가면 */
        carousel_item.style.transform = `translate(0, ${-(count * add)}px)`;
        carousel_item.style.transition = `all ${(time/4) / 1000}s`; 

        /* 맨 밑으로 위치를 옮기고 */
        setTimeout(function(){
            carousel_item.style.transform = `translate(0, ${(add)}px)`;
            carousel_item.style.transition = `none`; 

            /* 얀간의 텀을 주고 그 다음에 올라가기 */
            setTimeout(function(){
                carousel_item.style.transform = `translate(0, 0px)`;
                carousel_item.style.transition = `all 0.5s`; 
            }, 0);

        },(time/4))
       
        count = 0;

    }
    
    else{
        carousel_item.style.transform = `translate(0, ${-(count * add)}px)`;
        carousel_item.style.transition = `all ${(time/2) / 1000}s`;
    }

},time);
