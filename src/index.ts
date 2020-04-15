document.body.appendChild((() => {
    let htmlDivElement = document.createElement("div");
    htmlDivElement.innerText = "hello world"
    return htmlDivElement
})());
