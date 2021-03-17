function get_paragraph_1(){
    var array1=[];
    for(var i=1; i<=6;i++){
    array1.push(document.getElementById("div1_INPUT_"+i).value);
    }
document.getElementById("show_paragraph_1").innerHTML=array1.join(". ");
}

function get_paragraph_2(){
    var array2=[];
    for(var i=2; i<=6;i++){
    array2.push(document.getElementById("div2_INPUT_"+i).value);
    }
document.getElementById("show_paragraph_2").innerHTML=array2.join(". ");
}