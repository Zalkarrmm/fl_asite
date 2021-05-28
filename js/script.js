const modal = document.querySelector('.modalWindow')
const callBtn = document.querySelector('.orderCallBtn')
const noneBtn = document.querySelector('.noneBtn')
callBtn.addEventListener('click' , e => {
    e.preventDefault();
    modal.classList.toggle('getModal')
})

noneBtn.addEventListener('click' , e => {
    e.preventDefault()
    modal.classList.remove('getModal')
})

// second
const collaplseBtn = document.querySelectorAll('.getCollapse');
const commits = document.querySelector('.collapsed')
const commitz = document.querySelector('.collapsedd')
const commites = document.querySelector('.collapsedd1')

function getCollapse(){
    commits.classList.toggle('d-block')
}
function getCollapsed(){
    commitz.classList.toggle('d-block')
}
function getCollapsede(){
    commites.classList.toggle('d-block')
}