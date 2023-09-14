const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    console.log("Adding event listener, callback 'e' is:", e)
    if (e.target.tagName === 'A') {
      link.classList.remove('active');
      console.log("removed active class")
    }
  })
})

function toggleNavActive() {
  const activePage = window.location.href;
  navLinks.forEach(link => {
    // if (link.href.includes(`${activePage}`)) {
    //   console.log(`${activePage}`);
    // }
    console.log(link.classList)
  })
}