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