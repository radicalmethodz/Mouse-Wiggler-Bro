const cursor = document.getElementById('cursor');
let isWiggling = false;
let wiggleInterval;
let lastPosition = { x: 100, y: 100 };

function startWiggle() {
    if (isWiggling) return;
    isWiggling = true;
    cursor.style.position = 'absolute';
    cursor.style.left = `${lastPosition.x}px`;
    cursor.style.top = `${lastPosition.y}px`;
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    cursor.style.backgroundColor = 'red';

    wiggleInterval = setInterval(() => {
        lastPosition.x += Math.random() > 0.5 ? -1 : 1;
        lastPosition.y += Math.random() > 0.5 ? -1 : 1;
        
        // Keep cursor within the screen bounds
        lastPosition.x = Math.max(0, Math.min(window.innerWidth - 10, lastPosition.x));
        lastPosition.y = Math.max(0, Math.min(window.innerHeight - 10, lastPosition.y));
        
        cursor.style.left = `${lastPosition.x}px`;
        cursor.style.top = `${lastPosition.y}px`;
    }, 1000);
}

function stopWiggle() {
    if (!isWiggling) return;
    clearInterval(wiggleInterval);
    isWiggling = false;
}

// Start wiggling on page load
startWiggle();
