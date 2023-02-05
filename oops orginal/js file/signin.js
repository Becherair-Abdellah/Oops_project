// get information 
let loginSignIn = document.querySelector('.loginSignIn');
     // add class clearnone to clear 'display : none;'
        loginSignIn.classList.add('clearnone');
     setTimeout(()=>{
        loginSignIn.classList.add('translate');
    },350);
document.querySelector('#send').onclick = function(e){
    // e.preventDefault();
    umbercardvalid(numbercard); // check of username
    passwordvalid(password); // check of password;
    // send information to server
}
// function check validating input
let numbercard = document.querySelector('input[type="number"]'); 
let password = document.querySelector('input[type="password"]');
function umbercardvalid(nbrcard){
    if(nbrcard.value.length !==12 ||nbrcard.value == '' ){
        nbrcard.parentNode.classList.add('warning');
        setTimeout(()=>{
            nbrcard.parentNode.classList.remove('warning');
        },2000);
}
}
function passwordvalid(password){
// strat check password
if(password.value == ''){
    password.parentNode.classList.add('warning');
    setTimeout(()=>{
        password.parentNode.classList.remove('warning');
    },2000);
}
};
//  buttons ti show or hide a password when user write it
let button = document.querySelector('.showorhide');
password.onfocus = function(){
    button.classList.add('block');

}
    button.onclick = function(e){
            e.preventDefault();
            let input = document.querySelector(`.${button.parentNode.classList} input`);
            button.classList.toggle('show');
            if(button.classList.contains('show')){
                input.setAttribute('type','text');
            }else{
                input.setAttribute('type','password');
            }
}