var copyContentMenuItem ={
	 "title": "Copy this in notebook",
     "contexts": ["selection"],
	 "id":"copyText"
};
chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create(copyContentMenuItem);
});
chrome.contextMenus.onClicked.addListener(function(callData){

	if(callData.menuItemId == "copyText")
	{ console.log(callData.selectionText);
		saveDataToFile(callData.selectionText);			  
	}
}
)
function saveDataToFile(text){
	var blob = new Blob([text],
                { type: "text/plain;charset=utf-8" });
				console.log(blob);
	var FileSaver = require('file-saver');
	saveAs(blob, "notebook.txt");
}
