// fonction slider
function previous(){
    const widthslider = document.querySelector(".slider").offsetWidth;
    document.querySelector(".slider-content").scrollLeft -= widthslider;
}

function next(){
    const widthslider = document.querySelector(".slider").offsetWidth;
    document.querySelector(".slider-content").scrollLeft += widthslider;
}