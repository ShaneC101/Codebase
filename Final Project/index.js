// 
// 
// 1sgM01LfXCb0-RvSF

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classlist += " modal__overlay--visable";
    emailjs
    .sendForm(
     'service_o7pv847',
     'template_g7jz32s',
     event.target,
     '1sgM01LfXCb0-RvSF'
    ).then(() => {
        loading.classlist.removel{"modal__overlay--visable"};
        success.classlist += " modal__overlay--visable";
    }).catch(() => {
        loading.classList.removel("modal__overlay--visable");
        alert(
            "the email service is temporarily unavailable. Please contact me direct at wecholders@gmial.com"
        )
    })
}