const submit = document.getElementById("submit")

function login( data, username, password ) {
  const XHR = new XMLHttpRequest(),
        FD  = new FormData();
  FD.append("username", str(username))
  FD.append("password", str(password))
  XHR.addEventListener( 'load', function( event ) {
    return XHR.responseText
  } );
  XHR.addEventListener(' error', function( event ) {
    return null
  } );
  // Set up our request
  XHR.open( 'POST', 'https://api.scratchblox.tk/auth/login' );
  XHR.send( FD );
}


const errorMessage = document.getELementById("errorMessage") 


submit.addEventListener("click", function {
  var res = login()
  if (res != null) {
    if (res["status"] == 200) {
      localStorage.setItem("_token", res["_token"])
      window.location.assign("/")
    } else {
      errorMessage.innerHtml = "Username or Password is invalid."
    }
  } else {
    errorMessage.innerHtml = "Something went wrong."
  }
  
})
