// 1. Create a HTML file

// a. create a button

// b. add event listener on click to the button, function should console log "button clicked" message to the console

let button = document.getElementById("button");

button.addEventListener("click", function () {
    console.log("Button clicked");
})

// 2. Create a HTML file

// a. create a button

// b. add event listener on click to the button, function should change the background color of the button to red

button.addEventListener("click", function changeBg() {
    button.style.backgroundColor = "red";
})

// 3. Create a HTML file

// a. create a button

// b. add event listener on click to the button, function should change the background color of the button to red and change the text of the button to "Clicked"

button.addEventListener("click", function changeBgAndText() {
    button.style.backgroundColor = "red";
    button.textContent = "Clickee";
})

// 4. Create a HTML file

// a. add an input field

// b. add a button

// c. add event listener on click to the button, function should console log the value of the input field

let input = document.getElementById("input");
button.addEventListener("click", function () {
    console.log(input.value);
})

// 5. Create a HTML file

// a. add a button

// b. when button is clicked, function should create a div element and append it to the body with the text "Hello World"

button.addEventListener("click", function () {
    let div = document.createElement("div");
    div.textContent = "Hello World";
    document.body.appendChild(div);

})

// 6. Create a HTML file

// a. add a button

// b. add an input field

// c. when button is clicked, function should create a div element and append it to the body with the text of the input field

button.addEventListener("click", function () {
    let div = document.createElement("div");
    div.textContent = input.value;
    document.body.appendChild(div);
})

// 7. Create a HTML file

// a. add a button

// b. add an input field

// c. when button is clicked, function should create a div element and append it to the body with the text of the input field

// d. when div is clicked, function should change the background color of the div to red

button.addEventListener("click", function () {
    let div = document.createElement("div");
    div.textContent = input.value;
    document.body.appendChild(div);
    div.addEventListener("click", function () {
        div.style.backgroundColor = "red";
    })
})



// 8. Create a Todo app that will display todo list

// a. user should be able to create a todo with a custom text

// b. user should be able to delete a todo

// c. user should be able to mark a todo as completed

// d. user should be able to edit a todo

// c. add timestamp to the todo when it was created

