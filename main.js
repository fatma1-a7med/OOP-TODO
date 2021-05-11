class MakeTodoList {
  constructor(list) {
    this.todoList = list;
    this.todos = [];
  }

  static addtoList(text) {
    let list = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
    return li;
  }

  static removeFromList(text) {
    let list = document.getElementById("todo-list");
    let childs = Array.from(list.childNodes);
    let item = childs.find(i => i.innerText === text);
    return item;
  }

  addTodo(text) {
    this.todos.push(text);
    this.todoList.appendChild(MakeTodoList.addtoList(text));
  }

  removeTodo(text) {
    let filter = this.todos.filter(i => i !== text);
    this.todoList.removeChild(MakeTodoList.removeFromList(text));
    this.todos = filter;
  }

  get getList() {
    return this.todos;
  }

  set DummyData(value) {
    this.todos = value;
    this.todos.map(i => MakeTodoList.addtoList(i));
  }
}

let list = document.getElementById("todo-list");

let listEle = new MakeTodoList(list);



console.log( listEle.getList); 


function addtodo() {
  let input = document.getElementById("input").value;
  listEle.addTodo(input); 

  console.log( listEle.getList); 
}


function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}



function remove() {
  let updated = document.getElementById("todo-list");
  updated.onclick = function(event) {
    var target = getEventTarget(event);
    listEle.removeTodo(target.innerText);
    console.log( listEle.getList); 
  };
}


