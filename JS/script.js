function updatePlaceHolder(title){
    document.getElementById('realTitle').textContent=title;
    document.getElementById('id-desc').value=dict[title];
    console.log(dict[title]);
}
function init(){
    var arr=document.getElementsByClassName('card');
    for(const a of arr){
        a.setAttribute("onclick","updatePlaceHolder(this.children[0].innerHTML)");
        
    }
    dict['Plan']="Aloha";
    dict['Budget']="Hello";
    dict['Goal']="Hello";
    dict['Participants']="Hello";
    dict['Activites']="Hello";
    dict['Location']="Hello"; 
    document.getElementById("id-desc").addEventListener("keypress", submitOnEnter);
}
var dict={};
function submitOnEnter(event){
    if(event.which === 13 && !event.shiftKey){
        var title=document.getElementById('realTitle').textContent;
        dict[title]=this.value;
        this.textContent="";
        console.log(dict[title]);
    }
}




