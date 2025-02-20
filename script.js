const usernameInput = document.getElementById("username");
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");
const displayName = document.getElementById("display-name");

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Good Morning";
    } else if (hour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

saveButton.addEventListener("click", function () {
    const name = usernameInput.value.trim();
    if (name) {
        localStorage.setItem("savedName", name);
        displayName.textContent = `${getGreeting()}, ${name}!`;
    }
});

clearButton.addEventListener("click", function () {
    localStorage.removeItem("savedName");
    displayName.textContent = "";
});

window.addEventListener("load", function () {
    const storedName = localStorage.getItem("savedName");
    if (storedName) {
        displayName.textContent = `${getGreeting()}, ${storedName}!`;
    }
});

