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