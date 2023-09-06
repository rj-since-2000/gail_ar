const videoComponent = (url) => {
    return `
    <div class="video">
        <iframe frameborder="0" width="100%" height="100%"
            src="${url}">
        </iframe>
        <form class="back">
            <input class="button" type="button" value="Go back" onclick="history.back()">
        </form>
        <form class="home">
            <input class="button" type="button" value="Go home" onclick="history.go(-2)">
        </form>
    </div>
    `
}