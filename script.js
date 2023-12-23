function toggleValue(inputName) {
    var inputValue = document.querySelector(`[name='"date".${inputName}']`);
    inputValue.value = inputValue.value === "1" ? "0" : "1";
    updateButtonStyle(inputName);
    updateURL(inputName, inputValue.value);
}

function updateButtonStyle(inputName) {
    var inputButton = document.querySelector(`.${inputName}Button`);
    inputButton.classList.toggle('active', inputButton.value === "1");
}

function updateURL(inputName, inputValue) {
    var baseUrl = window.location.href.split('?')[0];
    var newUrl = baseUrl + `?date.${inputName}=${inputValue}`;
    window.history.replaceState({}, document.title, newUrl);
}


document.querySelector('.startButton').addEventListener('click', function() {
    toggleValue('start');
});

document.querySelector('.resetButton').addEventListener('click', function() {
    toggleValue('reset');
});

document.querySelector('.reversaoButton').addEventListener('click', function() {
    toggleValue('reservao');
});

document.querySelector('.jogButton').addEventListener('click', function() {
    toggleValue('jog');
});



function updateCorrenteFrequencia() {
    var correnteReal = (Math.random() * 2.0).toFixed(2);
    var frequenciaReal = (Math.random() * 60 + 40).toFixed(2); 

    document.getElementById('correnteValue').textContent = correnteReal + " A";
    document.getElementById('frequenciaValue').textContent = frequenciaReal + " Hz";
}

setInterval(updateCorrenteFrequencia, 1000);


