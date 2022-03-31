function buttonClicked() {
  document.getElementById('button1').classList.toggle('is-red');
  console.log('button clicked')
}

function windowLoaded() {
  document.getElementById('button1').addEventListener('click', buttonClicked);
}

window.onload = windowLoaded;
