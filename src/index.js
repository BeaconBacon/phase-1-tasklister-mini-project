document.addEventListener("DOMContentLoaded", () => {
  let newTaskDescription = document.getElementById("new-task-description");
  let form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(newTaskDescription.value)
     buildToDo(newTaskDescription.value)
     e.target.reset()
  })
 
});

function buildToDo(todo){
  let p = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()

}