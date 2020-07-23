var list = document.getElementById("list");

function addtodo(){
    var todo_item = document.getElementById("todo-item");
    
    //create li tag with text node
    var li = document.createElement('li')
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)

    //create delete button
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteitem(this)")
    delbtn.appendChild(deltext)
    
    //create edit button
    var editbtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editbtn.appendChild(editText)
    editbtn.setAttribute("onclick","editItem(this)")
    editbtn.setAttribute("class","btn1");

    li.appendChild(delbtn)
    li.appendChild(editbtn)

    list.appendChild(li)
    todo_item.value = ""
}
function deleteitem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val =  e.parentNode.firstChild.nodeValue;
    var edtvalue = prompt("Enter Edit Value",val)
    e.parentNode.firstChild.nodeValue = edtvalue
    console.log(e.parentNode.firstChild.nodeValue);
}

function deleteall(){
    list.innerHTML = "";
}

