const board = document.querySelector('#board');

let squareNumber = 7500;

for (let i = 0; i < squareNumber; i++) {
    let square = document.createElement('div');

    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
    const colors = [
        '#FFD700', // золотой
        '#FF69B4', // ярко-розовый
        '#00FF7F', // весенний зелёный
        '#FF4500', // оранжево-красный
        '#1E90FF', // небесно-голубой
        '#FF1493', // глубокий розовый
        '#7CFC00', // кислотно-зелёный
        '#FFA500', // оранжевый
        '#00CED1', // бирюзовый
        '#FFFF00', // жёлтый
        '#FF6347', // томатный
        '#ADFF2F', // жёлто-зелёный
        '#FF00FF', // маджента
        '#00BFFF', // ярко-голубой
        '#FF8C00'  // тёмно-оранжевый
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}


function removeColor(element) {
    element.style.background = '#1D1D1D'
    element.style.boxShadow = '0 0 2px #000'
}