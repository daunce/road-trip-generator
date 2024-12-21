const instructions = [
    "Follow the car in front for 15 minutes.",
    "Take the next left turn.",
    "Drive straight for 10 km.",
    "Stop at the next gas station.",
    "Turn around and head back for 5 minutes.",
    "Drive until you see a coffee shop, then stop.",
    "Follow the signs to the nearest town."
];

const instructionElement = document.getElementById('instruction');
const nextButton = document.getElementById('next');

// Function to show a random instruction
function showRandomInstruction() {
    const randomIndex = Math.floor(Math.random() * instructions.length);
    instructionElement.textContent = instructions[randomIndex];
}

// Show an instruction on page load
showRandomInstruction();

// Change instruction on button click
nextButton.addEventListener('click', showRandomInstruction);
