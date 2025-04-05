let side = document.getElementById("side-bar");
let side_max_height = document.body.scrollHeight * (30/100); /* 전체 높이의 30% */

/* side-bar */
window.addEventListener('scroll',function(){
    
    if(this.window.scrollY > side_max_height){ 
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