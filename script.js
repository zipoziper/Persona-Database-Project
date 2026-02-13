document.addEventListener("DOMContentLoaded", function () {

    const overlay = document.getElementById("overlay");
    const imgFull = document.getElementById("imgFull");
    const img = document.getElementById("imgfromimgbase");
    const aboutmsg = document.getElementById("aboutmsg");
    const updatelog = document.getElementById("updatelog");

window.imgshow = function (element) {
    hideAll();
    imgFull.style.display = "block";
    imgFull.src = element.src;
    overlay.style.display = "flex";
}
window.galeryShow = function () {
    hideSections();
    document.getElementById("gallerySection").style.display = "block";
}

function homeClick() {
    const header = document.getElementById("headerper");
    const msg = document.getElementById("homemsg");

    document.getElementById("gallerySection").style.display = "none";
    document.getElementById("gamesredirect").style.display = "block";

    header.classList.add("shake");
    msg.classList.add("show");

    setTimeout(() => {
        header.classList.remove("shake");
        msg.classList.remove("show");
    }, 800);
}

    window.aboutshow = function () {
        hideAll();
        aboutmsg.style.display = "block";
        overlay.style.display = "flex";
    }

    window.updateshow = function () {
        hideAll();
        updatelog.style.display = "block";
        overlay.style.display = "flex";
    }

    window.closeAll = function () {
        overlay.style.display = "none";
        hideAll();
    }

    function hideAll() {
        imgFull.style.display = "none";
        aboutmsg.style.display = "none";
        updatelog.style.display = "none";
    }

});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        if (href && !href.startsWith("#")) {
            e.preventDefault();
            document.body.classList.remove("loaded");

            setTimeout(() => {
                window.location.href = href;
            }, 400); 
        }
    });
});
function homeClick() {
    const header = document.getElementById("headerper");
    const msg = document.getElementById("homemsg");

    hideSections();
    document.getElementById("gamesredirect").style.display = "block";

    header.classList.add("shake");
    msg.classList.add("show");

    setTimeout(() => {
        header.classList.remove("shake");
        msg.classList.remove("show");
    }, 800);
}

function hideSections() {
    document.getElementById("gallerySection").style.display = "none";
    document.getElementById("gamesredirect").style.display = "none";
}
