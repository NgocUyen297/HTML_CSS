function toast({title='', msg ='', type = 'info', duration = 3000}){
    const main = document.getElementById("toast");
        if(main){
            const icons ={
                success: 'fa-solid fa-circle-check',
                info: 'fa-solid fa-circle-info',
                warning: 'fa-solid fa-circle-exclamation',
                error: 'fa-solid fa-bomb',
            }
            const icon=icons[type]
            const toast = document.createElement("div");
            const autoRemoveToast =  // remove toast sau khi đã hiển thị xong ko thôi nó sẽ chiếm chỗ trên html dom
            setTimeout(function(){
                main.removeChild(toast)
            }, duration +1000)

            toast.onclick = function(e){
              if(  e.target.closest('.toast__close')){
                
                main.removeChild(toast)
                clearTimeout(autoRemoveToast)
              }
            }
            toast.classList.add("toast", `toast--${type}`);
            toast.style.animation=` SlideInLeft ease 0.3s, FadeOut linear 3s ${duration}s forwards`
            toast.innerHTML = `
            <div class="toast__icon">
            <i class="${icons[type]}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${msg}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-times"></i>
            </div>
            `;
            main.appendChild(toast);

           
        }
    }
function ShowSuccessToast(){
    toast({
        title: 'Success', 
        msg: 'Máy vi tính kết nối internet(Window, unbutu, Linux)',
        type:'success',
        duration: 1000
    });
}
function ShowInfoToast(){
    toast({
        title: 'Info', 
        msg: 'Máy vi tính kết nối internet(Window, unbutu, Linux)',
        type:'info',
        duration: 10000
    });
}
function ShowWarningToast(){
    toast({
        title: 'Warning', 
        msg: 'Máy vi tính kết nối internet(Window, unbutu, Linux)',
        type:'warning',
        duration: 10000
    });
}
function ShowErrorToast(){
    toast({
        title: 'Error', 
        msg: 'Máy vi tính kết nối internet(Window, unbutu, Linux)',
        type:'error',
        duration: 10000
    });
}