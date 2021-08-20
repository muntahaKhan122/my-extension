const regeneratorRuntime = require("regenerator-runtime");
function readLocalStorage(key) {
  return new Promise((resolve, reject) => {
      chrome.storage.local.get([key], function(result) {
          if (result) {
              resolve(result.notes);
          } else {
              reject();
          }
      });
  });
}

var notes;
async function getNotes(){
 notes=await readLocalStorage('notes');

const wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%;");
const iframeElement = document.createElement("iframe");
iframeElement.setAttribute("style","width: 100%; height: 100%;");
wrapperDiv.appendChild(iframeElement);
const modalDialogParentDiv = document.createElement("div");
modalDialogParentDiv.setAttribute("style","position: absolute; width: 350px; border: 1px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; top: 149px; left: 497px;");
const btnDiv=document.createElement("div");
btnDiv.className="container";
btnDiv.setAttribute("style","text-align: center;");
const closeBtn= document.createElement("a");
closeBtn.className="btn btn-default"
closeBtn.innerText="x";
closeBtn.href="#"
closeBtn.setAttribute("style","float:right; width:20px; height:20px; color: black");
btnDiv.appendChild(closeBtn)
modalDialogParentDiv.appendChild(btnDiv);
const div=document.createElement("div");
document.body.appendChild(div);
const modalHeader=document.createElement("div");
modalHeader.innerHTML='Notes';
modalHeader.setAttribute('style','align-items: center;font-weight: bold;font-size: large;');
modalDialogParentDiv.appendChild(modalHeader);
notes.forEach((val)=>{
  const modalText=document.createElement("div");
  modalText.innerText=' - '+val; 
  modalText.setAttribute('style','margin-top:20px'); 
  modalDialogParentDiv.appendChild(modalText);
});
document.body.appendChild(wrapperDiv);
document.body.appendChild(modalDialogParentDiv);
closeBtn.onclick = function (){
  document.body.removeChild(wrapperDiv);
  document.body.removeChild(modalDialogParentDiv);
}


}
getNotes().then(()=>{});
