function create() {
    var n = document.createElement("a");
    var t = document.createTextNode("tag a ");
    n.appendChild(t);
    document.body.appendChild(n);
   
}
function task2(){
    var a = document.getElementsByTagName("a");
    var count = a.length;
    document.getElementById("countTagResult").innerHTML = count;
}

