function getrandomcolor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.getElementById('changeColorButton');
button.addEventListener('click', () => {
    const randomColor = getrandomcolor();
    document.body.style.backgroundColor = randomColor;
});