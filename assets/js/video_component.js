const videoComponent = (url) => {
    return `
    <div class="video">
        <iframe frameborder="0" width="100%" height="100%"
            src="${url}">
        </iframe>
    </div>
    `
}