//DOM

// const selectedTime = document.getElementById(".selectedTime")
const saveTime = document.getElementById("saveTime")
const emailButton = document.getElementById("email")

//email button
getBasicProfile()
console.log('Email:' + profile.getEmail())

//get current URL

document.getElementById('currentTab') = chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    //use `url` here inside the callback because it's asynchronous!
});

chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {      
  console.log(tabs);
  if (tabs.length > 0 && tabs[0].url) {
      setup(tabs[0]);
  } else  {
      chrome.bookmarks.getRecent(1, function(pages) {
          console.log(pages);
          setup(pages[0]);
      });
  }

});



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

//start timer/countdown
// saveTime.addEventListener("click", function(event) {
//   chrome.runtime.sendMessage(
//     {message: saveTime.value}
    
//   )
// })


