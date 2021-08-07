var notes=[];
chrome.storage.local.get('notes', function(result) {
     notes=result.notes;         
  });

const wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%;");
const iframeElement = document.createElement("iframe");
iframeElement.setAttribute("style","width: 100%; height: 100%;");
wrapperDiv.appendChild(iframeElement);


const modalDialogParentDiv = document.createElement("div");
modalDialogParentDiv.setAttribute("style","position: absolute; width: 350px; border: 1px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; top: 149px; left: 497px;");
const closeBtn= document.createElement("button");
closeBtn.innerText="X";
closeBtn.setAttribute("style","float:right");
const modalText=document.createElement("span");
modalText.innerText=notes.forEach((val)=>{return val});
modalDialogParentDiv.appendChild(closeBtn);
modalDialogParentDiv.appendChild(modalText);
document.body.appendChild(wrapperDiv);
document.body.appendChild(modalDialogParentDiv);
closeBtn.onclick = function (){
  document.body.removeChild(wrapperDiv);
  document.body.removeChild(modalDialogParentDiv);
}

