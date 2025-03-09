
// Cube Platformer Logic

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    
    function resizeCanvas()
    {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.style.overflow = "hidden";
    }
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // cube properties

    let cube = {
        x: 100,
        y: 550,
        width: 50,
        height: 50,
        dx: 0,
        dy: 0,
        speed: 3,
        gravity: 0.5,
        jumpPower: -12,
        grounded: false,
    };
    
    // Input handling

    let keys = {};
    
    document.addEventListener("keydown", (e) => {
        keys[e.key] = true;
    });
    
    document.addEventListener("keyup", (e) => {
        keys[e.key] = false;
    });
    
    function updateGame() {
        if (keys["ArrowRight"] || keys["d"])
        {
            cube.dx = cube.speed;
        }
        else if (keys["ArrowLeft"] || keys["a"])
        {
            cube.dx = -(cube.speed);
        }
        else
        {
            cube.dx = 0;
        }
        
        if ((keys["ArrowUp"] || keys[" "]) && cube.grounded)
        {
            cube.dy = cube.jumpPower;
            cube.grounded = false;
        }
        
        // Constantly apply gravity
        cube.dy += cube.gravity;
        
        // Update position
        if (cube.x <= 0 || (cube.x + cube.width) >= canvas.width)
        {
            cube.x = (cube.x <= 0) ? 1 : canvas.width - cube.width - 1;
        }
        
        cube.x += cube.dx;
        cube.y += cube.dy;
        
        // Collision Logic for ground and UI
        if (cube.y + cube.height >= canvas.height)
        {
            cube.y = canvas.height - cube.height;
            cube.dy = 0;
            cube.grounded = true;
        }

        // Interaction with UI elements
        const canvasRect = canvas.getBoundingClientRect();
        const uiElements = document.querySelectorAll("p, h1, h2, h3, button, input, img");
        
        uiElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            
            const left = rect.left - canvasRect.left;
            const right = rect.right - canvasRect.left;
            const top = rect.top - canvasRect.top;
            //const bottom = rect.bottom - canvasRect.top;
            
            if (cube.x + cube.width > left && cube.x < right &&
                cube.y + cube.height > top && cube.y + cube.height - cube.dy <= top)
            {
                cube.y = top - cube.height;
                cube.dy = 0;
                cube.grounded = true;
            }
        });
    }
    
    function drawCube()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.fillRect(cube.x, cube.y, cube.width, cube.height);
    }

    const triggers = document.querySelectorAll(".trigger");

    function checkTriggers() {
        triggers.forEach(trigger => {
            const rect = trigger.getBoundingClientRect();
            const cubeBottom = cube.y + cube.height;
            const cubeRight = cube.x + cube.width;
            
            if (cubeRight > rect.left && cube.x < rect.right && cubeBottom > rect.top && cube.y < rect.bottom ) {
                
                const functionName = trigger.dataset.function;

                if (typeof window[functionName] === "function")
                {
                    window[functionName]();
                }
            }
        });
    }
    
    function gameLoop()
    {
        updateGame();
        drawCube();
        checkTriggers()
        requestAnimationFrame(gameLoop);
    }
    
    gameLoop();
});
