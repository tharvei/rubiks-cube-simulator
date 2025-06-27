# Prompt: Build a 3D Rubik's Cube Simulator

## Project Vision

Create a fully interactive, web-based 3D Rubik's Cube simulator. The project should be highly polished and visually appealing, drawing inspiration from the Vibe Coding demo by Matthew Berman showcased at Google IO. The goal is to create a smooth, intuitive, and engaging user experience.

## Core Features

1.  **3D Cube Rendering**:
    *   Render a standard 3x3x3 Rubik's Cube using a 3D library like **Three.js**.
    *   Each of the 26 individual cubies should be a distinct object.
    *   Implement standard Rubik's Cube colors (White, Yellow, Blue, Green, Orange, Red).
    *   Set up proper lighting and camera controls (e.g., orbit controls) to allow the user to view the cube from any angle.

2.  **Interactive Controls**:
    *   Allow users to rotate the faces of the cube using mouse drag-and-drop or touch gestures.
    *   The rotation should feel natural. Clicking and dragging on a cubie should initiate a rotation of the corresponding face.
    *   All rotation animations must be smooth and visually pleasing.

3.  **Cube State Management**:
    *   Maintain the state of the cube at all times. The application must accurately track the position and orientation of every sticker.
    *   This state must be updated correctly after every move.

4.  **User Interface (UI)**:
    *   Create a clean, minimalist UI around the 3D view.
    *   Include the following control buttons:
        *   **Shuffle**: Randomizes the cube's state with a series of valid moves.
        *   **Reset**: Returns the cube to its solved state.
        *   **Solve (Optional)**: Implements an algorithm to animate the solution from the current state.

## Recommended Technical Stack

*   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
*   **3D Graphics**: **Three.js**
*   **Framework (Optional)**: A lightweight framework like Svelte, Vue.js, or React could be used, but vanilla JS is also perfectly suitable.

## Implementation Guidelines

*   **Project Structure**: Organize the code logically into modules (e.g., `main.js`, `Cube.js`, `Controls.js`, `UI.js`).
*   **Separation of Concerns**: The core logic for representing the cube's state and handling rotations should be separated from the Three.js rendering code.
*   **Performance**: Ensure the application runs smoothly at 60 FPS, especially during animations.

## Final Deliverable

A single-page web application that fulfills all the core features described above. The code should be well-commented, clean, and adhere to modern best practices.