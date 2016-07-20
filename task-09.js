function big(size){
    var element = size.target;
	    element.style.width = 320 + "px";
	    element.style.height = 240 + "px";
}
function small(size){
    var element = size.target;
        element.style.width = 128 + "px";
        element.style.height = 96 + "px";
}
var album = document.getElementById("gallery");
album.addEventListener("mouseover", big, false);
album.addEventListener("mouseout", small, true);
