const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser";
const SHOWING_CLASSNAME = "showing";

function helloGreeting(text){//hello 이름 띄우기 
    form.classList.remove(SHOWING_CLASSNAME); //이름 입력 받는 칸 지우기
    greeting.classList.add(SHOWING_CLASSNAME);// greeting div 꺼내기  
    greeting.innerText = `hello ${text}`; // hello 이름 입력

}

function saveName(text){ // 이름저장하기
    localStorage.setItem(USER_LS,text);
}

function controlsubmit(event){ // 제출됬을 때 새로고침 멈추고 이름 저장하기
    event.preventDefault(); //input default 값 초기화
    const currentValue = input.value; //제출되는 value값 
    helloGreeting(currentValue); // value값으로 hello 이름 띄우기
    saveName(currentValue); //local storage에 value 값 저장

}
function askName(){ // 이름 물어보기
    form.classList.add(SHOWING_CLASSNAME);
    form.addEventListener("submit", controlsubmit); 

}

function loadName(){
const currentUser = localStorage.getItem(USER_LS); // local-storage에서 이름 정보 가져오기
if (currentUser === null){
   askName();
}
else{
    helloGreeting(currentUser);
}
}

function init(){
loadName(); // 이름 가져와서 hello 이름 출력하기
}

init();