const menunew = document.querySelector(".menunew");
const menunewMain = menunew.querySelector(".menunew-main");
const goBack = menunew.querySelector(".go-back");
const menunewTrigger = document.querySelector(".mobile-menunew-trigger");
const closemenunew = menunew.querySelector(".mobile-menunew-close");
let submenunew;
menunewMain.addEventListener("click", (e) => {
  if (!menunew.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menunew-item-has-children")) {
    const hasChildren = e.target.closest(".menunew-item-has-children");
    showSubmenunew(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubmenunew();
});
menunewTrigger.addEventListener("click", () => {
  togglemenunew();
});
closemenunew.addEventListener("click", () => {
  togglemenunew();
});
document.querySelector(".menunew-overlay").addEventListener("click", () => {
  togglemenunew();
});
function togglemenunew() {
  menunew.classList.toggle("active");
  document.querySelector(".menunew-overlay").classList.toggle("active");
}
function showSubmenunew(hasChildren) {
  submenunew = hasChildren.querySelector(".sub-menunew");
  submenunew.classList.add("active");
  submenunew.style.animation = "slideLeft 0.5s ease forwards";
  const menunewTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menunew.querySelector(".current-menunew-title").innerHTML = menunewTitle;
  menunew.querySelector(".mobile-menunew-head").classList.add("active");
}

function hideSubmenunew() {
  submenunew.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    submenunew.classList.remove("active");
  }, 300);
  menunew.querySelector(".current-menunew-title").innerHTML = "";
  menunew.querySelector(".mobile-menunew-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menunew.classList.contains("active")) {
      togglemenunew();
    }
  }
};
