document.getElementById("main").innerHTML = "ToDo List";

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value;

    if (taskText !== '') { 
        const listItem = document.createElement('li');

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create a label for the task text
        const label = document.createElement('label');
        label.textContent = taskText;

        const editbutton = document.createElement('button');
        editbutton.textContent= 'Edit';

        const deletebutton = document.createElement('button');
        deletebutton.textContent = 'delete';

        // Append checkbox and label to the list item
        listItem.appendChild(label);
        listItem.appendChild(checkbox);
        listItem.appendChild(editbutton);
        listItem.appendChild(deletebutton);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';

        // Attach event listener to the checkbox for marking tasks as completed
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                label.style.textDecoration = 'line-through'; // Strike through the label text when checked
                taskList.appendChild(listItem);
 
            } else {
                label.style.textDecoration = 'none'; // Remove strike through when unchecked
            }
        });
        // Attach event listener to the edit button for editing the task
        editbutton.addEventListener('click', function() {
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = label.textContent;
            
            // Replace the label with the edit input field
            listItem.replaceChild(editInput, label);

            // Save the edited task text when the user presses Enter  
            editInput.addEventListener('blur', function() {
                label.textContent = editInput.value;
                listItem.replaceChild(label, editInput);
            });
            editInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    label.textContent = editInput.value;
                    listItem.replaceChild(label, editInput);
                }
            });
    });
    // Attach event listener to the delete button for deleting the task
    deletebutton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });


        
    } else{
        alert ("Enter Something...");
    }
}

// Attach click event listener to the add button
addButton.addEventListener('click', addTask);

// Optionally, allow pressing Enter key to add task
taskInput.addEventListener('keydown', function(event) 
{
    if (event.key === 'Enter' || event.key === 'Alt' ||( (event.ctrlKey)&&(event.key=== '2'))) 
    {
        addTask();
    }
});
