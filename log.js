let email = document.getElementById('email');
let pass = document.getElementById('pass');
let btn = document.getElementById('button');


btn.onclick = () => {
  function Check(item, cond, val){
    if(cond.test(val)){
      item.style.border = '1px solid green'
      return true
    } else{
      item.style.border = '1px solid red';
      return false
    } 
  }
  let emailCondition = /\w{4,10}\@\w{4,10}\.\w{2}/
  let emailCheck = Check(email, emailCondition, email.value)
  let passCondition = /\w{4}/gi
  let passCheck = Check(pass, passCondition, pass.value)
  if(emailCheck && passCheck){
    function CheckUser(item, localItem){
      if(item.value === localStorage.getItem(localItem)){
        return true
      } else {
        return false
      }
    }
    let CheckUserEmail = CheckUser(email, 'userEmail')
    let CheckUserPass = CheckUser(pass, 'userPass')
    if(CheckUserEmail && CheckUserPass){
      localStorage.setItem('isAuth', true)
      location.href = 'page.html';
    }
  }
}

