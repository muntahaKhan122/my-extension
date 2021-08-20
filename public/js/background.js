var copyContentMenuItem ={
	 "title": "Copy this in notebook",
     "contexts": ["selection"],
	 "id":"copyText"
};
var showContent ={
	"title": "Show Highlighted Content",
	"contexts": ["all"],
	"id":"showContent"
};

chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create(copyContentMenuItem);
	chrome.contextMenus.create(showContent);
});
chrome.contextMenus.onClicked.addListener(function(callData,tabs){

	if(callData.menuItemId == "copyText")
	{ 		saveDataToStorage(callData.selectionText);			  
	}
	if(callData.menuItemId == "showContent")
	{ 	
		openModal(tabs);			  
	}
}
)

function saveDataToStorage(text){
chrome.storage.local.get('notes', function(result) {
	var notes=result.notes;
	var newText=text;	
		if(notes!=null)
		  { 
			  notes.push(newText);
			  chrome.storage.local.set({'notes': notes}, function() {
                   console.log("concat",notes);		
			});
	  
		  }
		  else{
			var newText=[text];	
			chrome.storage.local.set({'notes': newText}, function() {
		            console.log("first time",newText);
			});
		  }
	  });


}
function openModal(tab){
	
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ['content-script.js']
	  });
}