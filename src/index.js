import todolist from './modules/todolist';
import banner from './modules/banner';

// Save the todolist.js file to localStorage
localStorage.setItem("todolist", todolist);

// Load the todolist.js file from localStorage
const todolistContent = localStorage.getItem("todolist");
// Save the todolist.js file to localStorage
localStorage.setItem("todolist", todolistContent);