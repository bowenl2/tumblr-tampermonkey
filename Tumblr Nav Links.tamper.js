// ==UserScript==
// @name       Tumblr Nav Links
// @namespace  https://github.com/bowenl2/tumblr-tampermonkey
// @version    0.1
// @description  Adds helpful navigation buttons to tumblr blogs.
// @match      http://*.tumblr.com/*
// @copyright  2014 Liam Bowen
// ==/UserScript==

usernameMatch = window.location.href.match(/(?:https?:\/\/)(\S+)\.tumblr\.com/);
if (usernameMatch != null && usernameMatch[1] != "www") {
    username = usernameMatch[1];
    elm = document.createElement("a");
    elm.setAttribute("id", "like-link");
    elm.setAttribute("href", "http://www.tumblr.com/liked/by/"+username);
    elm.setAttribute("style", "position:fixed;right: 20px;top: 50px;background-color: white;color:black;border:1px solid black");
    elm.innerHTML="Likes";
    window.document.body.appendChild(elm);

    elm = document.createElement("a");
    elm.setAttribute("id", "archive-link");
    elm.setAttribute("href", "http://"+username+".tumblr.com/archive");
    elm.setAttribute("style", "position:fixed;right: 20px;top: 90px;background-color: white;color:black;border:1px solid black");
    elm.innerHTML="Archive";
    window.document.body.appendChild(elm);
}
