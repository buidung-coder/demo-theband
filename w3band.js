let buyBtns = document.querySelectorAll('.buy-tickets')
let newModal = document.querySelector('.modal')
let modalClose = document.querySelector('.modal-close')
function showByTicket(){
    newModal.classList.add('open')
    }
function closeByTicket(){
    newModal.classList.remove('open')
}
for( let buyBtn of buyBtns){
buyBtn.addEventListener('click', showByTicket)
}
modalClose.addEventListener('click', closeByTicket)