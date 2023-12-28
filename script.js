const button = document.getElementsByClassName("create-notes")




function addInput(){
    let notesBox = document.createElement("textArea")
    notesBox.type= "text";
    notesBox.placeholder = "Enter something"
    notesBox.className = "box"
    notesBox.style.height = "80px";
    notesBox.style.width = "400px";
    document.body.appendChild(notesBox)

    let button = document.createElement("button");
    button.className = "add";
    button.type = "submit";
    button.textContent = "Add"
    document.body.appendChild(button);
    button.addEventListener('click',function(){
        let notediv = document.createElement("div");
        notediv.className = "notes"
        notediv.textContent = notesBox.value;
        document.body.appendChild(notediv);
        var deleteIcon = document.createElement("span");
        deleteIcon.className = "delete-icon";
        deleteIcon.innerHTML = "&#10006;"; // Unicode for 'X' character
    
        notediv.appendChild(deleteIcon);
        deleteIcon.onclick = function() {
            notediv.parentNode.removeChild(notediv);
        }
        
    

    
    })
   
    
    
   
}



