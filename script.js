var children=document.getElementById("watch-related").children;
var len = children["length"];
for (i= 0; i<len; i++)
{
 var suggestion = children[i];
 if (suggestion.getAttribute("class") === "video-list-item ")
	console.log(suggestion.children[0].getAttribute("href").slice(9,20));
}
