function getPilihanComputer() {
  // men generate pilihan komputer
  // mambangkitkan bilangan random
  const computer = Math.random();
  if (computer < 0.34) return "batu";
  if (computer >= 0.34 && computer < 0.67) return "gunting";
  return "kertas";
}

function getHasil(comp, player) {
  // menentukan rules
  if (player == comp) return "SERI!";
  if (player == "batu") return comp == "gunting" ? "MENANG!" : "KALAH";
  if (player == "gunting") return comp == "kertas" ? "MENANG!" : "KALAH";
  if (player == "kertas") return comp == "batu" ? "MENANG!" : "KALAH";
}

function spin() {
  const imgComputer = document.querySelector(".img-computer");
  const image = ["batu", "gunting", "kertas"];
  let i = 0;
  const firstTime = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - firstTime > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + image[i++] + ".png");
    if (i == image.length) {
      i = 0;
    }
  }, 100);
}

const choice = document.querySelectorAll("li img");
choice.forEach(function (get) {
  get.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = get.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    spin();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
