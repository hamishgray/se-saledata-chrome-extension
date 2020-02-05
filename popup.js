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
		$('#sd_Title').html(str);
	}
	if(message.type == "location"){
		var str = message.content.trim();
		$('#sd_Location').html(str);
	}
	if(message.type == "description"){
		var str = message.content.trim();
		$('#sd_Description').html(str);
	}
	if(message.type == "price"){
		var str = message.content.replace(/\D/g,'').trim();
		$('#sd_Price').html(str);
	}
	if(message.type == "priceper"){
		var str = message.content.trim();
		if( str.length > 0 ){
			str += '. '
		}
		$('#sd_PriceDescription').html(str);
	}
	if(message.type == "pricedescription"){
		var str = message.content.trim();
		$('#sd_PriceDescription').html(str);
	}
	if(message.type == "saved"){
		var str = message.content.trim().split('%')[0].replace('-','').trim();
		$('#sd_Saved').html(str);
	}
	if(message.type == "expires"){
		var str = message.content.split(' ')[0].trim();
		$('#sd_Expires').html(str);
	}
	if(message.type == "image"){
		var str = message.content.trim();
		$('#sd_Image').html(str);
	}
	if(message.type == "link"){
		var str = message.content.trim();
		$('#sd_Link').html(str);
	}
});