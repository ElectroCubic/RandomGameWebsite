
var count = 0;
var totalCounts = 0;
var platform1 = document.getElementById("platform1");
var platform2 = document.getElementById("platform2");
var platform3 = document.getElementById("platform3");
var platform4 = document.getElementById("platform4");
var block = document.getElementById("block1");
let keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key] = true;

    if (keys["ArrowUp"] || keys[" "])
    {
        count += 1;
        totalCounts += 1;

        if (totalCounts > 17)
        {
            block1.style.top = 200 + "px";
        }

        if (count > 14)
        {
            platform1.style.top = 500 + "px";
            platform2.style.top = 200 + "px";
            platform3.style.top = 100 + "px";
            platform4.style.top = 550 + "px";
            count = 0;
        }
        else
        {
            var newTop = parseInt(window.getComputedStyle(platform1).getPropertyValue("top"));
            var newTop2 = parseInt(window.getComputedStyle(platform2).getPropertyValue("top"));
            var newTop3 = parseInt(window.getComputedStyle(platform3).getPropertyValue("top"));
            var newTop4 = parseInt(window.getComputedStyle(platform4).getPropertyValue("top"));
            platform1.style.top = newTop - 15 + "px";
            platform2.style.top = newTop2 + 20 + "px";
            platform3.style.top = newTop3 + 20 + "px";
            platform4.style.top = newTop4 - 30 + "px";
        }
    }
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});
