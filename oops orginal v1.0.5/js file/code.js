// import some function
import {errorMessg as errorMessg} from '../js file/exp.js'
// get information from page 'code'
document.querySelector('.code').classList.add('clearnone');
setTimeout(()=>{
    document.querySelector('.code').classList.add('scale');
},1);
let input = document.querySelector('input');
let send = document.querySelector('input[type="submit"]');
let form = document.querySelector('form');
document.querySelector('#warn').onclick = ()=>{
    errorMessg('warning');
    // add id ti this div
    document.querySelector('.errorOops').id = 'error';
}
send.onclick = (e)=>{
    //   check email valid
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
        input.id = 'warning';
        form.classList = 'warning';
        setTimeout(() => {
            input.parentNode.classList.remove('warning');
            input.id = '';
        }, 2000);
        e.preventDefault();
    }
}
