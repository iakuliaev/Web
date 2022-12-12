let slideIndex = [1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"]
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);

function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "flex";
}