
var buttonEl = document.querySelector(".btn");
var tasksToDoEl = document.querySelector("#tasks");
var itemToDoEl = document.querySelector("#item-to-do")

  var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = itemToDoEl.value 
    tasksToDoEl.appendChild(listItemEl);
    alert("add it")
  }
  
  buttonEl.addEventListener("click", createTaskHandler);