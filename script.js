let clickCount = 0;

function changeContent() {
    clickCount++;
    switch (clickCount) {
        case 1:
            document.getElementById("dynamicText").textContent = "قبل كلشي , تعرفين احبك واعشقك كثير صح ؟.";
            document.getElementById("dynamicButton").textContent = "اذا صح اكبسي هون";
            break;
        case 2:
            document.getElementById("dynamicText").textContent = "انتي اكثر شخص مهم وقيم بحياتي كلها ❤️.";
            document.getElementById("dynamicButton").textContent = "اكبسي هون للكلام الي بعده";
            break;
        case 3:
            document.getElementById("dynamicText").textContent = "بدي اطلب منك طلب كثيير مهم.";
            document.getElementById("dynamicButton").textContent = "say it";
            break;
        case 4:
            document.getElementById("dynamicText").textContent = "تتزوجيني ؟.";
            document.getElementById("dynamicButton").remove();
            break;
    }

    const textElement = document.getElementById("dynamicText");
    textElement.classList.add("glitch");
    
    setTimeout(() => {
        textElement.classList.remove("glitch");
    }, 500);
}
