function Randomize() {
    var images = new Array("front-device-cutted","inside-device-cutted");
    var imageNum = Math.floor(Math.random() * images.length);
   
    document.getElementById("random").src = "assets/images/"+images[imageNum]+".png";

}

window.onload = Randomize;
