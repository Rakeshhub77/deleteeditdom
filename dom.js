var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var description=document.getElementById("description").value
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" " + description));

  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);

  var editbtn=document.createElement('button');
 editbtn.className = 'btn btn-sm float-right editbtn';
 editbtn.appendChild(document.createTextNode('EDIT'));
  li.appendChild(editbtn);
  
 itemList.appendChild(li)

 }

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

var  itemList1= document.getElementsByClassName("list-group-item")
for(let i=0;i<itemList1.length;i++)
{
    const editbtn= document.createElement('button');
     editbtn.className = 'btn btn-sm float-right editbtn';
     editbtn.appendChild(document.createTextNode('EDIT'));
     itemList1[i].appendChild(editbtn)
      
}



var filter= document.getElementById("filter");

filter.addEventListener("keyup",filteritems);



function filteritems(e){

    var text =e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName("li");
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var description =item.childNodes[1].textContent
        if(itemName.toLowerCase().indexOf(text) !=-1 ||description.toLowerCase().indexOf(text) !=-1 )
        {
item.style.display="block"
        }
        else{
            item.style.display="none"
        }
    })
}



