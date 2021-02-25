export function mobileMenu() {
  const [toggleBtn] = document.getElementsByClassName("_header__toggle-btn");
  const [bg] = document.getElementsByClassName("_header__bg");
  const [nav] = document.getElementsByClassName("_nav");
  const [body] = document.getElementsByTagName("body");

  const openMenu = (bg, nav, body) => {
    bg.classList.add("active");
    setTimeout(() => {
      bg.classList.add("visible");
      nav.classList.add("active");
      body.classList.add("modal");
    }, 50);
  };

  const closeMenu = (bg, nav, body) => {
    bg.classList.remove("visible");
    nav.classList.remove("active");
    body.classList.remove("modal");
    setTimeout(() => {
      bg.classList.remove("active");
    }, 250);
  };

  toggleBtn.addEventListener("click", (evt) => {
    if (evt.currentTarget.classList.contains("active")) {
      // close menu
      evt.currentTarget.classList.remove("active");
      closeMenu(bg, nav, body);
    } else {
      // open menu
      evt.currentTarget.classList.add("active");
      openMenu(bg, nav, body);
    }
  });

  bg.addEventListener("click", () => {
    // close menu
    toggleBtn.classList.remove("active");
    closeMenu(bg, nav, body);
  });
}
