window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

function toggleObjectiveDetails(index) {
  const details = document.getElementById(`objective-details-${index}`);
  const allDetails = document.querySelectorAll(".objective-details");

  // Fecha todos os outros detalhes
  allDetails.forEach((detail, i) => {
    if (i !== index) {
      detail.classList.remove("active");
      setTimeout(() => {
        detail.style.maxHeight = "0";
      }, 50);
    }
  });

  // Alterna o estado do detalhe clicado
  if (details.classList.contains("active")) {
    details.classList.remove("active");
    setTimeout(() => {
      details.style.maxHeight = "0";
    }, 50);
  } else {
    details.classList.add("active");
    details.style.maxHeight = details.scrollHeight + "px";
  }
}

// Adiciona evento de redimensionamento para ajustar a altura máxima
window.addEventListener("resize", () => {
  const activeDetails = document.querySelector(".objective-details.active");
  if (activeDetails) {
    activeDetails.style.maxHeight = activeDetails.scrollHeight + "px";
  }
});
