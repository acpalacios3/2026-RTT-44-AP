***SBA Task Management App***
**Overview**
In this assessment, you will build a Task Management App that allows users to add tasks with deadlines, assign categories, and update the status of each task. This app will require you to apply a wide range of JavaScript concepts, including arrays, objects, DOM manipulation, conditionals, and local storage to persist the task data.

**Objective**

create a dynamic task management app that lets users:

1. Add new tasks with details such as the task name, category, deadline, and status.
2. Update the status of tasks to reflect their progress (e.g., “In Progress,” “Completed,” “Overdue”).
3. Automatically update task status based on the current date (tasks past their deadline will be marked as “Overdue”).
4. Filter tasks by status or category.
5. Persist task data using local storage so tasks are saved even after refreshing the page.


***How the app works and additional features ***

**New Task:**

If the task date is earlier than today, it will always be created with the status "Overdue".
If the task date is later than today, it can be created with the statuses "Completed" or "In Progress".
After creating the new task, the taskStatus() function will be called so that it changes the status to "Overdue" for tasks with past due dates, as long as their status is not "Completed".


**Existing Task:**
The status of tasks with a date greater than or equal to the current date can be changed. They can have the statuses "In Progress" or "Completed".
A task with the status "Overdue" cannot have its status changed. To allow this, an additional feature would need to be added to request authorization to change the task status. However, that functionality is not part of this requirement.


**Testing Considerations:**
To verify that creating a new task updates the status of overdue tasks to "Overdue", test data was created in taskList. This test data should be uncommented in the code for testing and then commented out again so that the application uses the data stored in localStorage.
An additional button was created to clear the data from localStorage and perform the corresponding tests.