let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
    document.body.classList.remove("dark-theme")
 }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visable";
    emailjs
    .sendForm(
     'service_o7pv847',
     'template_g7jz32s',
     event.target,
     '1sgM01LfXCb0-RvSF'
    ).then(() => {
        loading.classList.removel(" modal__overlay--visable");
        success.classList += " modal__overlay--visable";
    }).catch(() => {
        loading.classList.removel("modal__overlay--visable");
        alert(
            "the email service is temporarily unavailable. Please contact me direct at wecholders@gmial.com"
        );
    })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('model--open');
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}