const linkComponent = (title, url, img) => {
  return `
    <div>
        <a href="${url}" target="_self" class="links , hover">
        <img src="${img}" width="50px" height="50px"> ${title}</a>
    </div>
  `
}