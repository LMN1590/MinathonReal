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
    dict['Plan']="Vacation to Hawaii \n2 day one night \nwith an ass";
    dict['Budget']="$1000 per person x 50 participants = $50000";
    dict['Goal']="To strengthen the bonds between employees";
    dict['Participants']="50 people planned";
    dict['Activites']="8h00: Breakfast\n12h00: Lunch\n18h00: Dinner";
    dict['Location']="Definitely-real Hotel"; 
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




