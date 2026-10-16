const balloon = document.getElementById("balloon");

const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

let size = 200;

balloon.addEventListener('click', () => {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];

    if (size > 420) {
        size = 200;
        colorIndex = 0; // Reset color index to the first color
        balloon.style.backgroundColor = colors[colorIndex];
    }
    updateBalloonSize();
});

// Function to update the balloon size
balloon.addEventListener('mouseleave', () => {
    if (size > 200) {
        size += 10;
        updateBalloonSize();
    }
    // Reset color index to the first color when mouse leaves
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];

    updateBalloonSize();
});

function updateBalloonSize() {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
}
