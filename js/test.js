
function todoItemElement(text) {
    return `<li>
      <span class="edit">&#9998;</span>
      <span class="remove">&#128465</span>
      <span class="text">${text}</span>
      <input type="text" style="display: none;"/>
    </li>`
  }
  
  
  function addTodoItem() {
    const todoInput = $("#todo-input");
    const todoList = $("#todo-list");
  
    if (todoInput.val().trim() === "") return;
  
    const todoItem = $(todoItemElement(todoInput.val()))
  
    //todo: remove
    todoItem.find(".remove").click(function () {
      todoItem.remove()
    })
  
    //todo: edit
    todoItem.find(".edit").click(function () {
      const input = todoItem.find("input");
      const text = todoItem.find(".text");
  
      input.val(text.text())
      text.hide(200)
      input.show(200).focus()
  
      input.keyup(function (event) {
        if (event.keyCode === 13) {
          text.text(input.val())
          text.show(200)
          input.hide(200)
        }
      })
    })
  
    todoList.append(todoItem)
    todoInput.val("")
  }
  
  $(document).ready(function () {
    const addButton = $("#add-button");
    // add item
    addButton.click(addTodoItem);
  
    $("#todo-input").keyup(function (event) {
      if (event.keyCode === 13) {
        addTodoItem()
      }
    }
    )
  })