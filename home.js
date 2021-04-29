setInterval(myFunction, 1000);
    var counter = 0;

function myFunction() {
    let degree =counter;
    const seconds = document.querySelector(".seconds");
    seconds.style.transform ='rotate('+degree+'deg)'; 
    counter +=6;
}