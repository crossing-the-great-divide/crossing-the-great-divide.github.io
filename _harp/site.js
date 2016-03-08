var pageURI = document.baseURI;
var currentPage = "";
var navLinkClass = "current";

if (pageURI.lastIndexOf("/") == pageURI.length - 1) {
	currentPage = "Home";
} else {
	currentPage = pageURI.substring((pageURI.lastIndexOf("/") + 1), pageURI.length);

	underlineNav();
}

function underlineNav() {
	document.getElementById(currentPage).className = navLinkClass;
}

console.log(document.title);
