function task1(){
var input = document.getElementById('input').value;
var array = input.split(',');
array.sort();

var count = 0;
var countMax = 0;
var elementMax = '';

for(var i = 0; i < array.length-1; i++){
    if(array[i] === array[i+1]){
        count++;
        if(count > countMax){
            countMax = count;
            elementMax = array[i];
        }
    }else{
        count = 0;
    }
}
document.getElementById('countMaxResult').innerHTML = countMax+1;
document.getElementById('elementMaxResult').innerHTML = elementMax;
}
