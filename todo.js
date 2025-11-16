document.addEventListener('DOMContentLoaded', function() {
  
  const input = document.getElementById('userInput')
  const add = document.getElementById('userAdd')
  const clear = document.getElementById('clearList')
  const urList = document.getElementById('userList')

  add.addEventListener('click', addTask)
  clear.addEventListener('click', clearTask)

  function addTask() {
    const taskText = input.value.trim()
    if (taskText === '') return

    const listItem = document.createElement('li')
    listItem.className = 'flex items-center justify-around gap-4 p-3 rounded-lg hover:bg-white/10'
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'w-5 h-5 accent-yellow-500 cursor-pointer rounded border-gray-400 cursor-pointer';

    checkbox.addEventListener('change', function() {
      listItem.classList.toggle('completed', checkbox.checked)
    })

    const textSpan = document.createElement('span')
    textSpan.textContent = taskText

    listItem.appendChild(checkbox)
    listItem.appendChild(textSpan)

    listItem.appendChild(deleteTask(listItem))
    urList.append(listItem)

    input.value = ''
  }

  function deleteTask(listItem) {
    const delBtn = document.createElement('button')

    delBtn.className = 'delete-btn'
    delBtn.innerHTML = 'Clear'
    delBtn.className = 'hover:yellow'

    delBtn.addEventListener('click', function() {
      listItem.remove()
    })

    return delBtn
  }

  function clearTask() {
    urList.textContent = ''
  }

})