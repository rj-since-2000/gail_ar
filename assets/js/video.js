var webUrl = document.URL;
var texts = webUrl.split("=");
var url = texts[1];

video_container = document.getElementById("video-container")

switch(url) {
    case "1":
        video_container.innerHTML = videoComponent("https://www.youtube.com/embed/OxWqSe4MPXA?autoplay=1&mute=1&playlist=OxWqSe4MPXA&loop=1")
        break;
    case "2":
        video_container.innerHTML = videoComponent("https://www.youtube.com/embed/T8COD3adhys?autoplay=1&mute=1&playlist=T8COD3adhys&loop=1")
        break;
    case "3":
        video_container.innerHTML = videoComponent("https://www.youtube.com/embed/yIY4V7DlD2g?autoplay=1&mute=1&playlist=yIY4V7DlD2g&loop=1")
        break;
    case "4":
        video_container.innerHTML = videoComponent("https://www.youtube.com/embed/k5DInlUaZ90?autoplay=1&mute=1&playlist=k5DInlUaZ90&loop=1")
        break;
    case "5":
        video_container.innerHTML = videoComponent("https://www.youtube.com/embed/BPtvW9_tzL0?autoplay=1&mute=1&playlist=BPtvW9_tzL0&loop=1")
        break;
    case "6":
        video_container.innerHTML = videoComponent("https://www.youtube.com/embed/qok1Vbegehw?autoplay=1&mute=1&playlist=qok1Vbegehw&loop=1")
        break;
    default:
        video_container.innerHTML = videoComponent(url)
}