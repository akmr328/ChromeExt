chrome.runtime.onMessage.addListener(function() {
  chrome.storage.sync.set({color: '#A20021'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});


//start timer/countdown
// saveTime.addEventListener("click", function(event) {
//   chrome.runtime.sendMessage(
//     {message: saveTime.value}
    
//   )
// })



//create timer/countdown
function start(duration, display) {
  timeLeft = duration;
  console.log("ivestarted");
  sendResponse({ status: true });
  
  var startTime = document.getElementById("startTime");
  var valueSpan = document.getElementById("value");
  
  startTime.addEventListener("input", function() {
    valueSpan.innerText = startTime.value;
  }, false);

  const setTime = startTime.value
  
  let sec = setInterval(function(){
  const now = new Date().getTime();
  const distance = setTime - now;
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("countdown").innerHTML = hours + "h" + minutes + "m" + seconds + "s"
   if (distance <= 0) {
     clearInterval(sec)
     document.getElementById("countdown").innerHTML = "Time's up!"
     alert("Time's up - check out this website!")
    
   }
}, 1000)
}