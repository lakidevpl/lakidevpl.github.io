// Variables
copyright = "©️ 2023 mlecznyy.github.io"
mail = "mlecznyprogramista@gmail.com"
link_configuration = "configurations"
link_plugins = "plugins"
link_videos = "videos"
link_contact = "contact"
link_home = "home"

link_youtube = "https://youtube.com/@mlecznyprogramista"
link_twitch = "https://twitch.tv/mlecznyprogramista"
link_discord = "https://dsc.gg/mlecznyprogramista"

// Code
document.getElementById("js-header").innerHTML = '<div class="heading"><div class="logo"><img src="images/avatar.png" alt="Mleczny Programista Logo"><h1>Mleczny Programista</h1></div><div class="media"><a href="' + link_discord + '"><img src="images/discord.png" alt="Discord"></a><a href="' + link_youtube + '"><img src="images/youtube.png" alt="YouTube"></a><a href="' + link_twitch + '"><img src="images/twitch.png" alt="Twitch"></a></div><div class="clear"></div><div class="navigation"><a href="'+ link_home +'">Strona Glowna</a><a href="'+ link_videos +'">Filmy</a><a href="'+ link_plugins +'">Pluginy</a><a href="'+ link_configuration +'">Konfiguracje</a><a href="'+ link_contact +'">Kontakt</a></div><div class="navigation-mobile"><button id="menu-button"><span class="material-symbols-outlined">menu</span></button><ul id="menu"><a href="'+ link_home +'">Strona Glowna</a><a href="'+ link_plugins +'">Pluginy</a><a href="'+ link_configuration +'">Konfiguracje</a><a href="'+ link_contact +'">Kontakt</a></ul></div></div>'
document.getElementById("js-footer").innerHTML = '<div class="footer"><div class="logo_footer"><img src="images/avatar.png" alt="Mleczny Programista Logo"><h1>Mleczny Programista</h1><div class="clear"></div></div><div class="menu_footer"><h1><span class="material-symbols-outlined">find_in_page</span> Przydatne:</h1><a href="mailto:' + mail + '">Napisz maila!</a><a href="' + link_videos +'">Obejrz filmy!</a><a href="' + link_plugins +'">Pobierz pluginy!</a><a href="' + link_configuration +'">Kup konfiguracje serwera!</a></div><div class="menu_footer"><h1><span class="material-symbols-outlined">lightbulb</span> Informacje:</h1><p>Strona zostala napisana przez Mlecznego Programiste przy uzyciu jezykow programowania takich jak: HTML, CSS, JavaScript</p></div><div class="menu_footer"><h1><span class="material-symbols-outlined">alternate_email</span> Media:</h1><a href="' + link_discord +'">Discord</a><a href="' + link_youtube +'">YouTube</a><a href="' + link_twitch + '">Twitch</a></div><div class="clear"></div><h3>' + copyright + '</h3></div>'