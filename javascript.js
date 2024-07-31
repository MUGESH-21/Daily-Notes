var popupoverlay = document.querySelector(".popup-overlay")
var popbox = document.querySelector(".pop-box")
var addpopup=document.getElementById("addpopup")

addpopup.addEventListener("click", function(){
    popupoverlay.style.display="block";
    popbox.style.display="block";
});

//popup cancel
var cancel = document.getElementById("cancel")

cancel.addEventListener("click",function(event){
  event.preventDefault() 
  popupoverlay.style.display="none";
  popbox.style.display="none";
})
//add events title-input input-head details
var container = document.querySelector(".container")
var add = document.getElementById("add")
var titleinput = document.getElementById("title-input")
var inputhead = document.getElementById("input-head")
var details = document.getElementById("details")

add.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${titleinput.value}</h2>
            <h5>${inputhead.value}</h5>
            <p>${details.value}</p>
            <button onclick="deletenote(event)">Delete</button>`
    container.append(div)
    // div.innerHTML=`<h5>${inputhead.value}</h5>`
    // container.append(div)
    popupoverlay.style.display="none";
    popbox.style.display="none";
})


function deletenote(event){
    event.target.parentElement.remove()
}