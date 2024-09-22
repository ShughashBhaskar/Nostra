var x = document.getElementById("closeof")
var offer = document.getElementById("offer")
x.addEventListener("click",function(){
    offer.style.display = "none"
})

var menu = document.getElementById("menu")
var sidenav = document.querySelector(".sidenav")
var Close = document.getElementById("x")
menu.addEventListener("click",function(){
    sidenav.style.left="0px"
})
Close.addEventListener("click",function(){
    sidenav.style.left="-50%"
})