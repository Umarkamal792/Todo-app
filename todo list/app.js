var getUl = document.getElementById('ul')


function addTodo() {

    var getInp = document.getElementById('inp');
    var getUl = document.getElementById('ul');
    var li = document.createElement('li');
    var liText = document.createTextNode(getInp.value);
    li.appendChild(liText);
    getUl.appendChild(li);
    getInp.value = '';

    var edit = document.createElement('button');
    var editText = document.createTextNode('Edit');
    edit.appendChild(editText);
    li.appendChild(edit);

    edit.setAttribute('onclick', 'editFunc(this)');

    var del = document.createElement('button');
    var delText = document.createTextNode('Delete');
    del.appendChild(delText);
    li.appendChild(del);

    del.setAttribute('onclick', 'delFunc(this)');
}

function editFunc(e) {
    var newText = prompt('Edit the task:', e.parentNode.firstChild.nodeValue);
    if (newText) {
        e.parentNode.firstChild.nodeValue = newText;
    }
}

function delFunc(e) {
    e.parentNode.remove();
}

function deleteAll() {
    getUl.innerHTML = '';
}
