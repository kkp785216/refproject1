// Add hovered class in selected class items
let list = document.querySelectorAll('#navigation li');
function activeLink() {
    list.forEach((item) => 
    item.classList.remove('hovered'))
    this.classList.add('hovered')
}
list.forEach((item) => 
item.addEventListener('mouseover', activeLink))
list[1].classList.add('hovered');
// Menu Toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('#navigation');
let main = document.querySelector('#main');
let topbar = document.querySelector('.topbar')

toggle.onclick = function () {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    topbar.classList.toggle('active');
}