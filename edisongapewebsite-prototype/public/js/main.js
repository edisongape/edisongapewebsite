
document.getElementById("open-side-navbar").addEventListener("click", () => {
    console.log("open-side-navbar");
    document.getElementById("side-mobile-navbar").classList.remove("side-mobile-navbar-transition");
    document.getElementById("side-mobile-navbar").style.transform = "translateX(0)";
    document.getElementById("background-mobile-side-navbar").style.display = "block";
});

document.getElementById("background-mobile-side-navbar").addEventListener("click", () => {
    document.getElementById("side-mobile-navbar").style.transform = "translateX(-105%)";
    document.getElementById("background-mobile-side-navbar").style.display = "none";
});

document.getElementById("side-navbar-close-button").addEventListener("click", () => {
    document.getElementById("side-mobile-navbar").style.transform = "translateX(-105%)";
    document.getElementById("background-mobile-side-navbar").style.display = "none";
});


for (let i = 0; i < document.getElementById("side-mobile-navbar").querySelectorAll("a").length; i++) {
    let links = document.getElementById("side-mobile-navbar").querySelectorAll("a")[i];
    links.addEventListener("click", () => {
        document.getElementById("side-mobile-navbar").style.transform = "translateX(-105%)";
        document.getElementById("background-mobile-side-navbar").style.display = "none";
    }
    );
}