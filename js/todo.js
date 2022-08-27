const toDoForm = document.getElementById("todo-form"); //form
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list"); //ul
const TODOS_KEY = "todos";

// This is our toDo DB, not a Local Sotrage on the Browser
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos) );
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    // filtering 'the <li> removed' and then remake the toDo DB array
    // arr.filter 는 배열의 요소를 없애지 않는다. 다시 배열을 만든다.
    toDos = toDos.filter(item => item.id !== parseInt(li.id) );
    saveToDos(); // 다시 기록해야 local Storage에 반영되고 재접속 시 반영됨.
}

function paintToDo(newTodo){ //typeof newTodo = Obj
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    
    btn.addEventListener("click", deleteToDo);
    //console.log(li);
    li.appendChild(span);
    li.appendChild(btn); 
    toDoList.prepend(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// 만약 재접속 했을 때 Local Storage에 todos가 이미 있다면
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //transform to typeof array
    toDos = parsedToDos; // 재접속 시 이전의 것을 불러와 배열에 저장
    parsedToDos.forEach(paintToDo); // 배열 고차 함수
    // parsedToDos.forEach((ele, idx, arr) => console.log("this is ", item) );
}