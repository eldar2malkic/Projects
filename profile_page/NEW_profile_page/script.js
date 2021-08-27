
var replaceName = document.querySelector("#FullName");

function changeName() {
    replaceName.innerText = "Diana Joe";
}

var removalReq = document.querySelector("#item1"); 
var count = 2;
var reduce1 = document.querySelector("#cr")

function removeRequest() {
    removalReq.remove();
    count--;
    reduce1.innerText = count;
    console.log(count);
}

var removalReq2 = document.querySelector("#item2");
var count = 2;
var reduce1 = document.querySelector("#cr")

function removeRequest2() {
    removalReq2.remove();
    count--;
    reduce1.innerText = count;
    console.log(count);
}

var yc = 418; 
var add1 = document.querySelector("#yc")

function addyc() {
    yc++; 
    add1.innerText = yc; 
    console.log(yc);
}