function toggleNavActive() {
  const navbar = document.getElementById('navbarNav');
  const anchors = navbar.getElementsByTagName('a');
  Array.from(anchors).forEach((elem) => {
    if (elem.href === window.location.href) {
      elem.classList.add('active');
      console.log("added, elem is:", elem.classList);
      console.log("location is:", window.location.href);
    } else {
      elem.classList.remove('active');
      console.log("removed, elem", elem.classList);
    }
  })
}