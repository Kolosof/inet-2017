var udata = "";
var req = new XMLHttpRequest();
req.open('GET','data.txt',true);
req.onreadystatechange = function(){
	if(req.readyState != 4) return;
	if(req.status == 200){
		udata = req.responseText;
	}
	else{
		return;
	}
	var ulist = udata.split("/n");
	for (var i = 0; i < ulist.length; i++){
		var sudata = ulist[i].split("!!!");
		if(sudata.length < 6 || sudata[0]=="#"){
			console.log("alo!!!!!");
			continue;
		}
		console.log(sudata[0]);
		var udiv = document.createElement('div');
		udiv.className = 'idm_user';
		
		udiv.innerHTML += "<br>"+sudata[0];
		udiv.innerHTML += " "+sudata[1];
		udiv.innerHTML += " "+sudata[2];
		udiv.innerHTML += " <a href="+sudata[3]+">Page link</a>";
		udiv.innerHTML += " "+sudata[4];
		udiv.innerHTML += " "+sudata[5];
		udiv.innerHTML += "<hr>"
	}
}
req.send();
