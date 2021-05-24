const modal = document.querySelector('.modalWindow')
const callBtn = document.querySelector('.orderCallBtn')
const noneBtn = document.querySelector('.noneBtn')
callBtn.addEventListener('click' , e => {
    e.preventDefault();
    modal.classList.toggle('getModal')
})
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        window.location.reload()
    }
}
noneBtn.addEventListener('click' , e=> {
    e.preventDefault();
    modal.style.display = "none";
    window.location.reload()
})

// second
const collaplseBtn = document.querySelectorAll('.getCollapse');
const commits = document.querySelector('.collapsed')
const commits2 = document.querySelector('.collapsed2')

const commitz = document.querySelector('.collapsedd')
const commitz2 = document.querySelector('.collapsedd2')

function getCollapse(){
    commits.classList.toggle('d-block')
    commits2.classList.toggle('d-block')
}
function getCollapsed(){
    commitz.classList.toggle('d-block')
    commitz2.classList.toggle('d-block')
}