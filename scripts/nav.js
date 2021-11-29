const content = `
        <li><a href="index.html">Home</a></li>
        <li><a href="tricube.html">Tricube Tales</a></li>
`

const defaultHeader = document.querySelector("header");
const newNaviBar = document.createElement("nav")
const navBarList = document.createElement("ul");
navBarList.innerHTML = content;
newNaviBar.append(navBarList);
defaultHeader.append(newNaviBar);