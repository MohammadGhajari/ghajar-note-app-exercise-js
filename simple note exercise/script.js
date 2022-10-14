let colors = document.querySelectorAll(".color");
let input = document.querySelector("input");
let clear = document.querySelector(".clear");
let add = document.querySelector(".add");
let content = document.querySelector(".content");
input.style.backgroundColor = "rgba(0, 0, 0, 0.01)"

colors[0].style.backgroundColor = "#23e523";
colors[1].style.backgroundColor = "rgb(101,101,234)";
colors[2].style.backgroundColor = "red";

colors.forEach(function (color) {
    color.addEventListener("click", function () {
        input.style.backgroundColor = color.style.backgroundColor;
    })
})
clear.addEventListener("click", function () {
    input.value = "";
    input.style.backgroundColor = "rgba(0, 0, 0, 0.01)"
})
add.addEventListener("click", function () {
    if(input.value.length > 0) {
        let newToDo = document.createElement("div");
        newToDo.classList.add("example");
        newToDo.innerHTML = input.value;
        if(input.style.backgroundColor === "rgba(0, 0, 0, 0.01)")
            newToDo.style.backgroundColor = "white";
        else
            newToDo.style.backgroundColor = input.style.backgroundColor
        content.append(newToDo)
        input.value = "";
        input.style.backgroundColor = "rgba(0, 0, 0, 0.01)";
        if(newToDo.style.backgroundColor === "red")
            newToDo.className += " important";
        newToDo.addEventListener("click", function () {
            newToDo.className += " hidden"
            setTimeout(function () {newToDo.remove()}, 400)
        })
    }
})
input.addEventListener("keydown", function (ev) {
    if(ev.key === "Enter")
        if(input.value.length > 0) {
            let newToDo = document.createElement("div");
            newToDo.classList.add("example");
            newToDo.innerHTML = input.value;
            if(input.style.backgroundColor === "rgba(0, 0, 0, 0.01)")
                newToDo.style.backgroundColor = "white";
            else
                newToDo.style.backgroundColor = input.style.backgroundColor
            content.append(newToDo)
            input.value = ""
            input.style.backgroundColor = "white";
            newToDo.addEventListener("click", function () {
                newToDo.className += " hidden"
                setTimeout(function () {newToDo.remove()}, 400)
            })
        }
})


