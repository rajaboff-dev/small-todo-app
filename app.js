let input = document.getElementById('input');
let button = document.getElementById('submit');
let listContainer = document.getElementById('list');
let editModal = document.getElementById('edit-modal');
let closeEditModal = document.querySelector('#edit-modal .close');
let editModalInput = document.querySelector('#edit-modal input');
let editModalSubmitBtn = document.querySelector('#edit-modal button');

button.addEventListener('click', () => {
    if(input.value !== '') {
        listContainer.innerHTML += `<li><div><span onclick="taskCompleted(event)">❌</span><span id='item-text'>${input.value}</span></div><div><span onclick="editItem(event)">✏️</span><span onclick="removeItem(event)">🗑️</span></div></li>`
    }
    input.value = ''
})


function removeItem(e) {
    e.target.parentNode.parentNode.remove()
}



function taskCompleted(e) {
    if(e.target.parentElement.children[1].style.textDecoration === 'line-through') {
        e.target.parentElement.children[1].style.textDecoration = 'none'
        e.target.innerText = '❌'
    } else {
        e.target.parentElement.children[1].style.textDecoration = 'line-through'
        e.target.innerText = '✅'
    }
}


function editItem(e) {
    editModal.style.display = 'flex'
    editModalSubmitBtn.addEventListener('click', () => {
        if(editModalInput.value !== '') {
            e.target.parentElement.parentElement.children[0].children[1].innerText = editModalInput.value
            editModal.style.display = 'none'
        }
        editModalInput.value = ''
    })

    closeEditModal.addEventListener('click', () => {
        editModal.style.display = 'none'
    })
}