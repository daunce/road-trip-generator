const instructions = [
    "Follow the car in front for 15 minutes.",
    "Take the next left turn.",
    "Drive straight for 10 km.",
    "Drive straight for 10 km.",
    "Drive straight for 10 km.",
    "Buy snacks at the next servo.",
    "Turn around and head back for 5 minutes.",
    "Turn at the next road that starts with the same letter as the artist on the radio.",
    "Take the next right.",
    "Turn at the next major intersection. Less than half a tank = left, otherwise right.",
    "Look at the time, the last digit for minutes, skip that many radio stations.",
    "5 times the number of tissues/rubbish on the floor - drive that many minutes.",
    "Do a U turn when you see the next major fast food outlet.",
    "Follow a white car for 10 minutes.",
    "Follow the road for 15 minutes.",
    "You have 10 minutes to find the slowest speed limit.",
    "After seeing 2 motorbikes, turn around.",
    "Driver's choice for 10 minutes.",
    "Passenger's choice for 10 minutes.",
    "Back seat passenger's choice for 10 minutes.",
    "Over 28 degrees, buy ice-cream.",
    "Drive north for 15 minutes.",
    "Drive south for 15 minutes.",
    "Drive east for 15 minutes.",
    "Drive west for 15 minutes.",
    "Wildcard - driver overrides the radio station.",
    "Wildcard - passenger overrides the radio station.",
    "Skip to the next radio station.",
    "Skip to the next radio station.",
    "Drive to the tallest landmark you can see.",
    "Wildcard - passenger can skip an instruction."
    

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
