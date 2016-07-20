function convert() {
    var number = document.getElementById("number").value;
    var convert = document.getElementById("convertFrom").value;
    var convert2 = document.getElementById("convertTo").value;
    if(convert !== convert2){
        if(convert === "kg"){
        document.getElementById("result").innerHTML = number*2.2046; 
        }else{
        document.getElementById("result").innerHTML = number*0.4535924;   
        }
    }else{
    document.getElementById("result").innerHTML = number; 
    }
}