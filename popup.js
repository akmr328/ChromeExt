
var currentURL = document.getElementById('currentTab');


//email toggle
const emailButton = document.getElementById("email")


chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
function(tabs){
	getCurrentURL(tabs[0].url);
});

function getCurrentURL(tab){
	currentURL = tab;
}


//creates bookmark extension folder
chrome.bookmarks.create(
  {'parentId': bookmarkBar.id, 'title': 'Extension bookmarks'},
  function(newFolder) {
    console.log("added folder: " + newFolder.title);
  },
);

//creates bookmark
chrome.bookmarks.create({
  'parentId': extensionsFolderId,
  'title': 'Extensions doc',
  'url': 'http://code.google.com/chrome/extensions',
});

//create timer/countdown
let selectedTime = document.querySelector(".selectedTime")
console.log(selectedTime)
let sec = setInterval(function(){
  const now = new Date().getTime();
  const distance = selectedTime - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("countdown").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s"
   if (distance < 0) {
     clearInterval(sec)
     document.getElementById("countdown").innerHTML = "Times up!"
   }
}, 1000)

