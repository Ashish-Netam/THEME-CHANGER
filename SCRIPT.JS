let boxes =document.querySelectorAll(".box");
let header =document.querySelector("h2");
let footer =document.querySelector("h4");

boxes.forEach(function(box) {
    box.addEventListener("click", function() {

        let color=box.classList[1]
        let bgColor = getComputedStyle(box).backgroundColor;

document.body.style.backgroundColor = bgColor;

        if(color === "white") {
            header.style.color = "black";
            footer.style.color = "black";
        } else if (color==="beige"){
            header.style.color = "black";
            footer.style.color = "black";
        }
        else{
            header.style.color = "white";
            footer.style.color = "white";
        }
    });
});

/*

let button = document.querySelector("#mode");

button.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")) {
        button.textContent="Light Mode";
    } else {
        button.textContent="Dark Mode";
    }
});
*/