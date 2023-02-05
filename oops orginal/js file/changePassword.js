document.querySelector('.changePassword').classList.add('clearnone');
setTimeout(()=>{
    document.querySelector('.changePassword').classList.add('scale');
},1);
let main ;
let password = document.querySelectorAll('input[type="password"]');
//  buttons ti show or hide a password when user write it
let buttons = document.querySelectorAll('.showorhide');
function passwordvalid(password){
    // strat check password
            password.addEventListener('keyup',()=>{
                if(password.value.length <=4){
                    document.querySelector(`.changePassword .scurity`).style = `display:block;color:red;`
                    password.style = `border-color: red;`
                    document.querySelector(`.changePassword .scurity`).innerText = 'easy';
                }
                if(password.value.length >4 && password.value.length <=8){
                    document.querySelector(`.changePassword .scurity`).style = `display:block;color:#fb7612;`
                    document.querySelector(`.changePassword .scurity`).innerText = 'Medium';
                    password.style = `border-color: #fb7612;`
                }
                if((password.value.length >8 && password.value.length <=12) && rgx(password.value)){
                    document.querySelector(`.changePassword .scurity`).style = `display:block;color:rgb(108 202 240);`
                    document.querySelector(`.changePassword .scurity`).innerText = 'normal';
                    password.style = `border-color:rgb(108 202 240);`
                }
                if(password.value.length >8 ){
                    document.querySelector(`.changePassword .scurity`).style = `display:block;color:rgb(108 202 240);`
                    document.querySelector(`.changePassword .scurity`).innerText = 'normal';
                    password.style = `border-color:rgb(108 202 240);`
                }
                if(password.value.length >12 && rgx(password.value)){
                    document.querySelector(`.changePassword .scurity`).style = `display:block;color:#1bec1b;`
                    document.querySelector(`.changePassword .scurity`).innerText = 'strong';
                    password.style = `border-color:#1bec1b;`
                }
                if(password.value == ''){
                    document.querySelector(`.changePassword .scurity`).style = 'display:none;'
                    password.style = `border-color:#00000057;`
    };
    });

};
passwordvalid(password[0]);
// check strong password
function rgx(value){
    return /(\w+\W+|\W+\w+)(\w+)?(\W+)?(\w+)?(\W+)?/ig.test(value);
};
// when user click at login2 send information to server
document.querySelector('.changePassword #send').onclick = function(e){
    // show main page 
    main = true;
    password.forEach((pswrd)=>{
        if(pswrd.value === ''){
            pswrd.parentNode.classList.add('warning');
            setTimeout(()=>{
                pswrd.parentNode.classList.remove('warning');
            },2000);
        }
    });
    if(password[0].value === '' || password[1].value === ''){
        main = false;
    }
    if(main && password[0].value === password[1].value ){
        // go to main page
        console.log('oops!');
    }else{
            password[1].parentNode.classList.add('warning');
                setTimeout(()=>{
                    password[1].parentNode.classList.remove('warning');
                },2000);
    }
    e.preventDefault();
}
let arr = document.querySelectorAll('input[type="password"]')
// let r = document.querySelector('input[type="email"]');
// validate password
password[1].onfocus = function(){
        checkof(this,password[0].value);
        buttons[0].classList.remove('block');
        buttons[1].classList.add('block');
}
password[0].onfocus = function(){
        checkof(this,password[1].value);
        buttons[1].classList.remove('block');
        buttons[0].classList.add('block');
}
// create function to checkof confirm password to confirm about password entred by user
// my english is bad 'hhhh' i'm sorry but your developer your smart you know what I says
function checkof(inputps,lastps){
    // ps === password okay
        inputps.addEventListener('keyup',()=>{
            if(inputps.value === lastps && inputps.value !== '' && lastps !== ''){
                // change border color to green and show img 'check' by adding class 'checking'
                password[1].style = `border-color:#1bec1b;`;
                document.querySelector('#checkicon').classList.add('checking');
            }else{
                // rest last border color 
                password[1].style = `border: 1px solid #00000057;`;
                document.querySelector('#checkicon').classList.remove('checking');
            }
    });
}
buttons.forEach((btn)=>{
    btn.onclick = function(e){
        e.preventDefault();
        let input = document.querySelector(`.${btn.parentNode.classList} input`);
        btn.classList.toggle('show');
        if(btn.classList.contains('show')){
            input.setAttribute('type','text');
        }else{
            input.setAttribute('type','password');
        }
    }
});
arr[0].focus();