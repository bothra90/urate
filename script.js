

var children=document.getElementById("watch-related").children;
var len = children["length"];
for (i= 0; i<len; i++){
 var suggestion = children[i];
 if (suggestion.getAttribute("class") === "video-list-item ")
	//console.log(suggestion.children[0].getAttribute("href").slice(9,20));
	
	var v_id=suggestion.children[0].getAttribute("href").slice(9,20);
	console.log(v_id);
	
	chrome.extension.sendRequest({video_id : v_id},function(res){console.log(res.w_id)});
	
	/*
	var str="http://gdata.youtube.com/feeds/api/videos/"+v_id+"?v=2&amp;alt=json-in-script&amp;callback=klas";
	//var str = "http://gdata.youtube.com/feeds/users/GoogleDevelopers/uploads?v=2&alt=json-in-script&format=5&callback=klas"
	var script_= background.createElement("JSOn_Script");
	script_.type="text/javascript";
	script_.src=str;
	background.body.appendChild(script_);
	*/
}