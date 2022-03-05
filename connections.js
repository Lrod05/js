var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
}


function edit() {
    username.innerText = "Luis R.";
}