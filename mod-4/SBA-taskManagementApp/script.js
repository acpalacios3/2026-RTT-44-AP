
// 1. Adding New Tasks
// Create input fields for the task name, category, deadline, and an initial status (e.g., “In Progress”).
// Include an “Add Task” button that will add the task to the task list.
// Each task should be stored as an object with properties such as task name, category, deadline, and status.
// Add the task object to an array that holds all tasks.

// let taskList = [];


// ****************************************************************************
// test data to verify that when adding a new task the taskStatus() function 
// is executed to change overdue tasks to Overdue status.
// ****************************************************************************

// let taskList = [
//     {
//         task: 'SBA2',
//         category: 'CSS',
//         deadline: '2024-09-01',
//         status: 'Overdue'
//     },
//     {
//         task: 'SBA3',
//         category: 'JavaScript',
//         deadline: '2025-09-25',
//         status: 'In Progress'
//     },
//     {
//         task: 'SBA4',
//         category: 'HTML',
//         deadline: '2026-09-30',
//         status: 'Completed'
//     }
//     ,
//     {
//         task: 'SBA5',
//         category: 'HTML',
//         deadline: '2026-10-30',
//         status: 'In Progress'
//     }
//     ,
//     {
//         task: 'SBA6',
//         category: 'HTML',
//         deadline: '2026-11-30',
//         status: 'Completed'
//     }
// ];

// get the tasks back.
let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

const today = new Date;
const ftoday = today.toISOString().split("T")[0];

// get input values 

let taskInput = document.getElementById("taskInput");
let categoryInput = document.getElementById("categoryInput");
let deadlineInput = document.getElementById("deadlineInput");
let statusInput = document.getElementById("statusInput");

let addTaskButton = document.getElementById("addTaskButton");

console.log(taskList);

function addTask() {

    let task = taskInput.value;
    let category = categoryInput.value;
    let deadline = deadlineInput.value;
    let status = statusInput.value;
    // alert(task);
    if (task !== "" && category !== "" && deadline !== "" && status !== "") {

        // use if when creating the task for the first time
        if (ftoday > deadline) {
            status = "Overdue";
        }

        let newtask = {
            task,
            category,
            deadline,
            status

        };

        // send the task list to the array



        taskList.push(newtask);

        // It saves tasks in the browser, takes the taskList and turns it into text
        localStorage.setItem("taskList", JSON.stringify(taskList));

        taskInput.value = "";
        categoryInput.value = "";
        deadlineInput.value = "";
        statusInput.value = "";

        console.log(taskList);

        // Dynamically update the task list in the browser each time a new task is added
        taskStatus();


    } else {

        alert("Please enter a task")
        return;
    }
    // display task in HTML
    displayList(taskList);
}

// 2. Displaying the Task List
// Create an HTML structure (such as an unordered list or table) to display the task list.
// For each task, display the task name, category, deadline, and status.
// Dynamically update the task list in the browser each time a new task is added or a status is updated.

let taskListElement = document.getElementById("taskList");

function displayList(listFilter = taskList) {
    //delete items from the list in HTML
    taskListElement.innerHTML = "";

    listFilter.forEach(function (item) {
        let taskItem = document.createElement("li");

        // taskItem.innerText =
        //         "Task: " + item.task +
        //         " || Category: " + item.category +
        //         " || Deadline: " + item.deadline +
        //         " || Status: ";

        let taskText = document.createElement("span");
        taskText.innerText = item.task;

        let categoryText = document.createElement("span");
        categoryText.innerText = item.category;

        let deadlineText = document.createElement("span");
        deadlineText.innerText = item.deadline;

        let statusText = document.createElement("span");
        statusText.innerText = item.status;


        //***************************** */ 
        // status select for EACH TASK
        /******************************* */
        let statusSelect = document.createElement("select");

        statusSelect.innerHTML = `
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Overdue">Overdue</option>
        `;

        statusSelect.value = item.status;
        //change status this task
        statusSelect.addEventListener("change", function () {


            if (item.deadline >= ftoday) {

                if (item.status === "Completed" && statusSelect.value === "In Progress") {
                    item.status = "In Progress";
                    localStorage.setItem("taskList", JSON.stringify(taskList));
                }

                if (item.status === "In Progress" && statusSelect.value === "Completed") {
                    item.status = "Completed";
                    localStorage.setItem("taskList", JSON.stringify(taskList));
                }
            } else {
                statusSelect.value = item.status;
                taskStatus();

            }

            // display list task
            displayList();

        });

        // add elements to li
        taskItem.appendChild(taskText);
        taskItem.appendChild(categoryText);
        taskItem.appendChild(deadlineText);
        taskItem.appendChild(statusText);
        taskItem.appendChild(statusSelect);

        // add li to ul

        taskListElement.appendChild(taskItem);

    });
}

// button execute funcion addTask
addTaskButton.addEventListener("click", addTask);
console.log(taskList);

// function status
function taskStatus() {

    //    console.log(ftoday);

    for (let i = 0; i < taskList.length; i++) {
        
        if (ftoday > taskList[i].deadline && taskList[i].status !== "Completed" && taskList[i].status !== "Overdue"
        ) {
            // alert(i + "overdue");
            taskList[i].status = "Overdue";
            localStorage.setItem(
                "taskList",
                JSON.stringify(taskList)
            );
        }
    }

}

let filterStatus = document.getElementById("filterStatus");

// function searches within taskList for tasks that have a certain status.
function filterItems(statusToSearch) {

    return taskList.filter(function (item) {
        return item.status === statusToSearch;
    });
}

filterStatus.addEventListener("change", function () {

    if (filterStatus.value === "all") {

        //display all tasks
        displayList(taskList);
    } else {
        let filteredTasks = filterItems(filterStatus.value);
        // display the filtered tasks by status
        displayList(filteredTasks);
    }

});

let clearButton = document.getElementById("clearButton");

// clears all tasks from localStorage and taskList

clearButton.addEventListener("click", function () {
    localStorage.removeItem("taskList");
    taskList = [];
    displayList();
});

displayList();

