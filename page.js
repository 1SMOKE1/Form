let h2 = document.getElementsByClassName('name')[0];
let btnComment = document.getElementById('button');
let btnEscape = document.getElementById('logout');
let userComentInp = document.getElementById('record')
let btnDel = document.getElementById('buttonDel');
let commentList = document.getElementsByClassName('comment')


if(localStorage.getItem('isAuth')){
  h2.innerHTML = h2.innerHTML + localStorage.getItem('userName')
} else {
  location.href = 'login.html';
}
function ChooseComment(){
  for(let i = 0; i < commentList.length; i++){
    commentList[i].onclick = () => {
      commentList[i].classList.toggle('active')  
    }
  }
}
ChooseComment()


btnDel.onclick = () => {
  for(let i = 0; i < commentList.length; i++){
    if(commentList[i].classList.contains('active')){
      console.log(commentList[i])
      commentList[i].remove()
    }
  }
}


btnComment.onclick = () => {
  let newDiv = document.createElement('div')
  newDiv.classList = 'comment';
  newDiv.innerHTML = userComentInp.value;
  document.getElementsByClassName('comment-block')[0].append(newDiv)
  userComentInp.value = '';
  ChooseComment()
}

btnEscape.onclick = () => {
  localStorage.removeItem('isAuth')
  location.href = 'login.html'
}




