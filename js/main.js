const navigationTemplate = `
<ul>
<li id="pageIndex" data-url="index.html"><a href="index.html">Home</a></li>
<li id="pageA" data-url="page_a.html"><a href="page_a.html">Page A</a></li>
<li id="pageB" data-url="page_b.html"><a href="page_b.html">Page B</a></li>
<li id="pageC" data-url="page_c.html"><a href="page_c.html">Page C</a></li>
</ul>
`

const initialize = function() {
  // console.log(window.location)
  const {
    hash, pathname, search
  } = window.location
  // console.log(hash, pathname, search)
  
  const file = pathname.split('/').pop()
  // console.log(file)
  
  const body = document.getElementsByTagName('body')[0]
  const nav = document.createElement('nav')
  nav.innerHTML = navigationTemplate
  const currentPage = nav.querySelector(`[data-url='${file}']`)
  
  if (currentPage) currentPage.classList.add('active')

  body.prepend(nav)
}

