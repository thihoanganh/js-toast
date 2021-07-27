const btnSuccess = document.getElementsByClassName('btn--success')[0]
const btnError = document.getElementsByClassName('btn--error')[0]
const toastParent = document.getElementById('toast')



const showToast = ({title,msg,type,duration,fadeOut})=>{
    if(toastParent){
        const newToast = document.createElement('div')
        const icons = {
            success:'fas fa-check',
            error:'fas fa-times',
            warn:'fas fa-exclamation',
        }
        duration = duration /1000
        fadeOut = fadeOut/1000
        const icon = icons[type]
        newToast.classList.add('toast',`toast--${type}`)
        newToast.innerHTML =`
            <div class="toast__icon"><i class="${icon}"></i></div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${msg}</p>
            </div>
            <div class="toast__close"><i class="fas fa-times"></i></div>
        `
        newToast.style.animation = `slideFromRight ease ${duration}s,fadeOut ease ${duration}s ${fadeOut}s forwards`
        toastParent.appendChild(newToast)

        var fadeTimeOut = setTimeout(() => {
            toastParent.removeChild(newToast)
        }, duration*1000+fadeOut*1000);

        toastParent.onclick = (e)=>{
            if(e.target.closest('.toast__close')){
                toastParent.removeChild(e.target.closest('.toast'))
                clearTimeout(fadeTimeOut)
            }
        }
    }
 
}

btnSuccess.onclick = ()=>{
    showToast({
        title:'Success',
        msg:'Bạn đã đăng nhập thành công',
        type:'success',
        duration:1000,
        fadeOut:5000
    })
}

btnError.onclick = ()=>{
    showToast({
        title:'Error',
        msg:'Bạn đã đăng nhập thất bại',
        type:'error',
        duration:1000,
        fadeOut:5000
    })
}


