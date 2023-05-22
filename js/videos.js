var linki = {
    "1": "https://www.youtube.com/embed/zWQI0fJ3xPQ",
    "2": "https://www.youtube.com/embed/ZBPct2cNq5I",
    "3": "https://www.youtube.com/embed/_xfzE7KrSZ4",
    "4": "https://www.youtube.com/embed/8r_24WkJpw8",
    "5": "https://www.youtube.com/embed/0LfvLoEB8Xk",
};
var dlinki = {
    "1": "http://lyksoomu.com/16Vwt",
    "2": "http://lyksoomu.com/16lME",
    "3": "#",
    "4": "#",
    "5": "#",
}
var title = {
    "1": "Nauka HTML & CSS | #1",
    "2": "Zadania HTML & CSS | #1",
    "3": "Windows Server | #1",
    "4": "Windows Server | #2",
    "5": "Windows Server | #3",
}
    window.onload = function() {
    var container = document.getElementById("videos");
    for (var key in linki) {
        if (linki.hasOwnProperty(key)) {
            container.innerHTML+=
                            '<div class="video">' +
                            '<h3>' + title[key] + '</h3>' +
                            '<iframe  src="' + linki[key] + '" title="Nauka HTML &amp; CSS #1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' +
                            '<div class="clear"></div>' +
                            '<a href="' + dlinki[key] + '">Pobierz Projekt</a>' +
                            '</div>'
        }
    }
};
