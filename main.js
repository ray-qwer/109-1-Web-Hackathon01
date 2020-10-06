var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
var theChosen = document.getElementsByClassName("Chosen")
input.value = ''
color.value = '#b0b0b0'
//var text_bar = document.createElementNS

for (var d=0 ; d<cells.length;++d){
    cells[d].addEventListener('click',e => {
        if(theChosen.length!==0)
            theChosen[0].className = "date"
        e.target.className="Chosen";
    })
}
window.addEventListener('keypress',e =>{if(e.key==="Enter")add_word()})
button.addEventListener('click',e =>{add_word()})
function add_word(){
    
    //console.log(theChosen.className)
    if(input.value!==""&theChosen.length===1){
        if(theChosen[0].childElementCount===0){
            var new_text = document.createElement('p');
            theChosen[0].appendChild(new_text);
        }
        theChosen[0].firstElementChild.innerHTML=input.value;
        theChosen[0].firstElementChild.style.color=color.value;
        theChosen[0].firstElementChild.style.background = "transparent"
        theChosen[0].className = "date";
        input.value = "";
        input.placeholder="Type something..."

    }
}







//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var l=0; l<themeButton.length; ++l) {
    themeButton[l].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}