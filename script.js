document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    let isWiggling = false;
    let wiggleInterval;
    let lastPosition = { x: 100, y: 100 };

    document.getElementById('startButton').addEventListener('click', startWiggle);
    document.getElementById('stopButton').addEventListener('click', stopWiggle);

    function startWiggle() {
        if (isWiggling) {
            console.log("Wiggle already in progress.");
            return;
        }
        console.log("Starting to wiggle");
        isWiggling = true;
        cursor.style.position = 'absolute';
        cursor.style.left = `${lastPosition.x}px`;
        cursor.style.top = `${lastPosition.y}px`;
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        cursor.style.backgroundColor = 'red';
        cursor.style.zIndex = '1000'; // Ensure visibility above other elements

        wiggleInterval = setInterval(() => {
            lastPosition.x += Math.random() > 0.5 ? -1 : 1;
            lastPosition.y += Math.random() > 0.5 ? -1 : 1;
        
            // Keep cursor within the screen bounds
            lastPosition.x = Math.max(0, Math.min(window.innerWidth - cursor.offsetWidth, lastPosition.x));
            lastPosition.y = Math.max(0, Math.min(window.innerHeight - cursor.offsetHeight, lastPosition.y));
        
            cursor.style.left = `${lastPosition.x}px`;
            cursor.style.top = `${lastPosition.y}px`;
            console.log(`Cursor moved to (${lastPosition.x}, ${lastPosition.y})`);
        }, 50); // Faster interval for smoother movement
    }

    function stopWiggle() {
        if (!isWiggling) {
            console.log("No wiggle to stop.");
            return;
        }
        clearInterval(wiggleInterval);
        isWiggling = false;
        console.log("Stopped wiggling");
    }
});
