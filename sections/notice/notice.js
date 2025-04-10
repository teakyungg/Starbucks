let carousel_item = document.querySelectorAll('#carousel .item');

/* 초기화 */
for(let i=0;i<carousel_item.length;i++){
    carousel_item[i].style.transform = 'translate(0 , 0)';
    carousel_item[i].style.transition = 'all 1s';
}

let add = 62;   // 이동 높이
let count = 0;  // 이동 횟수
let time = 3000; // 반복 시간

let carousel = setInterval(function(){
    
    for(let i=0;i<carousel_item.length;i++){

        // 각각의 이동 높이 = transfrom
        let transfrom = window.getComputedStyle(carousel_item[i]).transform;
        transfrom = parseInt(transfrom.split(',')[5]);
        carousel_item[i].style.transform = `translate(0,${transfrom - (add)}px)`
        carousel_item[i].style.transition = 'all 1s';

    }

    setTimeout(function(){

        count  = (count + 1) % (carousel_item.length + 1);
        if(count == 0) count = 1;

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
    

},time);

document.addEventListener('visibilitychange', () =>{

    if(document.visibilityState == 'hidden'){
        clearInterval(carousel);
    }

    else if(document.visibilityState == 'visible'){     
        carousel = setInterval(function(){
    
            for(let i=0;i<carousel_item.length;i++){
        
                // 각각의 이동 높이 = transfrom
                let transfrom = window.getComputedStyle(carousel_item[i]).transform;
                transfrom = parseInt(transfrom.split(',')[5]);
                carousel_item[i].style.transform = `translate(0,${transfrom - (add)}px)`
                carousel_item[i].style.transition = 'all 1s';
        
            }
        
            setTimeout(function(){
        
                count  = (count + 1) % (carousel_item.length + 1);
                if(count == 0) count = 1;
        
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
            
        
        },time);
    }

});