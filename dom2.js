

var itemList= document.getElementsByClassName("list-group-item")

for(let i=0;i<itemList.length;i++)
{
    const editbtn= document.createElement('button');
     editbtn.className = 'btn btn-sm float-right editbtn';
     editbtn.appendChild(document.createTextNode('EDIT'));
     itemList[i].appendChild(editbtn)
    
}