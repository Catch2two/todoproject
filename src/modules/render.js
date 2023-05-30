const render = function() {
    const content = document.querySelector('#content');
  
    const tasks = document.createElement('div');
    tasks.textContent = 'Important Tasks';
    tasks.style.border = '1px solid black';
    tasks.style.padding = '10px';
    content.appendChild(tasks);
  
    const task1 = document.createElement('div');
    task1.textContent = 'Task 1';
    task1.style.border = '1px solid gray';
    task1.style.padding = '5px';
    tasks.appendChild(task1);
  
    const task2 = document.createElement('div');
    task2.textContent = 'Task 2';
    task2.style.border = '1px solid gray';
    task2.style.padding = '5px';
    tasks.appendChild(task2);
  
    const task3 = document.createElement('div');
    task3.textContent = 'Task 3';
    task3.style.border = '1px solid gray';
    task3.style.padding = '5px';
    tasks.appendChild(task3);
  }

export default render;