// src/main.js
import * as THREE from 'three';
import { Cube } from './Cube.js';
import { Controls } from './Controls.js';
import { UI } from './UI.js';

let scene, camera, renderer, cube, controls, ui;

function init() {
    // Set up the scene
    scene = new THREE.Scene();
    
    // Set up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Set up lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    // Initialize the cube
    cube = new Cube();
    scene.add(cube.getMesh());

    // Initialize controls
    controls = new Controls(cube, camera, renderer.domElement);

    // Initialize UI
    ui = new UI(cube);

    // Start the rendering loop
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize the application
init();