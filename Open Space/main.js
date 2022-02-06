console.log('Password: TrustNo1')

window.onload = function() {

    const rocket = document.getElementById('rocket');
    const passwordField = document.getElementById('password');
    const submitPasswordButton = document.getElementById('ok');
    const checkboxList = Array.from(document.getElementsByClassName('checkbox'));
    const sliderList = Array.from(document.getElementsByClassName('slider'));
    const launchButton = document.getElementById('launch');

    for (const item of document.getElementsByTagName('input')) {
        item.onchange = function () {
            if (checkboxList.filter(elem => elem.checked === false).length === 0
                && sliderList.filter(elem => elem.value == 100).length === 5) {
                launchButton.removeAttribute("disabled");
            }
        }
    }

    submitPasswordButton.addEventListener('click', function () {
        if (passwordField.value === "TrustNo1")
            unlockElements();
    });

    launchButton.addEventListener('click', function() {
        rocket.style.animation = 'rocket-launch 4s linear';
        setTimeout(function () {
            rocket.style.display = 'none';
        }, 3500);
    });

    function unlockElements() {
        checkboxList.forEach(elem => elem.removeAttribute("disabled"));
        sliderList.forEach(elem => elem.removeAttribute("disabled"));
        passwordField.setAttribute("disabled", "");
        document.getElementById('ok').setAttribute("disabled", "");
    }

}
