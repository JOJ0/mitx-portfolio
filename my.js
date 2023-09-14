function toggleNavActive() {
  //const activePage = window.location.href;
  //const navLinks = document.querySelectorAll('nav a');
  // Get container and and all with class="nav-item" inside the container
  var navContainer = document.getElementById("navbarNav");
  var navLinks = navContainer.getElementsByClassName("nav-item");
  // console.log("navLinks:", navLinks.length);

  // Loop through links and add class "active" to current/clicked anchor tag
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        // Remove " active" from className string
        current[0].className = current[0].className.replace(" active","");
      }
      //this.className += " active";
      //this.classList.add("active");
    });
  }
}
