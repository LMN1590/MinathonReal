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
    dict['Plan']="+ Vacation to Hawaii with pay\n+ Two day one night \n+ Departure day: appr. 30/4/2022";
    dict['Budget']="+ About $10.000 \n+ Possible Expenses:\n    - Hotel\n    - Transportation\n    - Insurance\n    - Staff\n    - Necessity";
    dict['Goal']="+ Team-building activities\n+ Relaxation after a successful year\n+ To improve morale \n+ Better reputation for upcoming staff recruitment.";
    dict['Participants']="50 people planned - all staff of the company and possible relatives.";
    dict['Activites']="08h00: Breakfast\n12h00: Lunch\n18h00: Dinner";
    dict['Location']="+ Hawaii\n"; 
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




