document.body.onload = function() {
  const submit = document.getElementById("submit")

  function login(username, password, functPass) {
    const XHR = new XMLHttpRequest(),
          FD  = new FormData();
    FD.append("username", username)
    FD.append("password", password)
    XHR.addEventListener( 'load', function( event ) {
      console.log(XHR.responseText)
      functPass(XHR.responseText)
    } );
    XHR.addEventListener(' error', function( event ) {
      functPass(false)
    } );
    // Set up our request
    XHR.open( 'POST', 'https://api.scratchblox.tk/auth/login' );
    XHR.send( FD );
  }


  const errorMessage = document.getElementById("errorMessage") 


  submit.addEventListener("click", function() {
    var res
    login(document.getElementById("username").value, document.getElementById("password").value, function(value) {
      res = json.parse(value);
    });
    
    if (res == false){
        errorMessage.innerHtml = "Something went wrong."
        console.log("Something went wrong.")
    } else {
      if (res["status"] == 200) {
        localStorage.setItem("_token", res["_token"])
        window.location.assign("/")
      } else {
        errorMessage.innerHtml = "Username or Password is invalid."
        console.log("invalid")
    }
    };

  })
}
