let tabCount = 3; // Initial number of tabs

function openTab(evt, tabName) {
    // Hide all tab content
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Remove the "active" class from all tabs
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }

    // Show the current tab and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById('addTabButton').addEventListener('click', function() {
    tabCount++;
    const newTabName = `Tab ${tabCount}`;
    
    // Create new tab button
    const newTabButton = document.createElement('button');
    newTabButton.className = 'tab';
    newTabButton.innerText = newTabName;
    newTabButton.onclick = function(event) {
        openTab(event, newTabName);
    };

    // Append new tab button to tab container
    document.getElementById('tabContainer').appendChild(newTabButton);

    // Create new tab content
    const new
