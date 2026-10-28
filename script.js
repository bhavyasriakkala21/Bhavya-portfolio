
document.addEventListener("DOMContentLoaded", function () {
    const greeting = document.querySelector("header h1");

    if (greeting) {
        greeting.style.cursor = "pointer";

        greeting.addEventListener("click", function () {
            greeting.textContent = "Welcome to my portfolio! 💜";
        });
    }
});
