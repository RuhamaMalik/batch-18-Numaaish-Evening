// let li = document.createElement('li');
// let text = document.createTextNode("Apple");

// li.setAttribute('class','list')
// li.appendChild(text);

// let ul = document.getElementById("ul");
// ul.appendChild(li);

////////////////// Todo

let ul = document.getElementById('ul');

/////////// create task 

function addTsk() {
  let task = document.getElementById('task');
  if (task.value === "") {
    alert('Enter Your Task!');
  } else {

    let li = document.createElement('li');
    let text = document.createTextNode(task.value);
    li.appendChild(text);

    let dltBtn = document.createElement('button');
    let text1 = document.createTextNode('Delete');
    dltBtn.appendChild(text1);
    dltBtn.setAttribute('onclick', 'deleteTask(this)');
    li.appendChild(dltBtn);

    let editBtn = document.createElement('button');
    let text2 = document.createTextNode("Edit");
    editBtn.appendChild(text2);
    editBtn.setAttribute('onclick', 'editTask(this)');
    li.appendChild(editBtn);


    ul.appendChild(li);
  }

  task.value = "";
}


//////////////// delete all tasks

function deleteAll() {
  ul.innerText = "";
}


/////////////// delete task

function deleteTask(btn) {
  btn.parentNode.remove();
}

//////////////// edit task


function editTask(btn) {
  let oldTask = btn.parentNode.firstChild.nodeValue;
  let newTask = prompt('Enter new Task', oldTask);
  btn.parentNode.firstChild.nodeValue = newTask;
}