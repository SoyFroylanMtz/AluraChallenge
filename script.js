// Seleccionamos ambos botones y los campos de texto
const btnEncrypt = document.getElementById('encrypt');
const btnDecrypt = document.getElementById('decrypt');
const btnCopy = document.getElementById('copy');
const inputText = document.getElementById('inputText');
const resultArea = document.getElementById('result');

// Agregamos el evento click al botón Encriptar
btnEncrypt.addEventListener('click', function() {
    resultArea.textContent = encrypt(inputText.value);
    toggleActiveButton(btnEncrypt);
});

// Agregamos el evento click al botón Desencriptar
btnDecrypt.addEventListener('click', function() {
    resultArea.textContent = decrypt(inputText.value);
    toggleActiveButton(btnDecrypt);
});

// Agregamos el evento click al botón Copiar
btnCopy.addEventListener('click', function() {
    navigator.clipboard.writeText(resultArea.textContent).then(() => alert('Texto copiado al portapapeles'));
});

// Definimos la función para encriptar
function encrypt(text) {
    return text.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Definimos la función para desencriptar
function decrypt(text) {
    return text.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

// Funciones adicionales para gestionar la activación de botones
function toggleActiveButton(activeButton) {
    const buttons = [btnEncrypt, btnDecrypt];
    buttons.forEach(button => {
        if(button === activeButton) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
