let homePage = document.getElementById("homePage");
let singlePage = document.getElementById("singlePage");
let multiPage = document.getElementById("multiPage");
let btnSingle = document.getElementById("btnSingle");
let btnMulti = document.getElementById("btnMulti");
let btnBack1 = document.getElementById("btnBack1");
let btnBack2 = document.getElementById("btnBack2");

singlePage.style.display = "none";
multiPage.style.display = "none";

btnSingle.addEventListener("click", () => {
  setTimeout(() => {
    homePage.style.display = "none";
    singlePage.style.display = "block";
    let game = new Phaser.Game(config1);
    btnBack1.addEventListener("click", () => {
      game.destroy(true);
      homePage.style.display = "block";
      singlePage.style.display = "none";
    });
  }, 1000);
});

btnMulti.addEventListener("click", () => {
  setTimeout(() => {
    homePage.style.display = "none";
    multiPage.style.display = "block";
    let game = new Phaser.Game(config2);
    btnBack2.addEventListener("click", () => {
      game.destroy(true);
      homePage.style.display = "block";
      multiPage.style.display = "none";
    });
  }, 1000);
});
