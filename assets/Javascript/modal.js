

var root = document.getElementById('root')
var registration = document.querySelector(".navbar-item-registration")


var modalLogin = registration.addEventListener('click', function (e){
 
    var modal = document.createElement('div')
    modal.classList.add('modal')

    // modal.style.display = 'flex'

    modal.innerHTML = ` 
        <div class="modal_overlay"></div>
        <div class="modal_body">
            <span class="modal_body-exit"><i class="fa-solid fa-x"></i></span>
            <div class="auth-form-heading">
                <h3>Đăng ký</h3>
                <span>Đăng nhập</span>
            </div>
            <div class="auth-form-label">
                <div class="auth-form-name auth-form_input">
                    <label for="form-label">Tên đăng ký </label>
                    <input class="auth-form-name_input" type="text" placeholder="Vd: tuancandongsang">
                    <span class="auth-form-name-alert form-alert"></span>
                    <span class="auth-form-name-alert auth-form-name-alert-ed form-alert">Tên này đã được sử dụng</span>
                </div>
                <div class="auth-form-email auth-form_input">
                    <label for="form-label">Email đăng ký</label>
                    <input class="auth-form-email_input" type="text" placeholder="Vd: tuancandongsang@gmail.com">
                    <span class="auth-form-email-alert form-alert"></span>
                    <span class="auth-form-email-alert auth-form-email-alert-ed form-alert">Email này đã được sử dụng</span>
                </div>
                <div class="auth-form-password auth-form_input">
                    <label for="form-label">Nhập mật khẩu</label>
                    <input class="auth-form-password_input" type="password" placeholder="tối thiểu 6 ký tự">
                    <span class="auth-form-password-alert form-alert"></span>
                </div>
                <div class="auth-form-password-again auth-form_input">
                    <label for="form-label">Nhập lại mật khâu</label>
                    <input class="auth-form-password-again_input" type="password" placeholder="Mật lại khẩu...">
                    <span class="auth-form-password-again-alert form-alert"></span>
                </div>
            </div>
            <div class="auth-form-forget-submit">
                <button class="auth-form-submit">Đăng ký </button>
                <div class="auth-form-forget">
                    <span>Quên mật khẩu</span>
                    <span>Trợ giúp</span>
                </div>
            </div>
            <div class="auth-form-back">
                <span>Trở lại</span>
                <span>Cần trợ giúp</span>
            </div>
            <div class="auth-form-footer">
                <span class="auth-form-footer-sms"><i class="fa-regular fa-message-dots"></i> sms</span>
                <span class="auth-form-footer-facebook"><i class="fa-brands fa-facebook"></i> facebook</span>
                <span class="auth-form-footer-google"><i class="fa-regular fa-g"></i> google+</span>
            </div>
        </div>


        <div class="modal_body-login">
            <span class="modal_body-exit modal_body-exit-login"><i class="fa-solid fa-x"></i></span>
            <div class="auth-form-heading">
                <h3>Đăng nhập</h3>
                <span class="modal_body-login-change">Đăng ký</span>
            </div>
            <div class="auth-form-label">
                <div class="auth-form-name auth-form_input">
                    <label for="form-label">Tên đăng nhập / sdt / email </label>
                    <input class="auth-form-name_input auth-form-name_input-login" type="text" placeholder="Vd: tuancandongsang">
                    <span class="auth-form-name-alert auth-form-name-alert-login form-alert"></span>
                </div>
                <div class="auth-form-password auth-form_input">
                    <label for="form-label">Nhập mật khẩu</label>
                    <input class="auth-form-password_input auth-form-password_input-login" type="password" placeholder="tối thiểu 6 ký tự">
                    <span class="auth-form-password-alert auth-form-password-alert-login form-alert"></span>
                </div>
            </div>
            <div class="auth-form-forget-submit">
                <button class="auth-form-submit auth-form-submit-login">Đăng Nhập </button>
                <div class="auth-form-forget">
                    <span>Quên mật khẩu</span>
                    <span>Trợ giúp</span>
                </div>
            </div>
            <div class="auth-form-back">
                <span>Trở lại</span>
                <span>Cần trợ giúp</span>
            </div>
            <div class="auth-form-footer">
                <span class="auth-form-footer-sms"><i class="fa-regular fa-message-dots"></i> sms</span>
                <span class="auth-form-footer-facebook"><i class="fa-brands fa-facebook"></i> facebook</span>
                <span class="auth-form-footer-google"><i class="fa-regular fa-g"></i> google+</span>
            </div>
        </div>
        <div class="registration-loading">
            <img class="registration-loading-img" src="./assets/img/www_tiengdong_com-hinh-anh-mang-lag-xoay-tron.png.gif" alt="">
            <span class="registration-loading-wait" >Xin chờ trong giây lát</span>
        </div>
        <div class="registration_success">
            <span class="registration_success-icon"> <i class="fa-solid fa-circle-check"></i> </span>
            <span class="registration_success-message">Wellcome ....</span>
            <button class="registration_success-back">Trở lại</button>
        </div>


    `;
    
    root.appendChild(modal)



    // KEY BOART 

    document.onkeyup = function (e){
        switch (e.which ) {
            case 13:
                functionSubmit ();
            break;
            case 27:
                root.removeChild(modal);
            break;
        }
    }



    var modal_overlay = document.querySelector('.modal_overlay')

    modal_overlay.addEventListener('click', function (){
        root.removeChild(modal)
    }) 

    var exit = document.querySelector('.modal_body-exit')

    exit.onclick = function () {
        root.removeChild(modal)
    }
   


    //FORM DANG KY


    // tên đăng ký
    var formName = document.querySelector('.auth-form-name_input')
    var alertName = document.querySelector('.auth-form-name-alert')
    
    function functionName() {
        if (formName.value.trim() === '') {
            alertName.textContent = 'Vui lòng nhập trường này'
            return false
        } else if (formName.value.trim().length < 6 ) {
            alertName.textContent = 'Tên tối thiểu 6 ký tự'
            return false
        } else if (formName.value.trim().length > 20 ) {
            alertName.textContent = 'Tên tối đa 20 ký tự'
            return false
        }
        else (
            alertName.textContent = ''
            )
        return true
    }
    
    formName.addEventListener('blur', functionName) 
    
    formName.oninput = function () {
        alertName.textContent = ''
    }

    // formName.onkeyup = function (e) {
    //     console.log(e.which)
    // }

    // email đăng ký
    var formEmail = document.querySelector('.auth-form-email_input')
    var alerEmail = document.querySelector('.auth-form-email-alert')
    
    
    function ValidateEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formEmail.value)){
            return (true)
        }
         alert("Trường này phải là email hợp lệ!")
        return (false)
    }
    
    function functionEmail() {
        if (ValidateEmail()) {
            alerEmail.textContent = ''
            return true
        }
        else {
            alerEmail.textContent = 'Vui lòng nhập Email'
            return false
        }
    }
    
    formEmail.oninput = function () {
        alerEmail.textContent = ''
    }
    
    formEmail.addEventListener('blur', functionEmail )  
       
    
    // mật khẩu đăng ký
    var formPassWord = document.querySelector('.auth-form-password_input')
    var alerPassWord = document.querySelector('.auth-form-password-alert')
    
    
    function functionPassWord() {
        if (formPassWord.value.trim() === '') {
            alerPassWord.textContent = 'Vui long nhập trường này'
            return false
        }
        else if (formPassWord.value.trim().length <6 ) {
            alerPassWord.textContent = 'Mật khẩu tối thiểu 6 ký tự'
            return false
        }
        return true
    }
    
    formPassWord.addEventListener ('blur', functionPassWord )
    
    formPassWord.oninput = function () {
        alerPassWord.textContent = ''
    }
    
    
    // nhập lại mật khẩu đăng ký
    var formPassWordAgain = document.querySelector('.auth-form-password-again_input')
    var alerPassWordAgain = document.querySelector('.auth-form-password-again-alert')
    
    
    function functionPassWordAgain() {
        if (formPassWord.value !== formPassWordAgain.value) {
            alerPassWordAgain.textContent = 'Mật khẩu nhập lại không trùng nhau'
            return false
        }
        return true
    }
    
    formPassWordAgain.addEventListener('blur', functionPassWordAgain )
    
    formPassWordAgain.oninput = function () {
        alerPassWordAgain.textContent = ''
    }
    
    
    
    
    // SUBMIT 
    var modal_body = document.querySelector('.modal_body')
    var registration_loading = document.querySelector('.registration-loading')
    var registration_success = document.querySelector('.registration_success')
    var registration_successBack = document.querySelector('.registration_success-back')
    
    var submit = document.querySelector('.auth-form-submit')
    
    function functionSubmit() {
        if (functionName()){
            if(functionEmail()){
                if(functionPassWord()){
                    if(functionPassWordAgain()){
                        modal_body.style.display = 'none'
                        registration_loading.style.display = 'flex'
    
                        setTimeout( function() {
                            registration_success.style.display = 'flex'
                            registration_loading.style.display = 'none'
                        },3000)
    
                        registration_successBack.onclick = function () {
                            root.removeChild(modal)
                        }

                        document.onkeyup = function (e){
                            switch (e.which ) {
                                case 13:
                                    root.removeChild(modal);
                                break;
                                case 27:
                                    root.removeChild(modal);
                                break;
                            }
                        }
    
                    }
                }
            }
        }
    }
    submit.addEventListener('click', functionSubmit )


    
    // submit.addEventListener('click', function() {
    
    //     if (functionName()){
    //         if(functionEmail()){
    //             if(functionPassWord()){
    //                 if(functionPassWordAgain()){
    //                     modal_body.style.display = 'none'
    //                     registration_loading.style.display = 'flex'
    
    //                     setTimeout( function() {
    //                         registration_success.style.display = 'flex'
    //                         registration_loading.style.display = 'none'
    //                     },3000)
    
    //                     registration_successBack.onclick = function () {
    //                         root.removeChild(modal)
    //                     }
    
    //                 }
    //             }
    //         }
    //     }
    
    // })
    

    // toast mesage rgiter  // login

    var sorryRegiter = document.querySelectorAll('.auth-form-back span, .auth-form-forget span')
    for (let i= 0; i < sorryRegiter.length; ++i ) {
        sorryRegiter[i].addEventListener('click', sorry)
    }
    


    

    // DANG NHAP 

    var login = document.querySelector('.modal_body-login')
    
    
    let changelogin = document.querySelector('.auth-form-heading > span')
    changelogin.addEventListener('click', function () {
        login.style.display = 'block'
        modal_body.style.display = 'none'

        //exit tắt X

        var exitlogin = document.querySelector('.modal_body-exit-login')

        exitlogin.onclick = function () {
            root.removeChild(modal)
        }

        //thay đổi khi ấn đăng nhập/đăng ký trong modal
        var loginChange = document.querySelector('.modal_body-login-change')
        loginChange.addEventListener('click', function () {
            login.style.display = 'none'
            modal_body.style.display = 'block'
        })

        // nhập input trong đăng nhập

        // input name đăng nhập
        var loginName = document.querySelector('.auth-form-name_input-login')
        var loginNameAlert = document.querySelector('.auth-form-name-alert-login')

        function functionName() {
            if (loginName.value.trim() === '') {
                loginNameAlert.textContent = 'Vui lòng nhập trường này'
                return false
            } else if (loginName.value.trim().length < 6 ) {
                loginNameAlert.textContent = 'Tên tối thiểu 6 ký tự'
                return false
            } else {
                loginNameAlert.textContent = ''
            }
            return true
        }
        
        loginName.addEventListener('blur', functionName) 
        
        loginName.oninput = function () {
            loginNameAlert.textContent = ''
        }

        // input email đăng nhập
        var loginPassWord = document.querySelector('.auth-form-password_input-login')
        var loginPassWordAlert = document.querySelector('.auth-form-password-alert-login')
        function functionPassWord() {
            if (loginPassWord.value.trim() === '') {
                loginPassWordAlert.textContent = 'Vui long nhập trường này'
                return false
            }
            else if (loginPassWord.value.trim().length <6 ) {
                loginPassWordAlert.textContent = 'Mật khẩu tối thiểu 6 ký tự'
                return false
            }
            return true
        }
        
        loginPassWord.addEventListener ('blur', functionPassWord )
        
        loginPassWord.oninput = function () {
            loginPassWordAlert.textContent = ''
        }

        // button đăng nhập

        var loginSubmitLogin = document.querySelector('.auth-form-submit-login')
        
        function functionSubmit() {
            if (functionName()){
                if(functionPassWord()){

                    login.style.display = 'none'

                    registration_loading.style.display = 'flex'

                    setTimeout( function() {
                        registration_success.style.display = 'flex'
                        registration_loading.style.display = 'none'
                    },3000)

                    registration_successBack.onclick = function () {
                        root.removeChild(modal)
                    }

                    document.onkeyup = function (e){
                        switch (e.which ) {
                            case 13:
                                root.removeChild(modal);
                            break;
                            case 27:
                                root.removeChild(modal);
                            break;
                        }
                    }
                    }
            }
        }
        loginSubmitLogin.addEventListener('click', functionSubmit )


        document.onkeyup = function (e) {
            switch (e.which) {
                case 13:
                    functionSubmit();
                break;
                case 27:
                    root.removeChild(modal);
                break;
            }
        }
    })
})


export default modalLogin;