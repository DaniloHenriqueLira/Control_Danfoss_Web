
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function updateButtonsFromURL() {
    var buttons = ['start', 'reset', 'reversao', 'jog'];
    buttons.forEach(function (button) {
        var inputValue = getParameterByName(`date.${button}`);
        if (inputValue !== null) {
            inputValue = inputValue === '1' ? '1' : '0';
            updateButtonStyle(button, inputValue);
        }
    });
}


function toggleValue(inputName) {
    var inputValue = document.querySelector(`[name='"date".${inputName}']`);
    inputValue.value = inputValue.value === '1' ? '0' : '1';
    updateButtonStyle(inputName, inputValue.value);
    updateURL(inputName, inputValue.value);
   
}


function updateButtonStyle(inputName, inputValue) {
    var inputButton = document.querySelector(`.${inputName}Button`);
    inputButton.classList.toggle('active', inputValue === '1');
}


function updateURL(inputName, inputValue) {
    var baseUrl = window.location.href.split('?')[0];
    var newUrl = baseUrl + `?"date".${inputName}=${inputValue}`;
    window.history.replaceState({}, document.title, newUrl);
}


document.querySelector('.startButton').addEventListener('click', function () {
    toggleValue('start');
});

document.querySelector('.resetButton').addEventListener('click', function () {
    toggleValue('reset');
});

document.querySelector('.reversaoButton').addEventListener('click', function () {
    toggleValue('reversao');
});

document.querySelector('.jogButton').addEventListener('click', function () {
    toggleValue('jog');
});


updateButtonsFromURL();

