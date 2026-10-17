/*
const date = new Date();

document.querySelector("#month").textContent = date.toLocaleString("en-US", {
    month: "long"
});
document.querySelector("#day").textContent = date.getDate();
document.querySelector("#year").textContent = date.getFullYear();
*/

const headerItems = document.querySelectorAll("#header-bottom > div");

headerItems[0].classList.add("active");

headerItems.forEach((item) => {
    item.addEventListener("click", () => {
        headerItems.forEach((headerItem) => {
            headerItem.classList.remove("active");
        });
        item.classList.add("active");
    });
});

window.onload = () => {
    document.querySelector("#Resume").style.height = document
    .querySelector("#first-instance").offsetHeight + 'px';
};

headerItems[1].addEventListener("click", () => {
    document.querySelector("#Resume").style.display = "block";
});
