var count=3; 
var addLikes = document.querySelector("#add");

function add1() {
    count++;
    addLikes.innerText = + count;
    console.log(count);
    return(count);
}
