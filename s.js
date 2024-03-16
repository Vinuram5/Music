
let play=document.getElementById('play');
let pause=document.getElementById('pause');
let audio=new Audio('bomme.mp3')
play.addEventListener('click',()=>{
    audio.play();
})
pause.addEventListener('click',()=>{
    audio.pause();
})
let text=document.getElementById("text")
let pass=document.getElementById("pass")
let unix=new Audio('salar.mp3')
text.addEventListener('click',()=>{
    unix.play();
})
pass.addEventListener('click',()=>{
    unix.pause();
})
let aa=document.getElementById("aa")
let bb=document.getElementById("bb")
let create=new Audio('c.ogg')
aa.addEventListener('click',()=>{
    create.play();
})
bb.addEventListener('click',()=>{
    create.pause();
})
let cc=document.getElementById("cc")
let dd=document.getElementById("dd")
let car=new Audio('d.ogg')
cc.addEventListener('click',()=>{
    car.play();
})
dd.addEventListener('click',()=>{
    car.pause();
})
let ee=document.getElementById("ee")
let ff=document.getElementById("ff")
let bus=new Audio('f.ogg')
ee.addEventListener('click',()=>{
    bus.play();
})
ff.addEventListener('click',()=>{
    bus.pause();
})
let gg=document.getElementById("gg")
let hh=document.getElementById("hh")
let truck=new Audio('k.mp3')
gg.addEventListener('click',()=>{
    truck.play();
})
hh.addEventListener('click',()=>{
    truck.pause();
})
let ii=document.getElementById("ii")
let jj=document.getElementById("jj")
let ram=new Audio('l.mp3')
ii.addEventListener('click',()=>{
    ram.play();
})
jj.addEventListener('click',()=>{
    ram.pause();
})