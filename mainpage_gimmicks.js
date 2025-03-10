
function goToLogin()
{
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("testSlider");

    var top = parseInt(window.getComputedStyle(slider).getPropertyValue("top"));

    slider.addEventListener("input", (event) => {
        let newTop = top + parseInt(event.target.value);
        slider.style.top = newTop + "px";
    });
});

