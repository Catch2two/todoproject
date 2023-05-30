
// Date-FNS
import * as dateFns from 'date-fns';
const formattedDate = dateFns.format(new Date(), 'yyyy-mm-dd');

function todolist() {
// Input Form
  const inputContainer = document.createElement('div');
  inputContainer.id = "inputContainer";

  const titleInput = document.createElement('input');
  titleInput.id = "titleInput";
  titleInput.required = true;
  titleInput.maxlength = 30;
  titleInput.placeholder = 'Task Name';

  const descriptionInput = document.createElement('textarea');
  descriptionInput.id = "descriptionInput";
  descriptionInput.required = true;
  descriptionInput.placeholder = 'Task Description';

// Time options for Dropdown
  const timeSelect = document.createElement('select');
  timeSelect.id = "timeSelect";
  timeSelect.required = true;
  timeSelect.options.add(new Option('Today'));
  timeSelect.options.add(new Option('Sunday'));
  timeSelect.options.add(new Option('Monday'));
  timeSelect.options.add(new Option('Tuesday'));
  timeSelect.options.add(new Option('Wednesday'));
  timeSelect.options.add(new Option('Thursday'));
  timeSelect.options.add(new Option('Friday'));
  timeSelect.options.add(new Option('Saturday'));

  
// Append Form Inputs
  inputContainer.appendChild(titleInput);
  inputContainer.appendChild(descriptionInput);
  inputContainer.appendChild(timeSelect);

// Add New Task Button
  const addButton = document.createElement('button');
  addButton.classList.add('addBtn');
  addButton.textContent = 'New Task';
  addButton.addEventListener('click', addNewTask);

  inputContainer.appendChild(addButton);

// Append whole Input Form
  document.getElementById('form').appendChild(inputContainer);
}


// Add New Task Cards ---------

function addNewTask() {
  const titleInput = document.getElementById('titleInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const timeSelect = document.getElementById('timeSelect');
  const contentDiv = document.getElementById('content');
  const form = document.getElementById('form');

  // Check if the input fields are empty
  if (titleInput.value === "" || descriptionInput.value === "") {
    alert("Please enter a title and description for your task.");
    return;
  }

// Create the task card
  const taskAdded = document.createElement('div');
  taskAdded.classList.add('taskAdded');
  taskAdded.textContent = titleInput.value;

// Append the Task Card to DOM
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('info');
  contentDiv.appendChild(cardInfo);
  cardInfo.appendChild(taskAdded);

  // Append the description input to the task card
  const description = document.createElement('p');
  description.textContent = descriptionInput.value;
  description.classList.add('description');
  taskAdded.appendChild(description);

  // Append Due Date
  const dueDate = document.createElement('div');
  dueDate.textContent = timeSelect.value;
  dueDate.classList.add('dueDate');
  taskAdded.appendChild(dueDate);

  // Checkboxes
  const priorityDiv = document.createElement('div');
  priorityDiv.id = "priority";
  const priority = ['Important', 'Minor', 'Completed'];

  priority.forEach((priority) => {
    let checkbox = document.createElement('input');
    checkbox.classList.add('checkBox');
    checkbox.type = 'checkbox';
    checkbox.textContent = priority;
    taskAdded.appendChild(checkbox);

    const prio = document.createElement('label');
    prio.htmlFor = checkbox.id;
    prio.textContent = priority;
    taskAdded.appendChild(prio);

    checkbox.style.color = `red`;
  });

  // X button (Delete)
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'x';
  deleteBtn.classList.add('deleteBtn');
  taskAdded.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', function() {
    const confirmDelete = confirm('Are you sure you want to delete this Task?');
    if (confirmDelete) {
    cardInfo.remove();
  }
    
  });

  //Clear Inputs
  titleInput.value = '';
  descriptionInput.value = '';
}
todolist();
export default todolist