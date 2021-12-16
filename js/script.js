'use scrict'

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');


let toDoData = [];


const start = function() {
    if (localStorage.length != 0) {
        toDoData = JSON.parse(localStorage.getItem('list')); // берем данные из localStorage

        render(); // запускаем
    } else {
        alert('Задач пока нет');
    }

}

const render = function() {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';

    toDoData.forEach(function(item, index) { // создаем элементы из массива
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' + '<div class="todo-buttons">' + '<button class="todo-remove"></button>' + '<button class="todo-complete"></button>' + '</div>';

        if (item.complited) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        li.querySelector('.todo-complete').addEventListener('click', function() {
            item.complited = !item.complited;

            render();
        });

        const btn = li.querySelector('.todo-remove');

        btn.addEventListener('click', function(){
            toDoData.splice(index);
            render();
        })

        localStorage.setItem('list', JSON.stringify(toDoData));
    })
}

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    const newToDo = {
        text: headerInput.value,
        complited: false,
    }

    if (headerInput.value != '') {
        toDoData.push(newToDo);
    }

    headerInput.value = '';

    render();
})

start();