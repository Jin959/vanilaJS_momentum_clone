const loginForm = document.querySelector("#login-form"); // the form
const loginInput = document.querySelector("#login-form input"); // CSS combinator 후손 셀렉터
const greeting = document.querySelector("#greeting"); // the h1

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(e){ // event or e : 이벤트 객체
  // form 태그의 submit 이벤트 발생시 기본적으로 페이지가 이동되는 것을 막는다.
  e.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // show the greetings
  paintGreetings(username);
}

// show the greetings like `Hellow + name`
function paintGreetings(username){
  //greeting.innerHTML= "Hello "+ username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
//console.log(savedUsername);

if(savedUsername === null){
  // show the from
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // <form>태그 내의 두번째 <input>태그인 submit 이벤트 발동시 처리한다.
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}