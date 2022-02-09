changeMenu();

const virtualPiano = '<p class="about-poject">One of the many things that a front-end developer has to take care of is binding the functionality of a web application to the keys on the keyboard.</p>' +
    '<p class="about-poject"> In order to develop and strengthen the important skills of working with keyboard keys, you will make a virtual piano in this project.</p>'
const flashCards = '<p class="about-poject">If you are a beginner web developer, you need to know the basics of CSS and HTML.</p>' +
    '<p class="about-poject">This project is great for those who need somewhere to start.</p>' +
    '<p class="about-poject">Your goal is to create a stylized page with flashcards, each containing a question on one side and the answer on the other.</p>' +
    '<p class="about-poject">You can choose any subject you want for your flashcards!</p>'
const closeButton = '<button class="close-window" onclick="hideWindow(this)">Close</button>'

const aboutProject = document.getElementsByClassName('window')[0];
const portfolio = document.getElementById('portfolio-container');

function showWindow(proj) {
    window.location.href = '#portfolio';
    switch (proj) {
        case 'flashCards':
            aboutProject.innerHTML += flashCards;
            break;
        case 'virtualPiano':
            aboutProject.innerHTML += virtualPiano;
            break;
    }
    aboutProject.innerHTML += closeButton;
    aboutProject.style.visibility = 'visible';
    portfolio.style.visibility = 'hidden';
    document.body.style.overflow = 'hidden';
}

function hideWindow(obj) {
    document.body.style.overflow = 'auto';
    portfolio.style.visibility = 'visible';
    obj.parentNode.style.visibility = 'hidden';
    obj.parentNode.innerHTML = '';
}

document.getElementById('hamburger-button').addEventListener('click', function () {
    const ham = document.getElementsByClassName('hamburger')[0];
    ham.style.visibility = ham.style.visibility == 'hidden' ? 'visible' : 'hidden';
});

window.onresize = function() {
    changeMenu();
};

function changeMenu() {
    if (window.innerWidth >= 900) {
        Array.from(document.getElementsByClassName('full-size-menu-item'))
            .forEach(item => item.style.visibility = 'visible');
        document.getElementById('hamburger-button').style.display = 'none';
        document.getElementsByClassName('hamburger')[0].style.visibility = 'hidden'
    } else {
        Array.from(document.getElementsByClassName('full-size-menu-item'))
            .forEach(item => item.style.visibility = 'hidden');
        document.getElementById('hamburger-button').style.display = 'flex';
    }
}
