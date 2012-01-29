var children=document.getElementById("watch-related").children;
var len = children["length"];

for (i= 0; i<len; i++){
 var suggestion = children[i];
 if (suggestion.getAttribute("class") === "video-list-item ")	
	var v_id=suggestion.children[0].getAttribute("href").slice(9,20);
	console.log(v_id);
	
	var str='https://gdata.youtube.com/feeds/api/videos/'+v_id+'?v=2';	
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET",str,true);
	
	xmlhttp.onreadystatechange=function(){
	console.log(xmlhttp.readyState);
		if(xmlhttp.readyState==4 ){
			console.log("blah");
			var xmlDoc=xmlhttp.responseXML;
			//var x=xmlDoc.getElementsByTagName("yt:rating");
			console.log(xmlDoc);
			console.log(x.length);
			
			for(i=0;i<x.length;i++){
				console.log(x);
			}
		}		
	}
	console.log(xmlhttp.readyState);
	
	xmlhttp.send();
	
}