/* <div class="task">
  <input type="checkbox" name="task" id="task1" />
  <label for="task1">Task1</label>
</div> */

const input = document.querySelector('.add-task')
const addButton = document.querySelector('.add') 
const deleteButton = document.querySelector('.delete')
const tasksList = document.querySelector('.tasks-list')
let tasks = 1
addButton.addEventListener('click', () => {
  if (input.value === '') return
    const task = document.createElement('div')
    task.classList.add('task')
    task.innerHTML = `
        <input type="checkbox" name="task" id="task${tasks}" />
        <label for="task${tasks}">${input.value}</label>
    `
    tasks++;
    tasksList.appendChild(task)
    input.value = ''
});

deleteButton.addEventListener('click', () => {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked')
  checked.forEach(el => {
    el.parentElement.remove()
  })
  console.log("hi")
})
