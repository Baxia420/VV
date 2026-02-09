let noClicks = 1;
let extraNoClicks = 0;
const maxNoClicks = 8; // Total number of gifs in your list
const minNoScale = 0.65;
let noScale = 1;
let yesScale = 1; 

const gifElement = document.getElementById("togepi-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

// The array now contains your original 4 plus your 4 new additions
const gifs = [
    "assets/images/togepi-happy.gif",     // Original 1
    "assets/images/togepi-sad-1.gif",     // Original 2
    "assets/images/togepi-sad-2.gif",     // Original 3
    "assets/images/togepi-crying.gif",    // Original 4
    "assets/images/melody-sad-2.gif",     // New Melody 1
    "assets/images/melody-sad-3.gif",     // New Melody 2
    "assets/images/togepi-sad-3.gif",     // New Togepi 3
    "assets/images/togepi-sad-4.gif"      // New Togepi 4
];

const buttonMessages = [
    "Are you sure??", 
    "Pookie please", 
    "POOKIE PLEASE", 
    "You can't do this to me!",
    "I'm gonna cry...",
    "Look even Melody is sad now..",
    "Don't do this!",
    "Please its not too late to say yes! :("
];

noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks) {
        gifElement.src = gifs[noClicks];
    }
    noButton.textContent = buttonMessages[noClicks % maxNoClicks];

    const baseWidth = parseFloat(yesButtonStyle.width);
    const scaledWidth = baseWidth * yesScale;

    if (scaledWidth < maxYesWidth) {
        yesScale += 1.2; 
        yesButton.style.transform = `scale(${yesScale})`;
        
        const currentGap = parseFloat(window.getComputedStyle(buttonContainer).gap) || 20;
        const newGap = currentGap + 80; 
        buttonContainer.style.gap = `${newGap}px`;

        if (noScale > minNoScale) {
            noScale -= 0.1;
            noButton.style.transform = `scale(${noScale})`;
        }
    } else {
        extraNoClicks++;
        // Trigger redirect on the 6th total click
        if (extraNoClicks >= 2) {
            window.location.href = "no-choice.html";
        }
    }

    noClicks++;
});