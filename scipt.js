
const mainimage = document.querySelector(".product-main-image")
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const minus = document.getElementById("minus-btn");
const plus = document.getElementById("plus-btn");
const count = document.getElementById("count")
const bucket = document.querySelector(".bucket")

img1.addEventListener("click", () => {

    mainimage.src = "images/image-product-1.jpg"
})

img2.addEventListener("click", () => {

    mainimage.src = "images/image-product-2.jpg"
})

img3.addEventListener("click", () => {

    mainimage.src = "images/image-product-3.jpg"
})

img4.addEventListener("click", () => {

    mainimage.src = "images/image-product-4.jpg"
})

plus.addEventListener("click", () => {
    let value = +(count.innerHTML);
    value = value + 1;
    count.innerHTML = value;
})
minus.addEventListener("click", () => {
    let value = +(count.innerHTML);
    value = value - 1;
    count.innerHTML = value;
    if (count.innerHTML < 0) {
        count.innerHTML = 0
    }
})
bucket.addEventListener("click", () => {
    document.getElementById("popupDiv").style.display = "block";
})

document.addEventListener("click", (event) => {
    if (event.target.id !== "myButton" && event.target.id !== "popupDiv") {
        document.getElementById("popupDiv").style.display = "none";
    }
});