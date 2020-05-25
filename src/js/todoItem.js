class TodoItem {
  constructor(title, description, dueDate, priority, checklist, done = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.done = done;
  }
}
