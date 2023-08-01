let homePage = document.getElementById("homePage");
let singlePage = document.getElementById("singlePage");
let multiPage = document.getElementById("multiPage");
// let onlinePage = document.getElementById("onlinePage");

let btnSingle = document.getElementById("btnSingle");
let btnMulti = document.getElementById("btnMulti");
let btnBack1 = document.getElementById("btnBack1");
let btnBack2 = document.getElementById("btnBack2");
let modal = document.getElementById("onlineModal");
let modalContent = document.getElementById("modalContent");
const btnCreate = document.getElementById("btnCreate");
const btnJoin = document.getElementById("btnJoin");
let btn = document.getElementById("btnOnline");
let span = document.getElementsByClassName("close")[0];
const txtGameId = document.getElementById("txtGameId");

btn.onclick = function () {
  window.open("another.html", "_blank");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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
  }, 600);
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
  }, 600);
});

btnCreate.onclick = () => {
  let d = document.createElement("div");
  d.innerHTML = `<h3>Sorry...😢</h3> 
    <h3>Online game mode has been scrapped</h3>
   `;

  modalContent.parentNode.replaceChild(d, modalContent);
  //}
};
btnJoin.onclick = () => {
  let d = document.createElement("div");
  d.innerHTML = `<h3>Sorry...😢</h3> 
    <h3>Online game mode has been scrapped</h3>
   `;

  modalContent.parentNode.replaceChild(d, modalContent);
  // let invite = txtGameId.value;
  // const payLoad = {
  //   method: "join",
  //   clientId: clientId,
  //   join: invite,
  // };
  // ws.send(JSON.stringify(payLoad));
};
