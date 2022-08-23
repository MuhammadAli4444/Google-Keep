document.getElementById("Tiles").addEventListener("click",SidebarClose);
document.getElementById("Title").addEventListener("focus",ShowNoteSection);
document.getElementById("Close").addEventListener("click",savedNotes);
const box=document.querySelector(".MainBody");
document.addEventListener("click",function(event){
  if(event.target.closest(".MainBody")) return;
  savedNotes()
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
  var titleValue=document.getElementById("Title").value;
  document.getElementById("Title").value="";
  document.getElementById("Title").placeholder="Take a note...";
  var Description=document.getElementById("Description").value;
  console.log(Description);
  document.getElementById("Description").value="";
  document.getElementById("Description").placeholder=" Take a note...";
NewData={title: titleValue,
body: Description}
 Data=localStorage.getItem('arr');
 Data.title=Description
 if(localStorage.getItem('arr')===null)
 {
  console.log(NewData)
  window.localStorage.setItem("arr", JSON.stringify(NewData));

 }
 else
 {
  window.localStorage.setItem("arr", JSON.stringify(Data));
 }

localStorage.setItem('arr',JSON.stringify(Data));

  const nodeList = document.querySelectorAll(".Footer");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.display="none";
  }
  const nodeListt = document.querySelectorAll(".Iconss");
  for (let i = 0; i < nodeListt.length; i++) {
    nodeListt[i].style.display="block";
  
  }
  if(titleValue!=null && Description!=null)
  {
  DisplayNotes();
  }
}
const windowsize=window.matchMedia("(max-width:800px)");
windowsize.addEventListener("change",Resize);
Resize(windowsize);
function Resize(Argument_)
{ if(Argument_.matches)
    {
      
       document.getElementById("SearchSection").style.display="none";
       document.getElementById("Searchh").style.display="block";
       const nodeList = document.querySelectorAll(".Iconss");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.display="none";

}

       }
       else{
        document.getElementById("SearchSection").style.display="block";
        document.getElementById("Searchh").style.display="none";
        const nodeList = document.querySelectorAll(".Iconss");
        for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].style.display="block";
        }
       }

} 
document.getElementById("Searchh").addEventListener("click",SearchButton)
function SearchButton()
{
    document.getElementById("Searchh").style.display="none";
    document.getElementById("SearchSection").style.display="block";  
    document.getElementById("SearchSection").style.zIndex="1";
}

//Sidebar active li code
// Get the container element
var btnContainer = document.getElementById("SidebarUL");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("Item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function SidebarClose()
{
   if(document.getElementById("Sidebar").classList.contains("squeeze"))
   {
    
    document.getElementById("Sidebar").classList.remove("squeeze");
    var  a=document.getElementsByClassName("textNavbar");
    for(i=0;i<a.length;i++)
    {
     a[i].style.display="inline";
    }
   }
   else{
   
    document.getElementById("Sidebar").classList.add("squeeze");
   var  a=document.getElementsByClassName("textNavbar");
   for(i=0;i<a.length;i++)
   {
    a[i].style.display="none";
   }
   }
}


/*------------------------------Display Notes ------------------------------------------------------*/
function DisplayNotes()
{

}

/*
  var note = document.createElement("div");
  note.innerHTML=" My name is jan aoh jan<div class='Description'>Hwelooo</div>"
  note.classList.add('Notes', 'col-3', 'mt-4', 'pt-md-3', 'pb-md-3' ,'TitleOfNote' ,'ps-md-4')
console.log(note);
document.getElementById("BodyRow").appendChild(note)
*/