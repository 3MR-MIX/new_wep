let yy = document.getElementById("yy");
let nn = document.getElementById("nn");
let aa = document.getElementById("aa");
let ss = document.getElementById("ss");
function show1(){
    yy.style.display='block';
    nn.style.display='none';
    aa.style.display='none';
    ss.style.display='none';
}
function show2(){
    yy.style.display='none';
    nn.style.display='block';
    aa.style.display='none';
    ss.style.display='none';
}
function show3(){
    yy.style.display='none';
    nn.style.display='none';
    aa.style.display='block';
    ss.style.display='none';
}
function show4(){
    yy.style.display='none';
    nn.style.display='none';
    aa.style.display='none';
    ss.style.display='block';
}
function buy(){
    window.location.href="login.html"
}