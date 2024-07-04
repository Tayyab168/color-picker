document.addEventListener('DOMContentLoaded', function() {
    let body = document.querySelector("body");
    let input = document.getElementById("favcolor");

    input.addEventListener('input', function() {
        body.style.background = input.value;
    });
});
