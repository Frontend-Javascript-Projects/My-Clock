setInterval(myFunction, 1000);

function myFunction() {
    let date = new Date();
    const colors = ['red','green','yellow','orange','violet','gray','tomato','dodgerblue','blue','brown']

    let degreeSeconds = date.getSeconds()*6;
    let degreeMinutes =date.getMinutes()*6;
    let degreeHours =date.getHours()*30;
    const seconds = document.querySelector(".seconds");
    const minutes = document.querySelector(".minutes");
    const hours = document.querySelector(".hours");
    const body = document.querySelector("body");
    seconds.style.transform ='rotate('+degreeSeconds+'deg)'; 
    minutes.style.transform ='rotate('+degreeMinutes+'deg)'; 
    hours.style.transform ='rotate('+degreeHours+'deg)'; 
    body.style.backgroundColor = colors[Math.floor(Math.random()*10)];
}

function addNumbers(){
    const numbers = document.querySelector(".numbers");
    var radius = 4;
    var hourNumbers = "";
    for(let i = 1; i<=12; i ++){
        let top = 5 - radius*Math.cos((30*Math.PI/180)*i)+"rem";
        let left = 5 + radius*Math.sin((30*Math.PI/180)*i)+"rem";
        hourNumbers += "<p style='top:"+top+"; left:"+left+"' >"+i+"</p>";
    }
    console.log(radius);
    numbers.innerHTML = hourNumbers;
};