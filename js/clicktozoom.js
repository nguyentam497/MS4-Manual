var zoomImg = function() {
    var clone = this.cloneNode();
    clone.classList.remove("ClickToZoom");
    var imgzoom = document.getElementById("zoomin");
    imgzoom.innerHTML = "";
    imgzoom.appendChild(clone);
    imgzoom = document.getElementById("zoomout");
    imgzoom.classList.add("show");
    var caption = clone.alt;
    document.getElementById("caption").innerHTML = caption;
};
window.addEventListener("load", function() {
    var images = document.getElementsByClassName("ClickToZoom");
    if (images.length > 0) {
        for (var img of images) {
            img.addEventListener("click", zoomImg);
        }
    }
    document.getElementById("zoomout").addEventListener("click", function() {
        this.classList.remove("show");
    })
});