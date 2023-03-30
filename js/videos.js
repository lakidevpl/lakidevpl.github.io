var linki = {
    "1": "https://doc-0k-84-docs.googleusercontent.com/docs/securesc/ih14r8ovllkqh9j4muvj3dlnhuhb1gaa/umml2aruhakl30mtecbvqgj2hsoaf36l/1680200775000/12944824676142897449/12944824676142897449/1jBgIk5RPY8OMc91RkZVVruQ06T9o5fUy?e=download&ax=ALy03A6Gx3y0SYAvsNMobx6M6qNxiJBVTIh-At8TZiJxafpfQaFiRWN4g2g9NvLQyLXVH7_kUwqmrLovc3cuFGWnCuSanVxwiPJjGXaDtBiohY2UuXKMe3fcoKplvc9MZzWCO-oskAvJusI9vAudr0O-5B_PqPWTVc45kaSOjfKACnbEJVH4nIRoWSgYyw2EAQkE7XtCVp-iiVvvgNmwxZBtTn9NMWiWh25Rgirm_gMcqGGCjXxY6lDVplsd_ymXZ-py5wvEllC46k6GK6tz8tUNF5n7GKsqNdDxssqd9Kk6evgbzUyWjLtSpRKlFW4Q7kiGHjb9OYq-F3sNDcLMTf4eW53TtxWiv9HYfxua3-79E-SW0xglb9wpLmiE12tCsZW7hG3tKNyQWH54QfVqzvWt0HfAdqbbpKiB1lYoUyK7zJLOrKfSboGvzCXJoXI-DCE2V_VPAiJMOLOJyqK1WtiFobdxguATEJgDXr171eeeIWHXo9wyxC01gclVbWzeJHEw5wCt7RAxY0ahzIE9Unq3zN9EqYLbWfaTAODHh92faXJXJoqVOfWDFIUX8qRjBzpxUQxDDILKv9X3Y56Fm_QJhwc3jl-MN7w0WWbk002Z999U5LFWQhQ5gBQvdHRTvnkjVheGdO5KeDWQi_ae9rY84-stJAgOqGvqaGPRkDjWx4HleNclAsfgGfyRcpw0G-4BPIcspoLh6Bo3GHC5-EMF49i0qldyHzZYEQCed03-oH79rVH1X_k7Wn3Uc-odQMrlveauWcxCheV_P43YpkdJ4Ui9_4-FlDI38HCj2-D_XIdC9q0cSsuyBpYGr86ie0t9RVaBuQMFxVE75NKkQEWuzlXLGGp0zrMBIU59_Y6UmPdSAHFdIo_ElneTLn_k-C5gKw&uuid=f2462b01-7b07-4087-882d-c5b0bc2c7ed4&authuser=0&nonce=j496k6tmkg0ia&user=12944824676142897449&hash=hh94fa39rs4kmnrqn57334dd1jgajn5f",
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
