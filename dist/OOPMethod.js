/// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  /* using OOP  * /  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// class AzkarManager {
//   constructor(fileSource, place) {
//     this.fileSource = fileSource;
//     this.place = place;
//   }

//   getContent() {
//     fetch(this.fileSource)
//       .then((resolvedVal) => resolvedVal.json())
//       .then((content) => {
//         const fragment = document.createDocumentFragment();
//         for (let i = 0; i < content.length; i++) {
//           const card = this.createCard(content[i]);
//           fragment.appendChild(card);
//         }
//         this.place.appendChild(fragment);
//       });
//   }

//   createCard(content) {
//     const card = document.createElement("div");
//     card.classList = "card rounded-lg relative select-none";

//     const back = this.createBackCard(content);
//     const front = this.createFrontCard(content);

//     card.appendChild(back);
//     card.appendChild(front);

//     return card;
//   }

//   createBackCard(content) {
//     const back = document.createElement("div");
//     back.classList =
//       "side back w-full h-full absolute flex items-center justify-center flex-col rounded-lg text-5xl text-slate-100";

//     const resetIcon = document.createElement("span");
//     resetIcon.classList = "reset material-symbols-outlined cursor-pointer";
//     resetIcon.textContent = "restart_alt";

//     const backTxt = document.createElement("p");
//     backTxt.textContent = "إرجاع";

//     back.appendChild(resetIcon);
//     back.appendChild(backTxt);

//     return back;
//   }

//   createFrontCard(content) {
//     const front = document.createElement("div");
//     front.classList =
//       "side front w-full h-full absolute flex items-center justify-evenly flex-col rounded-lg gap-6";

//     const txtContainer = document.createElement("div");
//     txtContainer.classList = "txt text-stone-100 rtl:mr-3";
//     txtContainer.setAttribute("dir", "rtl");

//     const frontTxt = document.createElement("span");
//     frontTxt.textContent = content["start"];

//     const mainContent = document.createElement("p");
//     mainContent.textContent = content["content"];

//     const counterCircle = document.createElement("div");
//     counterCircle.classList =
//       "counter-circle relative font-bold flex items-center justify-center rounded-full mb-5 z-10 cursor-pointer w-36 aspect-square";

//     const innerCounter = document.createElement("span");
//     innerCounter.classList = "counter";
//     innerCounter.setAttribute("data-value", `${content["iteration_number"]}`);
//     innerCounter.textContent = `${content["iteration_number"]}`;

//     txtContainer.appendChild(frontTxt);
//     txtContainer.appendChild(mainContent);
//     counterCircle.appendChild(innerCounter);
//     front.appendChild(txtContainer);
//     front.appendChild(counterCircle);

//     return front;
//   }
// }

// const morningContent = document.querySelector(".morning-azkar .content");
// const eveningContent = document.querySelector(".evening-azkar .content");
// const salahContent = document.querySelector(".salah-azkar .content");

//   const morningAzkarManager = new AzkarManager(
//     "morning_azkar.json",
//     morningContent
//   );
//   morningAzkarManager.getContent();

//   const eveningAzkarManager = new AzkarManager(
//     "evening_azkar.json",
//     eveningContent
//   );
//   eveningAzkarManager.getContent();

//   const salahAzkarManager = new AzkarManager("salah_azkar.json", salahContent);
//   salahAzkarManager.getContent();

/// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  /* using OOP  * /  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
