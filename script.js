let noClicks = 1;
let extraNoClicks = 0; // Counter for clicks after Yes is maxed out
const maxNoClicks = 4;
const minNoScale = 0.65;
let noScale = 1;
let yesScale = 1; 

const gifElement = document.getElementById("togepi-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

const gifs = ["assets/images/togepi-happy.gif", "assets/images/togepi-sad-1.gif", "assets/images/togepi-sad-2.gif", "assets/images/togepi-crying.gif"];
const buttonMessages = ["Are you sure??", "Pookie please", "Pookie PLEASE", "You can't do this to me!"];

noButton.addEventListener("click", () => {
    // 1. Change Gifs and Text as usual
    if (noClicks < maxNoClicks) {
        gifElement.src = gifs[noClicks];
    }
    noButton.textContent = buttonMessages[noClicks % maxNoClicks];

    // 2. Logic for button scaling
    const baseWidth = parseFloat(yesButtonStyle.width);
    const scaledWidth = baseWidth * yesScale;

    if (scaledWidth < maxYesWidth) {
        // Yes button still has room to grow
        yesScale += 0.5;
        yesButton.style.transform = `scale(${yesScale})`;
        
        // No button continues to shrink
        if (noScale > minNoScale) {
            noScale -= 0.1;
            noButton.style.transform = `scale(${noScale})`;
        }
    } else {
        // 3. Yes button is at MAX - Start counting towards the redirect
        extraNoClicks++;
        
        if (extraNoClicks >= 3) {
            // Redirect to the new page after 3 more "No" clicks
            window.location.href = "no-choice.html";
        }
    }

    noClicks++;
});