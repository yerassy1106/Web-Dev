const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (e) {
e.preventDefault();

const taskText = input.value.trim();
if (taskText === '') return;

addTask(taskText);
input.value = '';
});

function addTask(text) {
const li = document.createElement('li');

const leftPart = document.createElement('div');
leftPart.style.display = 'flex';
leftPart.style.alignItems = 'center';
leftPart.style.gap = '10px';

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';

const span = document.createElement('span');
span.textContent = text;

checkbox.addEventListener('change', function () {
span.classList.toggle('done');
});

leftPart.appendChild(checkbox);
leftPart.appendChild(span);

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';

deleteBtn.addEventListener('click', function () {
list.removeChild(li);
});

li.appendChild(leftPart);
li.appendChild(deleteBtn);

list.appendChild(li);
}
