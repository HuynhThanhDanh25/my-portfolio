document.addEventListener('DOMContentLoaded', function() {
    const lantern = document.getElementById('lantern');
    const lanternWrapper = document.getElementById('lanternWrapper');
    const stopBtn = document.getElementById('stopBtn');
    const startBtn = document.getElementById('startBtn');
    const speedUpBtn = document.getElementById('speedUpBtn');
    const speedDownBtn = document.getElementById('speedDownBtn');
    const speedValue = document.getElementById('speedValue');
    
    let rotationSpeed = 5;
    let isRotating = true;
    let rotationAngle = 0;
    let animationId = null;
    
    function updateSpeedDisplay() {
        speedValue.textContent = rotationSpeed;
    }
    
    function rotateLantern() {
        if (!isRotating) return;
        
        rotationAngle += rotationSpeed * 0.1;
        lantern.style.transform = `rotateX(-10deg) rotateY(${rotationAngle}deg)`;
        
        animationId = requestAnimationFrame(rotateLantern);
    }
    
    function startRotation() {
        if (isRotating) return;
        isRotating = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        rotateLantern();
    }
    
    function stopRotation() {
        isRotating = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }
    
    function increaseSpeed() {
        if (rotationSpeed < 20) {
            rotationSpeed += 1;
            updateSpeedDisplay();
        }
    }
    
    function decreaseSpeed() {
        if (rotationSpeed > 1) {
            rotationSpeed -= 1;
            updateSpeedDisplay();
        }
    }
    
    lanternWrapper.addEventListener('mouseenter', function() {
        stopRotation();
    });
    
    lanternWrapper.addEventListener('mouseleave', function() {
        startRotation();
    });
    
    stopBtn.addEventListener('click', stopRotation);
    startBtn.addEventListener('click', startRotation);
    speedUpBtn.addEventListener('click', increaseSpeed);
    speedDownBtn.addEventListener('click', decreaseSpeed);
    
    updateSpeedDisplay();
    rotateLantern();
    
    startBtn.disabled = true;
});
