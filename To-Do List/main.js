const input = document.getElementById('input-task');
const taskList = document.getElementById('task-list');
let storage = JSON.parse(localStorage.getItem("tasks")) || [];

loadTasks()

document.getElementById('add-task-button').addEventListener('click', function () {
    const task = input.value;
    if (task.length !== 0) {
        taskList.appendChild(createTask(task));
        input.value = '';
    }
});

document.getElementById('clear-storage-button').addEventListener('click', function () {
    storage = []
    localStorage.clear()
    document.getElementById('task-list').innerHTML = ''
});

function createTask(task) {
    const root = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const button = document.createElement('button');
    input.setAttribute('type', 'checkbox');
    span.setAttribute('class', 'task');
    span.append(task);
    button.setAttribute('class', 'delete-btn');
    button.setAttribute('onclick', 'removeTask(this)');

    for (const elem of [input, span, button])
        root.appendChild(elem);

    if (!storage.includes(task)) {
        storage.push(task);
        localStorage.setItem("tasks", JSON.stringify(storage));
    }

    return root;
}

function removeTask(obj) {
    obj.parentNode.remove();
    let index = storage.indexOf(obj.parentNode.getElementsByClassName('task').value);
    storage.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(storage));
}

function loadTasks() {
    for (const task of storage)
        taskList.appendChild(createTask(task));
}

