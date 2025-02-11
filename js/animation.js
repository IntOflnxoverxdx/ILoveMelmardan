text = document.querySelector(".heart__text").textContent
text.split("").forEach(letter => {
    document.querySelector(".heart__letters").innerHTML += `<span class="heart__letter" ${letter == " " ? 'style="color:transparent"' : ""}>${letter == " " ? "c" : letter}</span>`
});


let odd = 1
document.querySelectorAll(".card").forEach(card => {
    card.onclick = () => { 
        if (odd) card.classList.add("slideLeft")
        if (!odd) card.classList.add("slideRight")
        odd = !odd
        setTimeout(() => {
            card.remove()
            if (document.querySelectorAll(".card").length === 0){
                document.querySelector(".cards").remove()
            }
        }, 900);
    }
});


document.querySelector(".heart").onclick = () => {
    document.querySelector(".heart__letters").style.opacity = 1
    document.querySelector(".heart__text").remove()
    document.querySelector(".heart").onclick = () => { }
    document.querySelectorAll(".heart__letter").forEach(letter => {
        letter.style = `animation-delay: ${Math.random()}s; animation-play-state: running;`
    });
    setTimeout(() => {
        document.querySelector(".heart").classList.add("active")
        height = document.querySelector(".heart__top").offsetHeight
        document.querySelector(".heart__top").style = `border-top-left-radius: ${height}px; border-bottom-left-radius: ${height}px;`
        document.querySelector(".heart__bottom").style = `border-top-right-radius: ${height}px; border-bottom-right-radius: ${height}px;`
        setTimeout(() => {
            document.querySelector(".convert").style.opacity = 1
        }, 1100);
        setTimeout(() => {
            document.querySelector(".heart").classList.add("disabled")
            setTimeout(() => {
                document.querySelector(".convert__triangle").style = "transform: scaleY(-1) translate(-50%, 100%);"
                document.querySelector(".convert").classList.add("active")
                setTimeout(() => {
                    document.querySelector(".heart").remove()
                    document.querySelector(".convert__triangle").style.transform = "scaleY(-1) translate(-50%, 100%)"
                    document.querySelector(".convert__triangle").style.zIndex = 2
                    setTimeout(() => {
                        document.querySelector(".convert__media").classList.add("active")
                        setTimeout(() => {
                            document.querySelector(".convert__media").style = "z-index:999;"
                        }, 300);
                    }, 300);
                }, 100);
            }, 600);
        }, 1000);
    }, 1700);
}