const div = document.createElement("div");
div.setAttribute("style", "height:70%");
div.innerHTML =
       `<div id="myModal" class="modal">
       
         <div class="modal-content">
           <span class="close">&times;</span>
           <p>Some text in the Modal..</p>
         </div>
       
       </div>`;
document.body.appendChild(div);

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}