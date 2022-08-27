const toDoForm = document.getElementById("todo-form"); //form
const toDoInput = toDoForm.querySelector("input"); // form 태그 자손 input
const toDoList = document.getElementById("todo-list"); //ul
const TODOS_KEY = "todos";

// This is our toDo DB, not a Local Sotrage on the Browser
// 우리의 DB인 toDos는 Obj로 이루어진 배열이다.
let toDos = [];

function saveToDos(){
    //localStorage.setItem(TODOS_KEY, toDos);  // broser에서 인식할 수 없음.
    // toDos 배열을 통째로 다시 저장한다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos) );
}

function deleteToDo(e) {
    const li = e.target.parentElement; // e.target === button
    li.remove();
    // filtering 'the <li> removed' and then remake the toDo DB array
    // arr.filter 는 배열의 요소를 없애지 않는다. 다시 배열을 만들어 반환한다.
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

    li.appendChild(span);
    li.appendChild(btn); 

    console.log('In paintToDo func; Before prepend(li), li.parentElement === ', li.parentElement);
    // 요소 노드의 자식 위치에 추가하는데 첫번째 노드 앞에 추가한다. To Do List가 밑에서 위로 쌓인다.
    toDoList.prepend(li);
    // append를 사용하면 마지막 노드 뒤에 추가된다. To Do List가 위에서 밑으로 확장된다.
    //toDoList.append(li);

    console.log('In paintToDo func; After prepend(li), li.parentElement === ', li.parentElement);
}

function handleToDoSubmit(e) {
    e.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";  // init
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // 우리의 DB인 toDos는 Obj로 이루어진 배열이다.
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// 만약 재접속 했을 때 Local Storage에 todos가 이미 있다면
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //array[JSON] -> array[javascript.Obj]
    toDos = parsedToDos; // 재접속 시 이전의 것을 불러와 배열에 저장
    parsedToDos.forEach(paintToDo); // 배열 고차 함수
    // parsedToDos.forEach((ele, idx, arr) => console.log("this is ", item) );
}