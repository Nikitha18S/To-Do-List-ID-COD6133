document.getElementById('push').addEventListener('click', function() {
    var inputElement = document.querySelector('#newtask input');
    var taskName = inputElement.value.trim(); 
    if (taskName.length === 0) {
        alert("Kindly Enter Task Name!!!!");
    } else {
        var taskElement = document.createElement('div');
        taskElement.classList.add('task');
        var spanElement = document.createElement('span');
        spanElement.textContent = taskName;
        spanElement.id = "taskname";

        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';

        deleteButton.addEventListener('click', function() {
            taskElement.remove();
        });

        taskElement.appendChild(spanElement);
        taskElement.appendChild(deleteButton);

        document.getElementById('tasks').appendChild(taskElement);

        inputElement.value = '';
    }
});
