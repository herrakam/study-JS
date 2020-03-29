const clockContainer = document.querySelector(".js-clock");
const clock=clockContainer.querySelector("h1");

function getTime(){ // 시간 실시간으로 보여주기
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    clock.innerText = `${hour <10 ?  `0${hour}` : hour}:${minute <10 ? `0${minute}` : minute}:${second<10 ?  `0${second}` : second}`;
}
function init(){
    setInterval(getTime,1000); // 1000ms 당 한번씩 getTime을 실행해라
}

init();