const text = document.querySelector(".text");
const increase = document.querySelector(".increase");
const circle = document.querySelector(".circle");
let textIncrease = 0;
let max = 280;
text.addEventListener("keyup", (event) => {
  let progress = Math.floor((text.value.length / max) * 100);
  if (textIncrease === max) {
    text.value = text.value.slice(0, max);
    return;
  } else if (event.key === "Backspace") {
    textIncrease--;
    circle.style.background = `conic-gradient(#5900ff ${progress}%, #eee ${progress}%)`;
    if (textIncrease <= 0) {
      return;
    }
    increase.innerHTML = `${progress}%`;
  } else {
    textIncrease++;
    circle.style.background = `conic-gradient(#5900ff  ${progress}%, #eee ${progress}%)`;
    increase.innerHTML = `${progress}%`;
  }
  if (progress === 100) {
    increase.innerHTML = "✓";
    circle.classList.add("finish");
    increase.classList.add("is-done");
    circle.style.background = `conic-gradient(#5900ff  ${progress}%, #5900ff ${progress}%)`;
  } else {
    circle.classList.remove("finish");
    increase.classList.remove("is-done");
    increase.innerHTML = `${progress}%`;
    circle.style.background = `conic-gradient(#5900ff  ${progress}%, #5900ff ${progress}%)`;
  }
});
