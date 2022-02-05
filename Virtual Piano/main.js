const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U']

document.addEventListener('keydown', function(event) {
    const key = event.code.split('')[event.code.length - 1]
    if (keys.includes(key))
        new Audio(`keys/${key}.mp3`).play()
});