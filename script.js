const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", function () {
    navbar.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

/* sproduct page */
var ShowImg = document.getElementById("MainImg");
var img1 = document.getElementById("SmallImg1");
var img2 = document.getElementById("SmallImg2");
var img3 = document.getElementById("SmallImg3");
var img4 = document.getElementById("SmallImg4");

img1.addEventListener("click", function () {
    var img1=this.getAttribute("src");
    ShowImg.setAttribute("src", img1)
});
img2.addEventListener("click", function () {
    var img2=this.getAttribute("src");
    ShowImg.setAttribute("src", img2)
});
img3.addEventListener("click", function () {
    var img3=this.getAttribute("src");
    ShowImg.setAttribute("src", img3)
});
img4.addEventListener("click", function () {
    var img4=this.getAttribute("src");
    ShowImg.setAttribute("src", img4)
});