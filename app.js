function encrypt() {
    const input = document.getElementById('inputText').value;
    const validationMessage = document.getElementById('validationMessage');
    if (!isValid(input)) {
        validationMessage.classList.remove('hidden');
        return;
    }
    validationMessage.classList.add('hidden');
    const encrypted = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    displayResult(encrypted);
}

function decrypt() {
    const input = document.getElementById('inputText').value;
    const validationMessage = document.getElementById('validationMessage');
    if (!isValid(input)) {
        validationMessage.classList.remove('hidden');
        return;
    }
    validationMessage.classList.add('hidden');
    const decrypted = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    displayResult(decrypted);
}

function isValid(text) {
    return /^[a-z\s]+$/.test(text);
}

function displayResult(text) {
    const resultArea = document.getElementById('result');
    resultArea.style.display = 'block';
    resultArea.value = text;
}

function copyText() {
    const resultArea = document.getElementById('result');
    resultArea.select();
    document.execCommand('copy');
}
