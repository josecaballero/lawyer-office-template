var url = window.location.href;
var enlaces = document.getElementsByTagName("header")[0].getElementsByTagName("nav")[0].getElementsByTagName("a");

for(var i=0;i<enlaces.length;i++){
    if( url === enlaces[i].href ){
        enlaces[i].className = "active";
    }
}