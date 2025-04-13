// 이동 할 요소들
let carousel_item = document.querySelectorAll('#carousel .item');

const add = 62;      // 이동 높이
const time = 3;      // 반복 시간(초)
const speed = 0.5;   // 이동 속도

// 이동 방향 결정하기 (오른쪽, 왼쪽, 위, 아래)

let count = 0;  // 이동 횟수
let inner_web = true;   // 웹 페이지 진입 확인

// 함수 , 나중에 이거 분리하기
function move(moving_value, repeat_time){

    // 처음 웹페이지 들어갈때
    if(inner_web){
        inner_web = false;

        // 초기화
        for(let i=0;i<carousel_item.length;i++){
            carousel_item[i].style.transform = 'translate(0,0)';
            carousel_item[i].style.transition = 'all 0s';
        }
    }

    // 상자를 이동한다.
    for(let i=0;i<carousel_item.length;i++){

        // 각각의 현재 위치의 높이값을 추출한다.
        let transfrom = window.getComputedStyle(carousel_item[i]).transform;
        transfrom = parseInt(transfrom.split(',')[5]);

        // 정해진 값 만큼 이동한다.
        carousel_item[i].style.transform = `translate(0,${transfrom - (moving_value)}px)`
        carousel_item[i].style.transition = `all ${speed}s`;
    }

    // 상자가 위로 절반 정도 올라가면 실행한다.
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

        // 위치를 초기화 한다.
        carousel_item[target].style.transform = `translate(0,${add * (carousel_item.length-(loc))}px)`;
        carousel_item[target].style.transition = 'all 0s';

    }, (repeat_time * 1000)/2);


}

// setInterval(func) -> func 자리에는 안에 함수가 들어가야한다.
// func() -> 이건 함수의 주소가 아니라 함수의 값을 반환하는 것이다.
// () => {func()} -> 이건 함수의 주소를 반환하는 표현식이다.
let carousel = setInterval(()=>{move(add,time)},(time * 1000));

// 탭 변경 시 설정
document.addEventListener('visibilitychange', () => {

    // 현재 페이지를 보고 있지 않다면
    if(document.visibilityState == 'hidden'){

        // 즉시 모든 transition을 정지해서 자리로 바로 오게한다.
        for(let i=0;i<carousel_item.length;i++){
            carousel_item[i].style.transition = 'all 0s';
        }

        // 반복 작업하는 함수를 멈춘다.
        clearInterval(carousel);
    }

    else if(document.visibilityState == 'visible'){

        // 반복 잡업하는 함수를 다시 실행하고 그 위치를 세팅한다. 
        carousel = setInterval(()=>{move(add,time)} ,(time * 1000));
    }

});