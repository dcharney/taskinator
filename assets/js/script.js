var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // add entire list item to list
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //listItemEl.textContent = taskNameInput;
    
    //create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    //give it a class name
    taskInfoE1.className = "task-info";
    //add html content to div
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoE1);
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);