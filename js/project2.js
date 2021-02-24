window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display");
    }, 4000);
};
document.onreadystatechange = () => {
    setTimeout(() => {
        document.querySelector("body").style.overflow = "auto";
    }, 4000);
};
// start slidebar
let container = document.querySelector(".container"),
    menu = document.querySelector(".humborger-menue"),
    span = document.createElement("span");
span.innerHTML = "close";

menu.addEventListener("click", () => {
    container.classList.toggle("change");
    document.querySelector(" .humborger-menue").appendChild(span);
});
// end slidebar

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});