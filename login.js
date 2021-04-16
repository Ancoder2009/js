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
    XHR.open( 'POST', 'https://api.scratchblox.tk/auth/login', false );
    XHR.send( FD );
  }


  const errorMessage = document.getElementById("errorMessage") 


  submit.addEventListener("click", function() {
    var res
    login(document.getElementById("username").value, document.getElementById("password").value, function(value) {
      res = JSON.parse(value);
    });
    
    console.log(res)
    
    if (res == false){
        errorMessage.innerHTML = "Something went wrong."
        console.log("Something went wrong.")
    } else {
      if (res["status"] == 200) {
        localStorage.setItem("_token", res["_token"])
        window.location.assign("/")
      } else {
        errorMessage.innerHTML = "Username or Password is invalid."
        console.log("invalid")
    }
    };

  })
}
