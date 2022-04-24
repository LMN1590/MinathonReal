function updatePlaceHolder(title){
    document.getElementById('realTitle').textContent=title;
}
var arr=document.getElementsByClassName('card')
arr[0].onclick=updatePlaceHolder(this.children[0].innerHTML)