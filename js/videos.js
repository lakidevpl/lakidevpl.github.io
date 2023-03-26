var linki = {
    "1": "https://file-examples.com/storage/feb401d325641db2fa1dfe7/2017/04/file_example_MP4_1280_10MG.mp4",
    };
var tytuly = {
    "1": "Tak będzie wyglądał 1 film! <span>#test</span>",
    }
var title = {
    "1": "Tak będzie wyglądał 1 film!",
    }
var linki_yt = {
    "1": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    }
    window.onload = function() {
    var container = document.getElementById("videos");
    for (var key in linki) {
        if (linki.hasOwnProperty(key)) {
        container.innerHTML+='<div class="video"><video controls><source src="' + linki[key] + '" type="video/mp4"><source src="' + linki[key] + '" type="video/ogg">Twoja przegladarka nie wspiera HTML video</video><h1>' + tytuly[key] + '</h1><a title="Odtwórz wideo" href="' + linki_yt[key] + '"><span class="material-symbols-outlined">play_circle</span></a><a title="Pobierz ' + title[key] + '" href="' + linki[key] + '" download><span class="material-symbols-outlined">download_for_offline</span></a></div>';
        }
    }
};
