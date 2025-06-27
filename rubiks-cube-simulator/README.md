# 3D Rubik's Cube Simulator

## Project Overview

This project is a fully interactive, web-based 3D Rubik's Cube simulator built using Three.js. The application allows users to manipulate a virtual Rubik's Cube in a visually appealing and intuitive manner.

## Features

- **3D Cube Rendering**: A realistic 3D representation of a standard 3x3x3 Rubik's Cube.
- **Interactive Controls**: Users can rotate the cube's faces using mouse drag-and-drop or touch gestures.
- **Cube State Management**: The application accurately tracks the position and orientation of every sticker on the cube.
- **User Interface**: A clean and minimalist UI with buttons for Shuffle, Reset, and Solve.

## Project Structure

```
rubiks-cube-simulator
├── src
│   ├── main.js        # Entry point of the application
│   ├── Cube.js        # Class representing the Rubik's Cube
│   ├── Controls.js     # Class handling user interactions
│   └── UI.js          # Class managing the user interface
├── index.html         # Main HTML document
├── style.css          # Styles for the application
└── README.md          # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd rubiks-cube-simulator
   ```

3. Open `index.html` in a web browser to run the application.

## Usage

- **Shuffle**: Click the Shuffle button to randomize the cube's state.
- **Reset**: Click the Reset button to return the cube to its solved state.
- **Solve**: (Optional) Click the Solve button to animate the solution from the current state.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **3D Graphics**: Three.js

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.