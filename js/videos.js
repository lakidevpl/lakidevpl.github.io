var linki = {
    "1": "blob:https://youfiles.herokuapp.com/6cb8c5d4-e609-4a70-8c74-dd445ae83f3a",
    };
var tytuly = {
    "1": "Nauka HTML&CSS <span>#nauka_programowania</span>",
    }
var title = {
    "1": "Materialy odc 1 | Nauka HTML&CSS",
    }
var linki_yt = {
    "1": "https://www.youtube.com/watch?v=zWQI0fJ3xPQ",
    }
var linki_dl = {
    "1": "http://lyksoomu.com/16Vwt",
    }
    window.onload = function() {
    var container = document.getElementById("videos");
    for (var key in linki) {
        if (linki.hasOwnProperty(key)) {
        container.innerHTML+='<div class="video"><video controls><source src="' + linki[key] + '" type="video/mp4"><source src="' + linki[key] + '" type="video/ogg">Twoja przegladarka nie wspiera HTML video</video><h1>' + tytuly[key] + '</h1><a title="Odtwórz wideo" href="' + linki_yt[key] + '"><span class="material-symbols-outlined">play_circle</span></a><a title="Pobierz ' + title[key] + '" href="' + linki_dl[key] + '" download><span class="material-symbols-outlined">download_for_offline</span></a></div>';
        }
    }
};