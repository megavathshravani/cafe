function showMore(infoId) {
    var info = document.getElementById(infoId);
    if (info) {
        if (info.style.display === "none" || info.style.display === "") {
            info.style.display = "block";
        } else {
            info.style.display = "none";
        }
    } else {
        console.error("Element with ID " + infoId + " not found.");
    }
}
