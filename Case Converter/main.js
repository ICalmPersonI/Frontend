let textArea = document.getElementById("text-area");

document.getElementById("upper-case").addEventListener("click", function() {
    textArea.value = textArea.value.toLocaleUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    textArea.value = textArea.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function() {
    textArea.value = firstLetterToUpperCase(textArea.value.split(' ')).join(' ');
});

document.getElementById("sentence-case").addEventListener("click", function() {
    textArea.value = firstLetterToUpperCase(textArea.value.split('. ')).join('. ');
});

document.getElementById("save-text-file").addEventListener("click", function() {
    download("text.txt",textArea.value);
});

function firstLetterToUpperCase(text) {
    let newText = [];
    for (const word of text)
        newText.push(word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
    return newText
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}