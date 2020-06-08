import 'bootstrap';
import './css/main.scss';
import todoItems from './js/todoItem';
import domItems from './js/domObjects';

const allToDos = todoItems.List;
//allToDos.name = 'All';

const main = document.getElementById('main-section');
const upcoming = document.querySelector('.btn-upcoming');
upcoming.addEventListener('click', () => {
  main.innerHTML = '';
});


//main.appendChild(domItems.TodoList(allToDos));

// const listGroup = document.getElementById('list-group');
// const addTodo = document.getElementById('add-todo');
const btn = document.querySelector('.btn-all');

btn.addEventListener('click', () => {
  allToDos.name = 'All';
  main.innerHTML = '';
  main.appendChild(domItems.TodoList(allToDos));
});

// addTodo.addEventListener('click', () => {
//   const newToDo = todoItems.Item;
//   const li = domItems.TodoListItem(newToDo, allToDos);
//   listGroup.insertBefore(li.li, listGroup.firstChild);
//   li.startEdit();
// });
