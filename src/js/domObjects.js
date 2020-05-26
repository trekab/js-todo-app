
const ListItem = (item) => {
  const li = document.createElement('li');
  const liTitle = document.createElement('input');
  const liTitleDiv = document.createElement('div');
  const liCheck = document.createElement('i');
  const liDelete = document.createElement('i');
  const liCaret = document.createElement('i');
  const toggleDetails = document.createElement('a');
  //const toggleDetailsIcon = document.createElement('i');

  toggleDetails.classList = 'p-1 d-block';
  toggleDetails.href = '#item-details-form';
  toggleDetails.role = 'button';
  toggleDetails['aria-expanded'] = 'false';
  toggleDetails['aria-controls'] = 'item-details-form';
  //toggleDetailsIcon.classList = 'fas fa-chevron-down d-block mr-1';
  toggleDetails.appendChild(liCaret);

  liTitleDiv.classList = 'd-flex justify-content-between align-items-center';
  liDelete.classList = 'fas fa-times';
  li.classList = 'list-group-item';
  liCheck.classList = 'far fa-circle m-2';
  liCaret.classList = 'fas fa-chevron-down d-block m-2';
  liTitle.classList = 'w-100 item-title';

  liTitle.type = 'text';
  liTitle.placeholder = 'Enter task title...';

  liCheck.addEventListener('click', () => {
    liCheck.classList.toggle('fa-check-circle');
    liCheck.classList.toggle('fa-circle');
  });

  liTitleDiv.appendChild(liCheck);
  liTitleDiv.appendChild(liTitle);
  liTitleDiv.appendChild(liDelete);
  liTitleDiv.appendChild(toggleDetails);

  

  li.appendChild(liTitleDiv);

  const startEdit = () => {
    setTimeout(() => {
      liTitle.focus();
    }, 100);
  };

  return { li, startEdit };
};

export default { ListItem };