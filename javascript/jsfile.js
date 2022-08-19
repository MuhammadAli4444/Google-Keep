document.getElementById("Tiles").addEventListener("click",SidebarClose)
const windowsize=window.matchMedia("(max-width:800px)");
windowsize.addEventListener("change",Resize);
Resize(windowsize);
function Resize(Argument_)
{ if(Argument_.matches)
    {
       document.getElementById("SearchSection").style.display="none";
       document.getElementById("Searchh").style.display="block";
       }
       else{
        document.getElementById("SearchSection").style.display="block";
        document.getElementById("Searchh").style.display="none";
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
   }
   else{
    document.getElementById("Sidebar").classList.add("squeeze");
   }
}