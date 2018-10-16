var button = document.querySelector("button");
var titleInput = document.querySelector("#titill");
var textInput = document.querySelector("#texti");
var myDiv = document.querySelector("div");
button.onclick = function(){
    myDiv.innerHTML += `
        <h1>${titleInput.value}</h1>
        <p>${textInput.value}</p>
    `
    titleInput.value="";
    textInput.value="";
}