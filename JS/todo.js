let todoList = [
    {item : 'Buy milk' , dueDate : '2024/01/11' } ,
    {item : 'Buy Brade' , dueDate : '2024/01/11' } 
];

function addTodo(){
    let inp = document.querySelector('#todo-input');
    let inpVal = inp.value;
    let dueDate = document.querySelector('#todo-date').value;

    todoList.push({item : inpVal , dueDate : dueDate});
    inp.value = '';
    console.log(todoList);
    showTodo();
}   

function showTodo(){
    let showList = document.querySelector('#show-todo');
    let = newHtml = '';
    // showList.innerText ='';
    for(let i=0; i<todoList.length; i++){
        // showList.innerText = showList.innerHTML + ' \n' + todoList[i];
        let = {item , dueDate} = todoList[i];
        newHtml += ` 
        <div>
            <span> ${item} </span>
            <span> ${dueDate} </span>
            <button onClick = "todoList.splice(${i} , 1); showTodo();" > Delete </button>
        </div>
            `;
    }
    showList.innerHTML = newHtml;
}