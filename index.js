// Array to hold our bouncing objects
let bouncers = [];
    
// Animation update loop for all bouncers
function update() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  bouncers.forEach(bouncerObj => {
    // Update position
    bouncerObj.posX += bouncerObj.speedX;
    bouncerObj.posY += bouncerObj.speedY;
    
    // Bounce off left/right edges
    if (bouncerObj.posX <= 0) {
      bouncerObj.posX = 0;
      bouncerObj.speedX = -bouncerObj.speedX;
    }
    if (bouncerObj.posX + bouncerObj.element.clientWidth >= screenWidth) {
      bouncerObj.posX = screenWidth - bouncerObj.element.clientWidth;
      bouncerObj.speedX = -bouncerObj.speedX;
    }
    
    // Bounce off top/bottom edges
    if (bouncerObj.posY <= 0) {
      bouncerObj.posY = 0;
      bouncerObj.speedY = -bouncerObj.speedY;
    }
    if (bouncerObj.posY + bouncerObj.element.clientHeight >= screenHeight) {
      bouncerObj.posY = screenHeight - bouncerObj.element.clientHeight;
      bouncerObj.speedY = -bouncerObj.speedY;
    }
    
    // Apply new position
    bouncerObj.element.style.left = bouncerObj.posX + 'px';
    bouncerObj.element.style.top = bouncerObj.posY + 'px';
  });
  
  requestAnimationFrame(update);
}

// Start the animation loop
update();

// Form submit event to create bouncing objects
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const count = parseInt(document.getElementById('bouncerCount').value);
  const text = document.getElementById('bouncerText').value;
  const color = document.getElementById('bouncerColor').value;
  if (isNaN(count) || count < 1) return;
  
  // Optionally hide the form after submission
  document.getElementById('bouncerForm').style.display = 'none';
  
  // Create the requested number of bouncers
  for (let i = 0; i < count; i++) {
    let bouncerEl = document.createElement('div');
    bouncerEl.classList.add('bouncer');
    bouncerEl.textContent = text;
    bouncerEl.style.backgroundColor = color;
    
    // Append the new element to the body
    document.body.appendChild(bouncerEl);
    
    // Set a random initial position within the viewport
    let posX = Math.random() * (window.innerWidth - bouncerEl.clientWidth);
    let posY = Math.random() * (window.innerHeight - bouncerEl.clientHeight);
    
    // Set random speeds between 2 and 8 pixels per frame
    let speedX = 2 + Math.random() * 6;
    let speedY = 2 + Math.random() * 6;
    // Randomize the initial direction
    if (Math.random() < 0.5) speedX = -speedX;
    if (Math.random() < 0.5) speedY = -speedY;
    
    // Add this bouncer to our array
    bouncers.push({
      element: bouncerEl,
      posX: posX,
      posY: posY,
      speedX: speedX,
      speedY: speedY
    });
  
  }
});