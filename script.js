

var children=document.getElementById("watch-related").children;
var len = children["length"];
for (i= 0; i<len; i++){
 var suggestion = children[i];
 if (suggestion.getAttribute("class") === "video-list-item ")
	//console.log(suggestion.children[0].getAttribute("href").slice(9,20));
	
	var v_id=suggestion.children[0].getAttribute("href").slice(9,20);
	console.log(v_id);
	var numlikes,numdislikes;
	chrome.extension.sendRequest({video_id : v_id},function(res){numlikes=4;numdislikes=2;var info = document.createTextNode("Likes: "+numlikes+", Dislikes: "+ numdislikes+" ");
	suggestion.children[0].appendChild(info);});
	

}