//----------------------------------------------Scrollindikator bar
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("minBar").style.width = scrolled + "%";
}



//-------------------------------Videoen starter af sig selv når den vises i browseren
window.addEventListener("scroll", function () { // Kigger om brugeren scroller:-)

    var minVideo = document.getElementById("eriksmindevideo"); // Udpeger video i htmlarket
    var section = document.getElementById("findme");

    if (elAutoplay(section)) { // Hvis sectionen er synlig så:
        if (!(minVideo.curentTime > 0)) {
            minVideo.play();
        }
    } else {
        minVideo.pause();
    }
})

function elAutoplay(el) { // Denne funktion ser om elementet er synligt i browseren
    return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}


//------------------------Lyd starter ved hoover
function PlaySound(mySound) {
    var thissound = document.getElementById(mySound);
    thissound.play();
}

function StopSound(mySound) {
    var thissound = document.getElementById(mySound);
    thissound.pause();
    thissound.currentTime = 0;
}
