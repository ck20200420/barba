$("a").click((e) => {
  e.preventDefault()
  if (e.target.origin !== window.location.origin) {
    window.open(e.target.href)
  }
})

$("img.lazy").lazyload({effect: "slideDown"})