import 'bootstrap';
import './css/main.scss';
import todoItems from './js/todoItem';
import domItems from './js/domObjects';

const projectList = todoItems.List;
projectList.name = 'Projects';

const sideBar = document.getElementById('left-sidebar');
sideBar.appendChild(domItems.ProjectList(projectList));

const title = document.querySelector('h3');

title.addEventListener('click', () => {
  console.log(projectList.name, projectList.items);
});

// allToDos.name = 'All';
// main.innerHTML = '';
// main.appendChild(domItems.TodoList(allToDos));
