// references to page elements
var domHighScoreEl = document.getElementById("timer");
var domPrimaryContent = document.getElementById("primary-content");
var domSecondaryContent = document.getElementById("secondary-content");
var domTertiaryContentEl = document.getElementById("tertiary-content");
var startButton = document.createElement("button");
var introPageHeader = document.createElement("h1");
introPageHeader.textContent = "Coding Quiz Challenge";
startButton.textContent = "Start Quiz";
startButton.className = "button";
// introPageHeader.

// primary content
var introPagePrimaryContent = document.createElement("section");
introPagePrimaryContent.className = "primary-content";
introPagePrimaryContent.id = "primary-content";
introPagePrimaryContent.appendChild(introPageHeader);


// secondary content
var introPageSecondaryContent = document.createElement("section");
introPageSecondaryContent.className = "secondary-content"
introPageSecondaryContent.appendChild(startButton);

var introPageTertiaryContent = document.createElement("section");
introPageTertiaryContent.className = "tertiary-content";

// test main content section replacement
domPrimaryContent.replaceWith(introPagePrimaryContent);
domSecondaryContent.replaceWith(introPageSecondaryContent);
domTertiaryContentEl.replaceWith(introPageTertiaryContent);

//startButton.
// var introPage = funct