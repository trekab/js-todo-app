import 'bootstrap';
import './css/main.scss';
import todoItems from './js/todoItem';
import domItems from './js/domObjects';


const listGroup = document.getElementById('list-group');
const addTodo = document.getElementById('add-todo');
const allList = todoItems.List('All'); 
const btn = document.querySelector('.btn-all');

btn.addEventListener('click', () => {
  console.log(allList);
});

addTodo.addEventListener('click', () => {
  const newToDo = todoItems.Item;
  const li = domItems.TodoListItem(newToDo, allList);
  listGroup.insertBefore(li.li, listGroup.firstChild);
  li.startEdit();
});
