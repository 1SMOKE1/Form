let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let confirmPass = document.getElementById('confirm-pass');

let btn = document.getElementById('button');


btn.onclick = function(){
  function Check(item, cond, val){
    if(cond.test(val)){
      item.style.border = '1px solid green'
      return true
    } else{
      item.style.border = '1px solid red';
      return false
    } 
  }
  let nameCondition = /\w{3}/gi;
  let nameCheck = Check(name, nameCondition, name.value)
  let phoneCondition = /\+\(380\)\d{9}/;
  let phoneCheck = Check(phone, phoneCondition, phone.value)
  let emailCondition = /\w{4,10}\@\w{4,10}\.\w{2}/
  let emailCheck = Check(email, emailCondition, email.value)
  let passCondition = /\w{4}/gi
  let passCheck = Check(pass, passCondition, pass.value)
  function CheckPass(item, cond, val){
    if(val === cond){
      item.style.border = '1px solid green'
      return true
    } else {
      item.style.border = '1px solid red'
      return false
    }
  } 
  let confirmPassCheck = CheckPass(confirmPass, pass.value, confirmPass.value)

  console.log(nameCheck)
  if(nameCheck && phoneCheck && emailCheck && passCheck && confirmPassCheck){
    localStorage.setItem('userName', name.value);
    localStorage.setItem('userEmail', email.value);
    localStorage.setItem('userPass', pass.value);
    location.href = 'login.html';
  }
}