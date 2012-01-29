
function klas(data){ console.log(data);}

var children=document.getElementById("watch-related").children;
var len = children["length"];
for (i= 0; i<len; i++){
 var suggestion = children[i];
 if (suggestion.getAttribute("class") === "video-list-item ")
	//console.log(suggestion.children[0].getAttribute("href").slice(9,20));
	var v_id=suggestion.children[0].getAttribute("href").slice(9,20);
	console.log(v_id);
	var str='https://gdata.youtube.com/feeds/api/videos/'+v_id+'?v=2&alt=json&callback=kals';
	
	var script_= document.createElement("JSOn_Script");
	script_.type="text/javascript";
	script_.src=str;
	document.body.appendChild(script_);
	
}