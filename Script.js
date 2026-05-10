let text = "Frontend Developer";
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();

function message(){

document.getElementById("msg").innerHTML =
"Message Sent Successfully!";

}

let btn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.body.scrollTop > 200 ||
document.documentElement.scrollTop > 200){

btn.style.display = "block";

}

else{

btn.style.display = "none";

}

}

function topFunction(){

window.scrollTo({

top:0,
behavior:'smooth'

});

}
