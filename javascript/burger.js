const burgerButton = document.getElementById('burgerButton');
const navPhone = document.getElementById('navPhone');
const content = document.getElementById('content');

burgerButton.onclick = function() {
    navPhone.style.display = 'flex'
}

content.onclick = function() {
    navPhone.style.display = 'none'
}