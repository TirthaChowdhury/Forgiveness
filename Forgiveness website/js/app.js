const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "./resources/a.gif",
  "./resources/rusure.gif",
  "./resources/a.gif",
  "./resources/b.gif",
  "./resources/c.gif",
  "./resources/idc.gif"
];

// Preload GIFs to ensure they load properly
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// Handle NO button clicks
no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "./resources/rusure.gif";
    text.innerHTML = "You meant to press YES right?🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "./resources/a.gif";
    text.innerHTML = "Your hand must have slipped right?😐";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "./resources/b.gif";
    text.innerHTML = "I'm gonna cry😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "./resources/c.gif";
    text.innerHTML = "Pretty Please🥺😘";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// Handle YES button clicks
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "./resources/idc.gif";
  text.innerHTML = "Knew it babe, Love u 😘";
  yes.innerHTML = '<a href="https://www.instagram.com/tirtho_chowdhury?igsh=MWs3ajJ6ajcxMmV1Yw==" target="_blank">Message me</a>';
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";

  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
