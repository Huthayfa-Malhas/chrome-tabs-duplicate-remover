chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({}, function(tabs) {
        var tabsUrlsSet = new Set();
        var removedTabsCounter = 0;
        tabs.forEach(function(tab) {
            if (tabsUrlsSet.has(tab.url)) {
                chrome.tabs.remove(tab.id);
                removedTabsCounter++;
            } else {
                tabsUrlsSet.add(tab.url);
            }
        });
        alert(removedTabsCounter + " tabs " + (removedTabsCounter > 1 ? "have" : "has") + " been closed!");
    });
});