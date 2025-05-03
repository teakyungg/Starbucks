let side = document.getElementById("side-bar");
let side_max_height = document.body.scrollHeight * (30/100); /* 전체 높이의 30% */
let first_scroll = false;

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