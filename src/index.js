import './css/main.scss';
import 'bootstrap';
import todoItem from './js/todoItem';

const todo = document.getElementById('add-todo');
const listGroup = document.getElementById('list-group');

todo.addEventListener('click', () => {
  //const itemObject = new todoItem();
  const item = document.createElement('li');
  item.classList = 'list-group-item d-flex justify-content-between';
  const itemSpan = document.createElement('input');
  itemSpan.type = 'text';
  itemSpan.placeholder = "Exter task details."
  //itemSpan.innerHTML = 'Type task details';
  itemSpan.contentEditable = true;
  const itemIcon = document.createElement('i');
  itemIcon.classList = 'far fa-circle check-icon';
  itemIcon.addEventListener('click', () => {
    if(itemIcon.classList.contains('fa-check-circle')){
      itemSpan.style.textDecoration = 'none';
      itemIcon.classList.remove('fa-check-circle');
      itemIcon.classList.add('fa-circle');
    } else {
      itemSpan.style.textDecoration = 'line-through';
      itemIcon.classList.remove('fa-circle');
      itemIcon.classList.add('fa-check-circle');
    }
  });
  item.appendChild(itemSpan);
  item.appendChild(itemIcon);
  listGroup.insertBefore(item, listGroup.firstChild);
  itemSpan.focus();
});
