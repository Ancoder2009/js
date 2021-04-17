/* Coppyright Ancoder 2021 */

var _token = localStorage.getItem("_token")

if (_token == null) {
  /* Token null */
  window.location.assign("https://blox.ancoder.repl.co/account/login")
} else {
  /* Token good */
  var response
  const formData = new FormData();
  const photos = document.querySelector('input[type="file"][multiple]');

  formData.append('token', _token);
  async function check() {
    await fetch('https://api.scratchblox.tk/auth/token', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      response = result
    })
    .catch(error => {
      console.error('Error:', error);
      response = false
    });
  }
  check()
  while (res == null) {
    rand
  }
  if (response == false) {
    localStorage.removeItem("_token")
    alert("res null")
    window.location.assign("/")
  } else {
    if (JSON.parse(response)["status"] == 200) {
      /* Good */
      console.log("Logged in as "+JSON.parse(response)["user"])
    } else {
      /* Bad */
      alert("token bad")
      localStorage.removeItem("_token")
      window.location.assign("/")
    }
  }
}
