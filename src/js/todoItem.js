
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

export default { Item, List };
