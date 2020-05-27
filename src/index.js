import 'bootstrap';
import './css/main.scss';
import todoItems from './js/todoItem';
import domItems from './js/domObjects';


const listGroup = document.getElementById('list-group');
const addTodo = document.getElementById('add-todo');
const btn = document.querySelector('.btn-all');
const td = todoItems.Item;

btn.addEventListener('click', () => {
  console.log(td);
});

addTodo.addEventListener('click', () => {
  const li = domItems.TodoListItem(td);
  listGroup.insertBefore(li.li, listGroup.firstChild);
  li.startEdit();
});
