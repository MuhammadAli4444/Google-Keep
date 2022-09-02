DisplayNotes()
document.getElementById("TilesInNavbar").addEventListener("click",SidebarClose);
document.getElementById("Title").addEventListener("focus",ShowNoteSection);
document.getElementById("Close").addEventListener("click",savedNotes);
document.querySelector(".DeleteNote").addEventListener("click",DeleteNote)
document.querySelector(".ArchieveNote").addEventListener("click",ArchieveNote)
const box=document.querySelector(".MainBody");
document.addEventListener("click",function(event){
  if(event.target.closest(".MainBody")) return;
  const nodeList = document.querySelectorAll(".Footer");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.display="none";
  }
  const nodeListt = document.querySelectorAll(".Iconss");
  for (let i = 0; i < nodeListt.length; i++) {
    nodeListt[i].style.display="block";
  
  }
if(document.getElementById("Title").value==="" &&  document.getElementById("Description").value==="" )
{

}
else{
  savedNotes();
}
})
function ShowNoteSection()
{
  document.getElementById("Title").placeholder='Add a Title';
  const nodeList = document.querySelectorAll(".Footer");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.display="block";
  }
  const nodeListt = document.querySelectorAll(".Iconss");
  for (let i = 0; i < nodeListt.length; i++) {
    nodeListt[i].style.display="none";
  
  }
}
function savedNotes()
{
  let titleValue=document.getElementById("Title").value;
  document.getElementById("Title").value="";
  document.getElementById("Title").placeholder="Take a note...";
  let Description=document.getElementById("Description").value;

  document.getElementById("Description").value="";
  document.getElementById("Description").placeholder=" Take a note...";
if((titleValue!=="" || Description!==""))
{
  console.log("dfghjkl")
   NewNote=new Array(titleValue,Description);
  if(window.localStorage.getItem("arr")===null)
  {
      array=new Array();
    array.push(NewNote);
  window.localStorage.setItem("arr", JSON.stringify(array));
  DisplayNotes();
  }
  else{
    DataInLocalStorage=  JSON.parse(window.localStorage.getItem("arr"))
    DataInLocalStorage.push(NewNote)
    window.localStorage.setItem("arr",JSON.stringify(DataInLocalStorage))
    DisplayNotes();
   }
   const nodeList = document.querySelectorAll(".Footer");
   for (let i = 0; i < nodeList.length; i++) {
     nodeList[i].style.display="none";
   }
}
location.reload();

}
const windowsize=window.matchMedia("(max-width:800px)");
windowsize.addEventListener("change",Resize);
Resize(windowsize);
function Resize(Argument_)
{ if(Argument_.matches)
    {
      
       document.getElementById("SearchSection").style.display="none";
       document.getElementById("MaginifiyingGlass").style.display="block";
       const nodeList = document.querySelectorAll(".Iconss");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.display="none";

}
SidebarClose()
       }
       else{
        document.getElementById("SearchSection").style.display="block";
        document.getElementById("MaginifiyingGlass").style.display="none";
        const nodeList = document.querySelectorAll(".Iconss");
        for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].style.display="block";
        }
       }
} 
document.getElementById("MaginifiyingGlass").addEventListener("click",SearchButton)
function SearchButton()
{
    document.getElementById("MaginifiyingGlass").style.display="none";
    document.getElementById("SearchSection").style.display="block";  
    document.getElementById("SearchSection").style.zIndex="1";
}

//Sidebar active li code
// Get the container element
let btnContainer = document.getElementById("SidebarUL");

// Get all buttons with class="btn" inside the container
let btns = btnContainer.getElementsByClassName("Item");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function SidebarClose()
{
   if(document.getElementById("Sidebar").classList.contains("squeeze"))
   {
    
    document.getElementById("Sidebar").classList.remove("squeeze");
    let  a=document.getElementsByClassName("textNavbar");
    for(i=0;i<a.length;i++)
    {
     a[i].style.display="inline";
    }
   }
   else{
   
    document.getElementById("Sidebar").classList.add("squeeze");
   let  a=document.getElementsByClassName("textNavbar");
   for(i=0;i<a.length;i++)
   {
    a[i].style.display="none";
   }
   }
}


/*------------------------------Display Notes ------------------------------------------------------*/
function DisplayNotes()
{

removeAllChildNodes(document.querySelector('#BodyRow'));
const Data=JSON.parse(window.localStorage.getItem("arr"));
if(Data===null)
{
  document.querySelector('#BodyRow').classList.add("BodyS");
}
else{
  Data.forEach((element,index) => {
    document.querySelector('#BodyRow').classList.remove("BodyS");
    let Note=document.createElement("div");
    Note.classList.add("card","mb-3",'mx-2')
    Note.setAttribute("data-bs-toggle","modal");
    Note.setAttribute("id",`${index}`)
    Note.setAttribute("data-bs-target",".staticBackdrop");
    Note.innerHTML=`<div class="card-body">
    <h5 class="card-title">${element[0]}</h5>
    <p class='card-text'>${element[1]}</p>
  </div>`;
  document.getElementById("BodyRow").appendChild(Note);
  });
}
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
// search functionality
const searchInput = document.getElementById("SearchBar");
searchInput.addEventListener("input", function () {
  const note1 = document.getElementById("MainBody");
   if (searchInput.value) {
    note1.style.display = "none";
  } else {
    note1.style.display = "block";
  }
  const inputVal = searchInput.value.toLowerCase();
  const noteCards = document.getElementsByClassName("card");
  console.log(noteCards)
  Array.from(noteCards).forEach(function (element) {
    const title = element.querySelector(".card-title").innerText;
    const desc = element.querySelector(".card-text").innerText;
    if (
      title.toLowerCase().includes(inputVal) |
      desc.toLowerCase().includes(inputVal)
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

const ClickOnCard=document.querySelectorAll(".card");

ClickOnCard.forEach((element,index)=>
{
element.addEventListener("click",()=>
{
  window.localStorage.setItem("Flag",index);
  let NoteTitle=element.querySelector(".card-title").innerText;
  let NoteBody=element.querySelector(".card-text").innerText;
  document.getElementById("ModalTitle").value=NoteTitle;
  document.getElementById("ModalBody").value=NoteBody;
 } )
 
})

document.getElementById("ModalCloseButoon").addEventListener("mousedown",()=>
{
  const Index=window.localStorage.getItem("Flag");
  const DataStorage=  JSON.parse(window.localStorage.getItem("arr"))
  DataStorage[Index]=[document.getElementById("ModalTitle").value,document.getElementById("ModalBody").value]
  window.localStorage.setItem("arr",JSON.stringify(DataStorage))
  const ClickOnCard=document.querySelectorAll(".card");
  ClickOnCard.forEach((element,index)=>
  {
    if(index==Index)
    {
      element.querySelector(".card-title").innerText=document.getElementById("ModalTitle").value;
      element.querySelector(".card-text").innerText=document.getElementById("ModalBody").value;
    }
  })
})
function DeleteNote()
{
  const Index=window.localStorage.getItem("Flag");
  const DataStorage=  JSON.parse(window.localStorage.getItem("arr"));
  DataStorage.splice(Index,1)
  window.localStorage.setItem("arr", JSON.stringify(DataStorage));
  location.reload();
  DisplayNotes();
}
function ArchieveNote()
{
  const Index=window.localStorage.getItem("Flag");
  const DataStorage=  JSON.parse(window.localStorage.getItem("arr"));
  DataStorage.splice(Index,1)
  window.localStorage.setItem("arr", JSON.stringify(DataStorage));
  location.reload();
  DisplayNotes();
}

/* Sign Out */
