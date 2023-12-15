const passwordBox=document.querySelector('.password');
const length=12;
const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase='abcdefghijklmnopqrstuvwxyz';
const nums="0123456789";
const symbol='!@#$%^&*()_={}:"<>?|`~';
const allChars=upperCase+lowerCase+nums+symbol;
function createPass(){
    let password='';
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=nums[Math.floor(Math.random()*nums.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];

    }
    passwordBox.value=password
}
