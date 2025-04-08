// This file contains the JavaScript code that handles the functionality of the gradient generator.

let currentAngle = 45; // Default angle for the gradient

function generateGradient() {
    const color1 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const color2 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    document.body.style.background = `linear-gradient(${currentAngle}deg, ${color1}, ${color2})`;
    document.getElementById('colors').textContent = `Color 1: ${color1} | Color 2: ${color2}`;
}

function rotateGradient() {
    currentAngle = (currentAngle + 45) % 360; // Increment angle by 45 degrees, reset after 360
    const colorsText = document.getElementById('colors').textContent;
    const [color1, color2] = colorsText.match(/#[0-9A-Fa-f]{6}/g); // Extract color codes
    document.body.style.background = `linear-gradient(${currentAngle}deg, ${color1}, ${color2})`;
}

function copyColors() {
    const colorsText = document.getElementById('colors').textContent;
    navigator.clipboard.writeText(colorsText).then(() => {
        showCopyAlert(); // Show the alert when colors are copied
    }).catch(err => {
        console.error('Failed to copy colors: ', err);
    });
}

function showCopyAlert() {
    const alert = document.createElement('div');
    alert.className = 'copy-alert';
    document.body.appendChild(alert);

    // Remove the alert after the animation ends
    setTimeout(() => {
        alert.remove();
    }, 1500); // 1.5 seconds
}

// Initialize with a gradient on page load
window.onload = generateGradient;