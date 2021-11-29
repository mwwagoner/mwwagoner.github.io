const content = `
        <li class="nav-list-item"><a href="index.html">Home</a></li>
        <li class="nav-list-item"><a href="tricube.html">Tricube Tales</a></li>
`
/* Create the new nav and ul elements for the nav bar */
const newNaviBar = document.createElement("nav")
const navBarList = document.createElement("ul");

/* Grab the header element from the DOM */
const defaultHeader = document.querySelector("header");

/* Add the class attribute to the new nav element */
newNaviBar.setAttribute("class", "navi-bar");

/* Set the ul HTML to the li elements in the nav bar */
navBarList.innerHTML = content;

/* Add the ul to the nav element and then add the nav element to the header */
newNaviBar.append(navBarList);
defaultHeader.append(newNaviBar);