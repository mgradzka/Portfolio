const tabs = document.querySelectorAll(".tab");
const tabContainer = document.querySelector(".tab-container");
const tabContent = document.querySelectorAll(".desc");
const btn = document.querySelector(".btn--next");
const specialbtn = document.querySelectorAll("#btn--special");
const target = document.querySelector("#here");
const btnUp = document.querySelector(".circle-scroll");
const tools = document.querySelector(".tools");
let menuElem = document.querySelector("#mobile");
let mobileNav = document.querySelector(".mobile-nav");

function burgerMenu() {
  const strActive = "opened";
  menuElem.addEventListener("click", function (event) {
    event.preventDefault();
    const currentScroll = window.pageYOffset;
    const icon = menuElem.getElementsByTagName("i")[0];
    if (mobileNav.className.indexOf("opened") === -1) {
      mobileNav.style.marginTop = `${currentScroll}px`;
      mobileNav.classList.add(strActive);
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
      mobileNav.classList.remove("hidden");
    } else {
      mobileNav.classList.remove(strActive);
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
      mobileNav.classList.add("hidden");
    }
  });
}
burgerMenu();

function showTabs() {
  if (tabContainer)
    tabContainer.addEventListener("click", function (e, f) {
      const clicked = e.target.closest(".tab");
      // console.log(clicked);

      tabs.forEach((tab) => tab.classList.remove("tab-active"));
      tabContent.forEach((tab) => tab.classList.remove("desc--active"));
      if (!clicked) return;
      clicked.classList.add("tab-active");

      document
        .querySelector(`.desc--${clicked.dataset.tab}`)
        .classList.add("desc--active");
    });
}
showTabs();

window.onscroll = function () {
  scrollUp();
};

function scrollUp() {
  if (btnUp) {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      btnUp.style.display = "block";
    } else {
      btnUp.style.display = "none";
    }
  }
}

function topFunction() {
  target.scrollIntoView(true);
}

function activePage() {
  const currentPage = window.location.pathname;
  console.log(currentPage);
  const allLinks = document.querySelectorAll(".nav-a");
  const home = document.querySelector(".home");

  allLinks.forEach((a) => {
    a.classList.remove("active");
    if (currentPage === "/") {
      home.classList.add("active");
    } else if (a.href.includes(`${currentPage}`)) {
      a.classList.add("active");
      //   }
    }
  });
}
activePage();
