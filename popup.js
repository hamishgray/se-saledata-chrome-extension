// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});



// Write YAML data format
chrome.runtime.onMessage.addListener(function (message) {
	if(message.type == "title"){
		var str = message.content.trim();
		document.getElementById('sd_Title').innerHTML = str;
	}
	if(message.type == "location"){
		var str = message.content.trim();
		document.getElementById('sd_Location').innerHTML = str;
	}
	if(message.type == "description"){
		var str = message.content.trim();
		document.getElementById('sd_Description').innerHTML = str;
	}
	if(message.type == "price"){
		var str = message.content.replace(/\D/g,'').trim();
		document.getElementById('sd_Price').innerHTML = str;
	}
	if(message.type == "priceper"){
		var str = message.content.trim();
		str += '. '
		document.getElementById('sd_PriceDescription').innerHTML = str;
	}
	if(message.type == "pricedescription"){
		var str = message.content.trim();
		document.getElementById('sd_PriceDescription').innerHTML += str;
	}
	if(message.type == "saved"){
		var str = message.content.trim().split('%')[0].replace('-','').trim();
		document.getElementById('sd_Saved').innerHTML = str;
	}
	if(message.type == "expires"){
		var str = message.content.split(' ')[0].trim();
		document.getElementById('sd_Expires').innerHTML = str;
	}
	if(message.type == "image"){
		var str = message.content.trim();
		document.getElementById('sd_Image').innerHTML = str;
	}
	if(message.type == "link"){
		var str = message.content.trim();
		document.getElementById('sd_Link').innerHTML = str;
	}
});


