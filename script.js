var children=document.getElementById("watch-related").children;
var len = children["length"];
var requests = new Array()
for (var i= 0; i<len; i++){
  var suggestion = children[i];
  if (suggestion.getAttribute("class") === "video-list-item ")	
  {
    var v_id=suggestion.children[0].getAttribute("href").slice(9,20);
    console.log(v_id);
    var str='https://gdata.youtube.com/feeds/api/videos/'+v_id+'?v=2';	
    makeRequest(str);
    requests[v_id] = new XMLHttpRequest();
    var xmlhttp = requests[v_id]
    xmlhttp.open("GET",str,true);
    console.log(str);
    xmlhttp.onreadystatechange = function(){
      xmlhttp = requests[v_id];
      console.log(xmlhttp.readyState);
      if(xmlhttp.readyState === 4 ){
	var xmlDoc=xmlhttp.responseXML;
	var x = xmlDoc.getElementsByTagNameNS("http://gdata.youtube.com/schemas/2007","rating")[0];
	  console.log(x);
	  console.log(xmlDoc);
	  var dislikes = x.getAttribute("numDislikes");
	  var likes = x.getAttribute("numLikes");
	  console.log(likes);
	  console.log(dislikes);
	  console.log(xmlhttp.readyState);
	  var info = document.createElement("span");
	  info.innerHTML = "Likes: "+ likes + ", Dislikes: " + dislikes;
	  suggestion.children[0].appendChild(info);
      }		
    };
    xmlhttp.send();

  }
}
