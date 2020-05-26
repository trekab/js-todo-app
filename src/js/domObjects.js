
const ListItem = (id) => {
  const li = document.createElement('li');
  const liTitle = document.createElement('input');
  const liTitleDiv = document.createElement('div');
  const liCheck = document.createElement('i');
  const liDelete = document.createElement('i');
  const liCaret = document.createElement('i');
  const toggleDetails = document.createElement('a');
  const liDetail = document.createElement('div');
  const liDetailTop = document.createElement('div');
  const liDetailBottom = document.createElement('div');
  const liDescription = document.createElement('textarea');
  liDescription.placeholder = 'Enter task details...'
  const liDueDate = document.createElement('div');
  const liPriority = document.createElement('div');
  const liButtons = document.createElement('div');
  const liDateLbl = document.createElement('label');
  liDateLbl.innerHTML = 'Due';
  const liPriorityLbl = document.createElement('label');
  liPriorityLbl.innerHTML = 'Priority';
  const liDateInput = document.createElement('input');
  liDateInput.type = 'date';
  const liPriorityInput = document.createElement('select');
  const saveBtn = document.createElement('i');
  const cancelBtn = document.createElement('i');


  liDetail.classList = '';
  liDetailTop.classList = 'form-group d-flex border-top border-2';
  liDetailBottom.classList = 'form-inline d-flex justify-content-around border-top border-2';
  liDescription.classList = 'w-100 border-0';
  liDueDate.classList = 'form-group';
  liPriority.classList = 'form-group d-flex flex-no-wrap';
  liDateLbl.classList = 'pr-1';
  liDateInput.classList = 'border-0';
  liPriorityLbl.classList = 'form-control border-0 pr-1';
  liPriorityInput.classList = 'form-control border-0';
  saveBtn.classList = 'fas fa-times-circle text-danger m-1';
  cancelBtn.classList = 'fas fa-check-circle text-success m-1';

  for (let index = 1; index < 5; index++) {
    const opt = document.createElement('option');
    opt.innerHTML = index;
    liPriorityInput.appendChild(opt);
  }

  liButtons.appendChild(cancelBtn);
  liButtons.appendChild(saveBtn);
  liPriority.appendChild(liPriorityLbl);
  liPriority.appendChild(liPriorityInput);
  liDueDate.appendChild(liDateLbl);
  liDueDate.appendChild(liDateInput);
  liDetailTop.appendChild(liDescription);
  liDetailBottom.appendChild(liDueDate);
  liDetailBottom.appendChild(liPriority);
  liDetailBottom.appendChild(liButtons);
  liDetail.appendChild(liDetailTop);
  liDetail.appendChild(liDetailBottom);

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
  li.classList = 'list-group-item p-0';
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
  li.appendChild(liDetail);

  const startEdit = () => {
    setTimeout(() => {
      liTitle.focus();
    }, 100);
  };

  return { li, startEdit };
};

export default { ListItem };