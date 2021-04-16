/* Coppyright Ancoder 2021 */

/* Apis */

function getUserFromToken( _token, returnFunc ) {
  const XHR = new XMLHttpRequest(),
        FD  = new FormData();
  // Push our data into our FormData object
  FD.append("token", _token)
  
  XHR.addEventListener( 'load', function( event ) {
    returnFunct(XHR.responseText)
  } );
  // Define what happens in case of error
  XHR.addEventListener(' error', function( event ) {
    returnFunct(null)
  } );
  // Set up our request
  XHR.open( 'POST', 'https://api.scratchblox.tk/auth/token' );
  // Send our FormData object; HTTP headers are set automatically
  XHR.send( FD );
};

/* Check */

var _token = localStorage.getItem("_token");
var parentUrl = "https://blox.ancoder.repl.co";

if(_token != null) {
  var checkJson
  getUserFromToken(_token, function(result) {
  checkJson = result;
  });
  if(checkJson != null) {
    if(checkJson["status"] == 200) {
      usernameLabels = document.getElementsByClassName("username")
      var i
      for(i = 0; i < usernameLabels.length; i++) {
        usernameLabels[i].innerHTML =  usernameLabels[i].innerHtml + " " + checkJson["User"]
      }
    } else {
      localStorage.removeItem("_token")
      window.location.assign(window.location["href"])
    }
  } else {
    localStorage.removeItem("_token")
    window.location.assign(window.location["href"])
  };
    
} else {
  window.location.assign(parentUrl + "/account/login")
};
