

let name = prompt("Lütfen isminizi giriniz");
let setName = document.querySelector("#myName")

if(Number(name)){
    //sayı girilirse alert fırlatıyor
    alert("Sayı girmeyiniz")
    location.reload()
}else if(!name){
    alert("Boş bırakmaynız")
    location.reload()
}else{
    //Girilen ismin ilk harfini büyültüyoruz
    name=name[0].toUpperCase()+name.slice(1)
    setName.innerHTML=`${name}`
    setName.classList.add("name")
    
}


//10'dan küçük değer gelince başına sıfır ekliyor
function checkTime(time){
    
    (time < 10) ? time="0"+time : time

    return time
}


function showTime() {
    let clockDiv = document.querySelector("#myClock");
    let date = new Date();
    let days= ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();

    minutes = checkTime(4);
    seconds = checkTime(seconds);

    clockDiv.innerHTML = `${date.getHours()} : ${minutes} : ${seconds}
     ${days[date.getDay()]}`;
     setTimeout(showTime, 1000)

  }

  showTime()