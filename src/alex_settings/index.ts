const header = document.getElementById("header");

setInterval(
  () => {
    header.innerText = "" + Math.random();
  },
  1000
)