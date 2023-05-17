console.log("page loaded...");


var placeholder1 = document.querySelector(".clickRemove1");

function removeMe1() {
    placeholder1.remove();
}


var placeholder2 = document.querySelector(".clickRemove2");

function removeMe2() {
    placeholder2.remove();
}

var profileName = document.querySelector(".card-body h1")

function switchMe() {
    profileName.innerText = "John Smith"
}
    

