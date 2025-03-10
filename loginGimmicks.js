
var count = 0;
var text = document.getElementById("moreText");
var text2 = document.getElementById("moreText2");
var exit = document.getElementById("exit");
var loginBtn = document.getElementById("fakeLogin");

loginBtn.addEventListener("mousedown", () => {

    count += 1;
    if (count == 1)
    {
        text.innerText = "You'll have to create an account first, let's see the options.";
    }
    else if (count == 2)
    {    
        text2.innerHTML = 'Hmmmm....';
    }
    else if (count < 10)
    {
        var newTop = parseInt(window.getComputedStyle(text).getPropertyValue("top"));
        var newTop2 = parseInt(window.getComputedStyle(text2).getPropertyValue("top"));
        text.style.top = newTop + 10 + "px";
        text2.style.top = newTop2 + 10 + "px";
    }
    else if (count < 20)
    {
        var newLeft = parseInt(window.getComputedStyle(text).getPropertyValue("left"));
        var newLeft2 = parseInt(window.getComputedStyle(text2).getPropertyValue("left"));
        text.style.left = newLeft + 10 + "px";
        text2.style.left = newLeft2 + 10 + "px";
    }
    else if (count < 30)
    {
        var newTop = parseInt(window.getComputedStyle(text).getPropertyValue("top"));
        var newTop2 = parseInt(window.getComputedStyle(text2).getPropertyValue("top"));
        text.style.top = newTop + 10 + "px";
        text2.style.top = newTop2 + 10 + "px";
    }
    else if (count < 41)
    {
        var newTop = parseInt(window.getComputedStyle(text).getPropertyValue("top"));
        var newTop2 = parseInt(window.getComputedStyle(text2).getPropertyValue("top"));
        text.style.top = newTop - 20 + "px";
        text2.style.top = newTop2 - 20 + "px";
    }
    else if (count >= 50)
    {
        exit.style.opacity = '100%';
        var newLeft = parseInt(window.getComputedStyle(loginBtn).getPropertyValue("left"));
        loginBtn.style.left = newLeft + 20 + "px";
    }
});

function goToLevel1()
{
    window.location.href = "level1.html";
}