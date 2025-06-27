class UI {
    constructor() {
        this.createUI();
    }

    createUI() {
        const container = document.createElement('div');
        container.id = 'ui-container';
        document.body.appendChild(container);

        this.createButton('Shuffle', this.shuffleCube);
        this.createButton('Reset', this.resetCube);
        this.createButton('Solve', this.solveCube);
    }

    createButton(label, onClick) {
        const button = document.createElement('button');
        button.innerText = label;
        button.onclick = onClick.bind(this);
        document.getElementById('ui-container').appendChild(button);
    }

    shuffleCube() {
        // Logic to shuffle the cube
        console.log('Shuffling the cube...');
    }

    resetCube() {
        // Logic to reset the cube to its solved state
        console.log('Resetting the cube...');
    }

    solveCube() {
        // Logic to solve the cube
        console.log('Solving the cube...');
    }
}

export default UI;