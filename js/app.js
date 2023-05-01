$(document).ready(function () {
    // let mouseCursor = $(".cursor");
    // let navLinks = $(".nav-links li");
    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".nav-links li");
    console.log(mouseCursor);
    console.log(navLinks);
    window.addEventListener("mousemove", cursorMovement);

    function cursorMovement(e) {
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";
    }
    navLinks.forEach((link) => {
        link.addEventListener("mouseover", ()=> {
            mouseCursor.classList.add("link-grow");
            link.classList.add("hovered-link");
        });
        link.addEventListener("mouseleave", ()=> {
            mouseCursor.classList.remove("link-grow");
            link.classList.remove("hovered-link");
        });

    })
});