let background1 = document.querySelector(".background-1");
let background2 = document.querySelector(".background-2");
let background3 = document.querySelector(".background-3");
const { body } = document;

let defaultBackground = `linear-gradient(
    180deg,
    #ffffff 0%,
    #f3f8f7 49.91%,
    #fff9f5 94.19%
  )`;

function changeBackground(num) {
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  body.className = "";
  switch (num) {
    case 1:
      return (
        previousBackground !== "background-1" &&
        body.classList.add("background-1")
      );
    case 2:
      return (
        previousBackground !== "background-2" &&
        body.classList.add("background-2")
      );

    case 3:
      return (
        previousBackground !== "background-3" &&
        body.classList.add("background-3")
      );

    default:
      break;
  }
}
