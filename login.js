/* Copyright Ancoder 2021 */

function Params(key) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === key) result = decodeURIComponent(tmp[1]);
        });
    return result;
}


const localStorage = window.localStorage
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
        while (localStorage.getItem("_token") == null){
          localStorage.setItem("_token", res["_token"])
        }
        var ref = Params(refUrl)
        if (refUrl == null) {
          window.location.assign(/)
        } else {
          window.location.assign(refUrl)
        }
        }
      } else {
        errorMessage.innerHTML = "Username or Password is invalid."
        console.log("invalid")
    }
    };

  })
}
