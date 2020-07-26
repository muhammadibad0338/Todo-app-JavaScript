var table = document.getElementById("table") 
 function addtodo(){
     var todoitem = document.getElementById("todo-item");
     var td = document.createElement('td')
     var tdtext = document.createTextNode(todoitem.value)
     td.appendChild(tdtext)
     var delbtn = document.createElement("button")
     var deltext = document.createTextNode("DELETE")
     delbtn.setAttribute("class","btn")
     delbtn.setAttribute("onclick","deleteitem(this)")
     delbtn.appendChild(deltext)
     var editbtn = document.createElement("button")
     var edititext = document.createTextNode("EDIT")
     editbtn.append(edititext)
     editbtn.setAttribute("onclick","edititem(this)")


     td.appendChild(delbtn)
     td.appendChild(editbtn)
     table.appendChild(td) 
     todoitem.value = ""
 } 
 function deleteitem(e){
     e.parentNode.remove()
 }
 function deleteall(){
     table.innerHTML=""
 }
 function edititem(e){
     var val = e.parentNode.firstChild.nodeValue
     var editValue = prompt("Enter edit STUDENT name",val)
     e.parentNode.firstChild.nodeValue=editValue
 } 