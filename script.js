document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    const message = document.getElementById('message').value;

    const wishContainer = document.createElement('div');
    wishContainer.classList.add('wish');
    
    const nameElement = document.createElement('p');
    nameElement.classList.add('name');
    nameElement.innerText = `${name} - ${attendance === 'yes' ? 'Akan Hadir' : 'Tidak Hadir'}`;
    
    const messageElement = document.createElement('p');
    messageElement.innerText = message;
    
    wishContainer.appendChild(nameElement);
    wishContainer.appendChild(messageElement);
    
    document.getElementById('wishesDisplay').appendChild(wishContainer);
    
    document.getElementById('rsvpForm').reset();
});
