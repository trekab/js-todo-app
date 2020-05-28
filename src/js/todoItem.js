
const Item = {
  title: '',
  description: '',
  dueDate: '',
  priority: 4,
  done: false,
};

const List = (name) => {
  const items = [];

  const addItems = (...args) => {
    args.forEach(i => items.push(i));
  };

  return { name, items, addItems };
};

// const store = (list) => {
//   window.localStorage.setItem('items', JSON.stringify(list.items));
// };

export default { Item, List };

