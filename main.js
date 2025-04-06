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

