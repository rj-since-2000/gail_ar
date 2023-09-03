const linkComponent = (title, url) => {
  return `
    <div>
        <a href="${url}" target="_self" class="links , hover">
        ${title}</a>
    </div>
  `
}