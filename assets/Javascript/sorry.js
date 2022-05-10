

var box = document.getElementById('box')

function sorry(e) {

    e.preventDefault();

    var toast = document.createElement('div')

    toast.classList.add('toast')
    toast.style.display = 'block'
    
    toast.innerHTML = `
        <div class="toast_body">
            <span class="toast_body-icon"><i class="fa-brands fa-slideshare"></i></span>
            <div class="toast_body-message">
                <span class="toast_body-message-title">Xin lỗi...</span><br>
                <span >Tôi chưa làm chức năng này! <br> Sẽ làm sớm nhất có thể...</span>
            </div>
            <span class="toast_body-close"><i class="fa-regular fa-circle-xmark"></i></span>
        </div>
    `;

    box.appendChild(toast)
    
    box.onclick = function (e) {
        if(e.target.closest('.toast_body-close')) {
            box.removeChild(toast)
            clearTimeout(removeToast)
        }
    }

    var removeToast = setTimeout(function () {
        box.removeChild(toast)
    },3000)

    document.onkeyup = function (e) {
        switch (e.which) {
            case 27:
                box.removeChild(toast)
            break;
        }
    }

}


//  CATELOGI
var catelogy = document.querySelectorAll('.category-home li')
for ( let i = 0; i < catelogy.length ; ++i ) {
    catelogy[i].addEventListener('click', sorry )
}

//HOME FILLER

var homeFitterToast = document.querySelector('.home-filter')
    homeFitterToast.addEventListener('click', sorry)

//PRODUCT

var productToasr = document.querySelectorAll('.product-item')
for (let i= 0; i < productToasr.length; ++i ) {
    productToasr[i].addEventListener('click', sorry)
}

//NEXT PAGE

var nextpageToast = document.querySelectorAll('.next-page > span')
for (let i= 0; i < nextpageToast.length; ++i ) {
    nextpageToast[i].addEventListener('click', sorry)
}

// FOOTER

var footerToast = document.querySelectorAll('.footer h4,.footer p,.footer img,.footer span')
for (let i= 0; i < footerToast.length; ++i ) {
    footerToast[i].addEventListener('click', sorry)
}

// NAVBAR NOTIFY 

var navbarNotyToast = document.querySelectorAll('.navbar-notification-history a,.navbar-notification-history button')
for (let i= 0; i < navbarNotyToast.length; ++i ) {
    navbarNotyToast[i].addEventListener('click', sorry)
}

//NAVBAR HELP
// var navbarHelpToast = document.querySelector('.navbar-item navbar-item-help span')
// navbarHelpToast.addEventListener('click', sorry)

//NAVBAR LANGGUAGE
var navbarLanguageToast = document.querySelectorAll('.navbar-languages-item')
for (let i= 0; i < navbarLanguageToast.length; ++i ) {
    navbarLanguageToast[i].addEventListener('click', sorry)
}








