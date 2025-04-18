function openPlayerConfig(event) {
    const selectedPlayerId = +event.target.dataset.playerid;
    editedPlayer = selectedPlayerId;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();

    if (!enteredPlayername) {
        event.target.firstElementChild.classList.add('error'); 
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatePlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatePlayerDataElement.children[1].textContent = enteredPlayername;

    // if (editedPlayer === 1) {
    //     players[0].name = enteredPlayername;
    // } else {
    //     players[1].name = enteredPlayername;
    // }

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();
}