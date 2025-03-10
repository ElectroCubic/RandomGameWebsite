
var ans = document.getElementById("ans");
var ansValue = Math.floor(Math.random() * 3) + 1;
let isChecking = false;
var playerAns = "";
var correctAns = 0;

function checkAns()
{
    if (isChecking) return;
    isChecking = true;

    if (playerAns === ansValue)
    {
        correctAns += 1;
        ans.innerHTML = "Correct: " + correctAns;
        ansValue = Math.floor(Math.random() * 3) + 1;

        if (correctAns > 2)
        {
            ans.innerHTML = "Hooray You Win!";
            spawnSlider();
        }
    }
    else
    {
        ans.innerHTML = "Aww Dang it!";
        setTimeout(() => { window.location.reload(); }, 500);
    }
    setTimeout(() => { isChecking = false; }, 500);
}

function spawnSlider()
{
    document.getElementById("sldr").innerHTML = '<input id="testSlider" min="0" max="350" type="range" value="100" tabindex="-1">'
    const slider = document.getElementById("testSlider");
    slider.style.position = "absolute";
    slider.style.top = "100px";

    slider.addEventListener("input", (event) => {
        let newTop = parseInt(event.target.value);
        slider.style.top = newTop + "px";
    });

}

function typeNumber1() {
    playerAns = 1;
    checkAns();
}

function typeNumber2() {
    playerAns = 2;
    checkAns();
}

function typeNumber3() {
    playerAns = 3;
    checkAns();
}

function goToLevel3()
{
    window.location.href = "level3.html";
}