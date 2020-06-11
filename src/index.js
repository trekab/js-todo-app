import 'bootstrap';
import './css/main.scss';
import todoItems from './js/todoItem';
import domItems from './js/domObjects';

let projectList

if (localStorage.getItem('projectlist')) {
  projectList = JSON.parse(localStorage.getItem('projectlist'));
} else {
  projectList = todoItems.List;
  projectList.name = 'Projects';
}
localStorage.setItem('projectlist', JSON.stringify(projectList));

const sideBar = document.getElementById('left-sidebar');
sideBar.appendChild(domItems.ProjectList(projectList));

const title = document.querySelector('h3');

title.addEventListener('click', () => {
  localStorage.setItem('projectlist', JSON.stringify(projectList));
});

