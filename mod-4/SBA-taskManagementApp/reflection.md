***Reflection:***

**Challenges faced during the project.***

One of the main challenges I faced during this project was first understanding how to work with the DOM and events, such as how to create tasks and set  dynamically their values in HTML, and then focusing on the logic, for example, how to manage task statuses based on their deadlines. I needed to make sure that new tasks with dates earlier than the current date were automatically created with the status "Overdue" and that existing tasks were updated correctly without changing tasks that already had the status "Completed". Another challenge was working with localStorage and making sure the application correctly loaded and saved the task list.

**How you approached solving those challenges.**

I approached these challenges by breaking the requirements into smaller functions and testing each part separately. I used test data in the taskList array to verify different dates and statuses. I also created a button to clear localStorage, which made it easier to repeat the tests and verify the application's behavior.


**What you would improve if given more time.**
If I had more time, I would improve the validation, design, and presentation for the user. I would also add a confirmation or authorization feature before allowing the status of an "Overdue" task to be changed.