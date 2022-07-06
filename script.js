
var myName = document.querySelector("#myName");
const date = new Date();
var myClock = document.querySelector("#myClock");
var myDay = document.querySelector("#myDay");
let myVar;
let time;
var d = new Date(); 

    
    
setInterval(() => {
  myVar = new Date();
  time = myVar.getHours() + ":" + myVar.getMinutes() + ":" + myVar.getSeconds();
  myClock.innerHTML = time;
}, 1000);

var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
myDay.innerHTML=gunler[d.getDay()]

var a = prompt("Lütfen adınızı giriniz :)");
if (a.length > 0) {
  myName.innerHTML = `${a}`;
} else {
  myName.innerHTML = `Kullanıcı`;
}
