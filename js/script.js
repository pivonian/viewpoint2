window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    
    if (window.scrollY > 200) {   // scroll distance before it becomes solid
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
