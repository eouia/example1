const navigationTemplate = `
<ul class="menu mainMenu">
<li id="pageIndex" data-url="index.html">
  <a href="index.html">Home</a>
</li>
<li id="pageA" data-url="page_a.html">
  <a href="page_a.html">Page A</a>
  <ul class="menu subMenu">
    <li id="pageA_anchor1" data-url="page_a.html#anchor1">
      <a href="page_a.html#anchor1">Anchor 1</a>
    </li>
    <li id="pageA_anchor2" data-url="page_a.html#anchor2">
      <a href="page_a.html#anchor2">Anchor 2</a>
    </li>
    <li id="pageA_anchor3" data-url="page_a.html#anchor3">
      <a href="page_a.html#anchor3">Anchor 3</a>
    </li>
  </ul>
</li>
<li id="pageB" data-url="page_b.html">
  <a href="page_b.html">Page B</a>
</li>
<li id="pageC" data-url="page_c.html">
  <a href="page_c.html">Page C</a>
</li>
</ul>
`

const initialize = function() {
  const body = document.getElementsByTagName('body')[0]
  const nav = document.createElement('nav')
  nav.innerHTML = navigationTemplate
  setCurrentPage(nav)
  body.prepend(nav)
}

function setCurrentPage(nav) {
   // console.log(window.location)
  const {
    hash, pathname, search
  } = window.location
  //console.log(hash, pathname, search)
  
  const file = pathname.split('/').pop() + ((hash) ? `${hash}` : '')
  //console.log(file)
  
  const oldPages = nav.getElementsByClassName('active')
  //console.log(oldPages)
  for (let o of oldPages) {
    o.classList.remove('active')
  }

  const currentPage = nav.querySelector(`[data-url="${file}"]`)
  currentPage.classList.add('active')
}

window.onhashchange = function() {
  const nav = document.getElementsByTagName('nav')[0]
  setCurrentPage(nav)
}