let i=0
//
function CallAlert(A){
    alert(A);
}
let slides = document.getElementsByClassName("slide");
function MakeVis(num){
    
    
    slides[num].style.display = "block"; 
}
function MakeInvis(num){
    
    
    slides[num].style.display = "None"; 
}
function ButtonPress(num){
    MakeInvis(i);
    let numslides=slides.length
    
    i=i+num;
    if(i<0){
        i=numslides-1;
    }
    if(i>numslides-1){
        i=0;
    }
    MakeVis(i);
}
function GetI(){
    alert(i);
}
MakeVis(i);