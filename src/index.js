import 'bootstrap';
import './css/main.scss';
import todoItems from './js/todoItem';
import domItems from './js/domObjects';


const listGroup = document.getElementById('list-group');
const addTodo = document.getElementById('add-todo');
const allToDos = todoItems.List;
allToDos.name = 'All';
const btn = document.querySelector('.btn-all');

btn.addEventListener('click', () => {
  console.log(allToDos);
});

// addTodo.addEventListener('click', () => {
  const newToDo = todoItems.Item;
  const li = domItems.TodoListItem(newToDo, allToDos);
  listGroup.insertBefore(li.li, listGroup.firstChild);
  li.startEdit();
// });
