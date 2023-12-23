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

// Associar a função a cada botão
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



   // Função para obter e definir os valores de corrente e frequência
   function updateCorrenteFrequencia() {
    // Substitua pelas lógicas reais para obter os valores de corrente e frequência
    var correnteReal = date.corrente; // Substitua pela sua variável real
    var frequenciaReal = date.frequencia; // Substitua pela sua variável real

    // Atualize os elementos no HTML
    document.getElementById('correnteValue').textContent = correnteReal;
    document.getElementById('frequenciaValue').textContent = frequenciaReal;
}

// Atualize os valores a cada segundo
setInterval(updateCorrenteFrequencia, 1000);





