var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu-icon')
// Lưu kích thước ban đầu 
var currentHeaderHeight = header.clientHeight

// Đóng mở mobile menu
mobileMenu.onclick = function (){
   var isClose = header.clientHeight === currentHeaderHeight;
   if(isClose){
    header.style.height = 'auto'
   }
   else{
    // Trở về kích thước ban đầu
    header.style.height = null
   }
}

// Tự động đóng menu khi bấm vào thẻ a. 
var menuItems = document.getElementsByClassName('navbar-link')
for(var i = 0; i<menuItems.length; i++){
    var menuItem = menuItems[i]
    menuItem.onclick = function (){
        header.style.height = null
    }
}

// Mở modal buy ticket

const buyTicketBtns = document.getElementsByClassName('js-buy-ticket')
const modal = document.querySelector('.modal')
const closeIcon = document.querySelector('.modal-close')
const closeBtn = document.querySelector('.modal-close-btn')
const modalcontainer = document.querySelector('.modal-container')
console.log(closeBtn)

    function showModal(){
        modal.classList.add('open')
    }

    function closeModal(){
        modal.classList.remove('open')
    }

for( const btn of buyTicketBtns){
    btn.addEventListener('click', showModal)
}

closeIcon.addEventListener('click', closeModal)
closeBtn.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)

// Chặn sự kiện nổi bọt
modalcontainer.addEventListener('click', function (event){
    event.stopPropagation()
})
