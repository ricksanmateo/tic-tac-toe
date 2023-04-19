function openPlayerConfig(e) {
  editedPlayer = +e.target.dataset.playerid;
  playerConfigPlayerElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigPlayerElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = ""; 
}

function savePlayerConfig(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayerName = formData.get('playername').trim();
  
  if (!enteredPlayerName) {
    e.target.firstElementChild.classList.add('error')
    errorOutputElement.textContent = 'Please enter a valid name';
    return
  }

  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig()
}