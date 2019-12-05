
// Get title
chrome.runtime.sendMessage({
  content: document.getElementsByClassName("sale-title")[0].getElementsByTagName("h1")[0].textContent,
  type: "title"
});

// Get location
chrome.runtime.sendMessage({
  content: document.getElementsByClassName("sale-title")[0].getElementsByTagName("h2")[0].textContent,
  type: "location"
});

// Get description
chrome.runtime.sendMessage({
  content: document.getElementById("reasonToLove").innerHTML,
  type: "description"
});

// Get price
chrome.runtime.sendMessage({
  content: document.getElementsByClassName("price__value")[0].innerHTML,
  type: "price"
});

// Get price per person unit
chrome.runtime.sendMessage({
  content: document.getElementsByClassName("price__perperson")[0].textContent.replace("*",""),
  type: "priceper"
});

// Get price description
chrome.runtime.sendMessage({
  content: document.getElementsByClassName("price__label")[0].innerHTML,
  type: "pricedescription"
});

// // Get saved
chrome.runtime.sendMessage({
  content: document.getElementsByClassName("discount__value")[0].textContent,
  type: "saved"
});

// Get expires
chrome.runtime.sendMessage({
  content: document.getElementsByClassName("time-remaining__clock")[0].getAttribute('data-countdown'),
  type: "expires"
});

// Get image
chrome.runtime.sendMessage({
  content: document.getElementsByClassName("swiper-slide-active")[0].getElementsByTagName("img")[0].getAttribute('src'),
  type: "image"
});

// Get link
chrome.runtime.sendMessage({
  content: document.querySelector("link[rel='canonical']").getAttribute("href"),
  type: "link"
});


