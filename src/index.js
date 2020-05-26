import './css/main.scss';
import 'bootstrap';
import todoItem from './js/todoItem';
import domItems from './js/domObjects';

const todo = document.getElementById('add-todo');
const listGroup = document.getElementById('list-group');

todo.addEventListener('click', () => {
  const li = domItems.ListItem();
  listGroup.insertBefore(li.li, listGroup.firstChild);
  li.startEdit();
});