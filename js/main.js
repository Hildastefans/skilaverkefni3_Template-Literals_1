

var mainDiv = document.querySelector("#main");
mainDiv.innerHTML = `
    <ul class="list"></ul>
    Name <input id="textabox1" type="text" />
    picture url: <input id="textabox2" type="text" />
    <button class="button">add event</button>
`
var button = document.querySelector(".button");
var list = document.querySelector(".list");
var title = document.querySelector("#textabox1");
var picture = document.querySelector("#textabox2");
var verk3 = function(){
    console.log(test);
    
    list.innerHTML += getEvent(title.value, picture.value);
}
button.onclick = verk3;

var getEvent = function(title, pictureURL){
    var verk3 = `
    <li class="o1o4 on" style="height: 238px;">
			<div class="info">
				<h1>${title}</h1>
				<div>
                    <h2>Texti</h2><hr><h3>26. texti</h3>
				</div>
			</div>
			<div class="more">
				<ul>
					<li data-short="XX" data-long="XX"><a href="xx">XX</a></li>
					<li data-short="XX" data-long="XX"><a href="xx">XX</a></li>
				</ul>
			</div>
			<div class="blink"></div>
            <div class="image lazy " style="background-image: url(&quot;${pictureURL}&quot;);"></div>
            
		</li>*/
    `
    return verk3;
}