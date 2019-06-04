browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){

	if(info != null && info.hasOwnProperty('menuItemId')
			&& info.hasOwnProperty('selectionText')){
		var searchURL = findSearchEngin(info.menuItemId);


	var url = '';
		
		if(searchURL != ''){
			url = searchURL+info.selectionText;
		}

		console.log("the url is:::"+url);
		
		// When the URL is not null, create a new tab to search
		if( url != ''){
			  browser.tabs.create({url: url});
		}

	}

}

browser.contextMenus.create({
  id: "1",
  title: "Sear with Wikipedia",
  contexts: ["selection"]
});



browser.contextMenus.create({
  id: "2",
  title: "Search with Bing",
  contexts: ["selection"]
});



browser.contextMenus.create({
  id: "3",
  title: "Search with DuckDuckGo",
  contexts: ["selection"]
});


function findSearchEngin(searchEngText){

        if(searchEngText == '1'){
                return 'https://wikipedia.org/wiki/Search?search=';
        }
        
        else if(searchEngText == '2'){
                return 'http://www.bing.com/search?q=';
        }
        else if(searchEngText == '3'){
                return 'https://duckduckgo.com/?q=';
	}
        
        return '';
}