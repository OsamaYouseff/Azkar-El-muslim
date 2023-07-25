window.onload = createLoadingLayer();

///-----------------------------------  /* adding content from api */  --------------------------------------------
let startTime = performance.now();
let morningContent = document.querySelector(".morning-azkar .content");
let eveningContent = document.querySelector(".evening-azkar .content");
let salahContent = document.querySelector(".salah-azkar .content");

function getContent(fileSource, place, lang) {
  fetch(fileSource)
    .then((resolvedVal) => {
      let myData = resolvedVal.json();
      return myData;
    })
    .then((content) => {
      const fragment = document.createDocumentFragment();
      function createCard(content) {
        const card = document.createElement("div");
        card.classList = "card rounded-lg relative select-none";

        const back = createBackCard(content);
        const front = createFrontCard(content);

        card.appendChild(back);
        card.appendChild(front);

        return card;
      }
      function createBackCard(content) {
        const back = document.createElement("div");
        back.classList =
          "side back w-full h-full absolute flex items-center justify-center flex-col rounded-lg text-5xl text-slate-100";

        const resetIcon = document.createElement("span");
        resetIcon.classList = "reset material-symbols-outlined cursor-pointer";
        resetIcon.textContent = "restart_alt";

        const backTxt = document.createElement("p");
        if (lang === "arabic") {
          backTxt.textContent = "إرجاع";
        } else {
          backTxt.textContent = "reset";
        }

        back.appendChild(resetIcon);
        back.appendChild(backTxt);

        return back;
      }
      function createFrontCard(content) {
        const front = document.createElement("div");
        front.classList =
          "side front w-full h-full absolute flex items-center justify-evenly flex-col rounded-lg gap-6";

        const txtContainer = document.createElement("div");
        if (lang === "arabic") {
          txtContainer.classList = "txt text-stone-100 rtl:mr-3";
          txtContainer.setAttribute("dir", "rtl");
        } else {
          txtContainer.classList = "txt text-stone-100 ";
        }

        const frontTxt = document.createElement("span");
        frontTxt.textContent = content["start"];

        const mainContent = document.createElement("p");
        mainContent.textContent = content["content"];

        const counterCircle = document.createElement("div");
        counterCircle.classList =
          "counter-circle relative font-bold flex items-center justify-center rounded-full mb-5 z-10 cursor-pointer w-36 aspect-square";

        const innerCounter = document.createElement("span");
        innerCounter.classList = "counter";
        innerCounter.setAttribute(
          "data-value",
          `${content["iteration_number"]}`
        );
        innerCounter.textContent = `${content["iteration_number"]}`;

        txtContainer.appendChild(frontTxt);
        txtContainer.appendChild(mainContent);
        counterCircle.appendChild(innerCounter);
        front.appendChild(txtContainer);
        front.appendChild(counterCircle);

        return front;
      }
      for (let i = 0; i < content.length; i++) {
        const card = createCard(content[i]);
        fragment.appendChild(card);
      }
      place.appendChild(fragment);
    });
}

if (window.location.pathname.split("/").pop() === "index.html") {
  window.onload = getContent("morning_azkar-ar.json",morningContent,"arabic"
  );
  window.onload = getContent("evening_azkar-ar.json",eveningContent,"arabic"
  );
  window.onload = getContent("salah_azkar-ar.json",salahContent,"arabic"
  );
} else {
  window.onload = getContent("morning_azkar-eng.json",morningContent,"english");
  window.onload = getContent("evening_azkar-eng.json",eveningContent,"english");
  window.onload = getContent("salah_azkar-eng.json", salahContent, "english");
}

let EndTime = performance.now();

let differenceOfTime = EndTime - startTime;

///-----------------------------------  /* adding content from api */  --------------------------------------------

///-----------------------------------  /* dark mode */  --------------------------------------------

let moonIcon = document.querySelector(".moon-icon");
let sunIcon = document.querySelector(".sun-icon");
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-colors-scheme: dark").matches;

const iconToggle = () => {
  sunIcon.classList.toggle("display-none");
  moonIcon.classList.toggle("display-none");
};

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};

function themeSwitch() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    window.localStorage.setItem("theme", "light");
    iconToggle();
    return;
  } else {
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("theme", "dark");
    iconToggle();
  }
}

moonIcon.addEventListener("click", themeSwitch);
sunIcon.addEventListener("click", themeSwitch);

themeCheck();

///-----------------------------------  /* dark mode */  --------------------------------------------

///-----------------------------------  /* content actions on page */  --------------------------------------------

setTimeout(() => {
  let counter = document.querySelectorAll(".counter");
  let circleArea = document.querySelectorAll(".counter-circle");
  let cards = document.querySelectorAll(".card");
  let resetsBtns = document.querySelectorAll(".reset");
  let content = document.querySelectorAll(".content");

  // let counters = [(morCounter = 0), (eveCounter = 0), (salCounter = 0)];
  // console.log(content[0].children.length);

  function animateCard(card) {
    return (card.style.cssText = "animation :rotate 1s ease-out forwards;");
  }
  function ReverseAnimateCard(card) {
    return (card.style.cssText = "animation :rotate2 1s ease-out forwards;");
  }

  for (let i = 0; i < counter.length; i++) {
    circleArea[i].addEventListener("click", (e) => {
      if (counter[i].innerHTML === "1") {
        animateCard(cards[i]);
        counter[i].innerHTML = 0;
      }
      if (counter[i].innerHTML === "0") {
        counter[i].innerHTML = 0;
      } else {
        counter[i].innerHTML -= 1;
      }
    });
  }
  for (let i = 0; i < resetsBtns.length; i++) {
    resetsBtns[i].addEventListener("click", (e) => {
      ReverseAnimateCard(cards[i]);
      counter[i].innerHTML = counter[i].dataset.value;
    });
  }
}, differenceOfTime * 1000);

///-----------------------------------  /* content actions on page */  --------------------------------------------

///-----------------------------------  /* burger icon */  --------------------------------------------

let burgerIcon = document.querySelector(".burger-icon");
let nav = document.querySelector(".nav");
let navLinks = document.querySelectorAll(".nav a");

function showHideNavBar() {
  nav.classList.toggle("clicked");
  burgerIcon.classList.toggle("clicked");
}

burgerIcon.addEventListener("click", showHideNavBar);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", showHideNavBar);
}

///-----------------------------------  /* burger icon */  --------------------------------------------

///-----------------------------------  /* loader*/  --------------------------------------------

function createLoadingLayer() {
  let layerDiv = document.createElement("div");
  let loaderDiv = document.createElement("div");
  layerDiv.classList = "layer";
  loaderDiv.classList = "loader";
  layerDiv.appendChild(loaderDiv);
  document.body.prepend(layerDiv);
}

let loadingLayer = document.querySelector(".layer");
setTimeout(() => {
  loadingLayer.style.cssText = `opacity: 0`;
  loadingLayer.remove();
}, 1.5 * 1000);

///-----------------------------------  /* loader*/  --------------------------------------------

///-----------------------------------  /* change language*/  --------------------------------------------

let changeLangIcon = document.querySelector(".btns > div");
let changeLangIconLink = document.querySelector(".btns a");

changeLangIcon.addEventListener("click", () => {
  changeLangIconLink.click();
});

///-----------------------------------  /* change language*/  --------------------------------------------
