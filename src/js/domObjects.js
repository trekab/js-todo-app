
const ListItem = (item) => {
  const li = document.createElement('li');
  const liTitle = document.createElement('input');
  const liCheck = document.createElement('i');
  const liCaret = document.createElement('i');

  li.classList = 'list-group-item d-flex justify-content-between px-1 align-items-center';
  liCheck.classList = 'far fa-circle d-none';
  liCaret.classList = 'fas fa-chevron-down d-block';
  liTitle.classList = 'w-100 item-title';

  liTitle.type = 'text';
  liTitle.placeholder = 'To do...';

  liCheck.addEventListener('click', () => {
    liCheck.classList.toggle('fa-check-circle');
    liCheck.classList.toggle('fa-circle');
  });

  li.appendChild(liTitle);
  li.appendChild(liCaret);
  li.appendChild(liCheck);

  const startEdit = () => {
    setTimeout(() => {
      liTitle.focus();
    }, 100);
  };

  return { li, startEdit };
};

export default { ListItem };