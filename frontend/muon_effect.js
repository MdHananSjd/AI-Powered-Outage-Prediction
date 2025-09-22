document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('muonCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;

    const dots = [];
    const dotSpacing = 50;
    const dotSize = 1.5;
    const maxConnectionDistance = 150;
    const maxCursorDistance = 250;

    const mouse = { x: 0, y: 0 };

    // This function creates the dot objects
    function createDots() {
        dots.length = 0; // Clear existing dots
        for (let y = dotSpacing; y < height - dotSpacing; y += dotSpacing) {
            for (let x = dotSpacing; x < width - dotSpacing; x += dotSpacing) {
                dots.push({ x: x, y: y, opacity: 0 });
            }
        }
    }

    // This function draws the static grid of dots
    function drawStaticGrid() {
        ctx.clearRect(0, 0, width, height); // Clear the canvas

        for (let i = 0; i < dots.length; i++) {
            const dot = dots[i];
            
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, 0.1)`; // Constant low opacity
            ctx.fill();
        }
    }

    // This function handles the interactive drawing
    function drawInteractiveLines() {
        drawStaticGrid(); // Redraw the static grid every frame

        for (let i = 0; i < dots.length; i++) {
            const dot1 = dots[i];

            const distanceToMouse = Math.sqrt((dot1.x - mouse.x) ** 2 + (dot1.y - mouse.y) ** 2);
            dot1.opacity = Math.max(0, 1 - distanceToMouse / maxCursorDistance);

            // Connect dots to other dots
            for (let j = i + 1; j < dots.length; j++) {
                const dot2 = dots[j];
                const distance = Math.sqrt((dot1.x - dot2.x) ** 2 + (dot1.y - dot2.y) ** 2);
                if (distance < maxConnectionDistance) {
                    if (dot1.opacity > 0.1 || dot2.opacity > 0.1) {
                        ctx.beginPath();
                        ctx.moveTo(dot1.x, dot1.y);
                        ctx.lineTo(dot2.x, dot2.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(dot1.opacity, dot2.opacity) * 0.2})`;
                        ctx.stroke();
                    }
                }
            }
            
            // Connect dot to cursor
            if (distanceToMouse < maxCursorDistance) {
                ctx.beginPath();
                ctx.moveTo(dot1.x, dot1.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${dot1.opacity})`;
                ctx.stroke();
            }
        }
        
        requestAnimationFrame(drawInteractiveLines);
    }

    // Set up initial canvas size and dot positions
    function init() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        createDots();
        drawInteractiveLines(); // Start the main drawing loop
    }

    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('resize', init);
    init();
});