const infoHeader = document.querySelector(".info-header");
const infoHeaderTab = document.querySelectorAll(".info-header-tab");
const infoTabcontent = document.querySelectorAll(".info-tabcontent");

function hideTabContent() {
  infoTabcontent.forEach((elem) => {
    elem.classList.remove("show");
    elem.classList.add("hide");
  });
}

function showTabContent(b) {
  if (infoTabcontent[b].classList.contains("hide")) {
    infoTabcontent[b].classList.remove("hide");
    infoTabcontent[b].classList.add("show");
  }
}

infoHeader.addEventListener("click", function (event) {
  let target = event.target;
  if (target && target.classList.contains("info-header-tab")) {
    infoHeaderTab.forEach((elem, i) => {
      if (target == elem[i]) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
