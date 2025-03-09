
var count = 0;
var text = document.getElementById("moreText");
var text2 = document.getElementById("moreText2");
var exit = document.getElementById("exit");

document.getElementById("fakeLogin").addEventListener("click", (event) => {

    count += 1;
    if (count == 1)
    {
        text.innerText = "I don't think that way will work, you have to do the process manually...";
    }
    else if (count == 2)
    {    
        text2.innerHTML = 'Hmmmm....';
    }
    else if (count < 10)
    {
        var newTop = parseInt(window.getComputedStyle(text).getPropertyValue("top"));
        text.style.top = newTop + 10 + "px";
        text2.style.top = newTop + 10 + "px";
    }
    else if (count < 20)
    {
        var newLeft = parseInt(window.getComputedStyle(text).getPropertyValue("left"));
        text.style.left = newLeft + 10 + "px";
        text2.style.left = newLeft + 1000 + "px";
    }
    else if (count < 34)
    {
        var newTop = parseInt(window.getComputedStyle(text).getPropertyValue("top"));
        text.style.top = newTop + 10 + "px";
        text2.style.top = newTop + 10 + "px";
    }
    else if (count < 45)
    {
        var newTop = parseInt(window.getComputedStyle(text).getPropertyValue("top"));
        text.style.top = newTop - 20 + "px";
        text2.style.top = newTop - 20 + "px";
    }
    else
    {
        exit.style.opacity = '100%';
    }
});