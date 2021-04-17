/* Coppyright Ancoder 2021 */

var _token = localStorage.getItem("_token")

if (_token == null) {
  /* Token null */
  window.location.assign("https://blox.ancoder.repl.co/account/login")
} else {
  /* Token good */
  const formData = new FormData();
  const photos = document.querySelector('input[type="file"][multiple]');

  formData.append('_token', _token);

  fetch('https://api.scratchblox.tk/auth/token', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
