const standardTheme = document.querySelector('.standard-theme');
const lightTheme = document.querySelector('.light-theme');
const darkerTheme = document.querySelector('.darker-theme');
const toDoInput = document.querySelector('.todo-input');
const toDoDesc = document.querySelector('.todo-description');
const toDoBtn = document.querySelector('.todo-btn');
const toDoList = document.querySelector('.todo-list');


standardTheme.addEventListener('click', () => changeTheme('standard'));
lightTheme.addEventListener('click', () => changeTheme('light'));
toDoBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', deletedrop);
let c='light';
function addToDo(event) {
    event.preventDefault();
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add('todo',`${c}-todo`);

    toDoDiv.setAttribute("draggable", "true");
    const newToDo = document.createElement('li');
    if (toDoInput.value === '') {
        alert("You must write something!");
    }
    else {
        
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add('todo-item');
        toDoDiv.appendChild(newToDo);


    
        const deleted = document.createElement('button');
        deleted.innerHTML = '<i class="fas fa-trash"></i>';
        deleted.classList.add('delete-btn');
        toDoDiv.appendChild(deleted);

        const checked = document.createElement('button');
        checked.innerHTML = '<i class="fa-solid fa-bars"></i>';
        checked.classList.add('drop-btn');
        toDoDiv.appendChild(checked);

        toDoList.appendChild(toDoDiv);
        toDoInput.value = '';
    }

}
function deletedrop(event) {
    const item = event.target;
    if (item.classList[0] === 'delete-btn') {
        item.parentElement.classList.add("fall");

        item.parentElement.addEventListener('transitionend', function () {
            item.parentElement.remove();
        })
    }

    if (item.classList[0] === 'drop-btn') {

    }


}



function search_items() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase().split(" ").join("");
    let x = document.getElementsByClassName('todo-item');
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().split(" ").join("").includes(input)) {
            
            let p1 = x[i].parentElement;
            p1.style.display = "none";
            
        }
        else {
            let p1 = x[i].parentElement;
            p1.style.display = "flex";
        }
    }
}


function changeTheme(color) {

    document.body.className = color;
    document.querySelector('input').className = `${color}-input`;
    if(`${color}`=='standard')
       document.querySelector('.todo-input').classList.replace('light-input',`${color}-input`);
    else
        document.querySelector('.todo-input').classList.replace('standard-input',`${color}-input`);
    document.querySelector('.todo').classList.add(`${color}-todo`);
}