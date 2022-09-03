let homePage = document.getElementById("homePage");
let singlePage = document.getElementById("singlePage");
let multiPage = document.getElementById("multiPage");
// let onlinePage = document.getElementById("onlinePage");

let btnSingle = document.getElementById("btnSingle");
let btnMulti = document.getElementById("btnMulti");
let btnBack1 = document.getElementById("btnBack1");
let btnBack2 = document.getElementById("btnBack2");
let modal = document.getElementById("myModal");
let modalContent = document.getElementById("modalContent");
const btnCreate = document.getElementById("btnCreate");
const btnJoin = document.getElementById("btnJoin");
let btn = document.getElementById("btnOnline");
let span = document.getElementsByClassName("close")[0];
const txtGameId = document.getElementById("txtGameId");

// ws = new WebSocket("wss://ping-pong-websockets.herokuapp.com/");
// let clientId = null;
// let gameId = null;

// ws.onmessage = (message) => {
//   //message.data
//   const response = JSON.parse(message.data);
//   //connect
//   if (response.method === "connect") {
//     clientId = response.clientId;
//     gameId = response.gameId;
//     console.log(response.lobby);
//   }
//   if (response.method === "created") {
//     console.log(response);
//   }
//   if (response.method === "matchRequest") {
//     if ((response.message = "successfully joined")) {
//       modal.style.display = "none";
//       homePage.style.display = "none";
//       multiPage.style.display = "none";
//       singlePage.style.display = "none";
//       onlinePage.style.display = "block";
//     }
//   }

//   //create
//   // if (response.method === "create"){
//   //     gameId = response.game.id;
//   //     console.log("game successfully created with id " + response.game.id + " with " + response.game.balls + " balls")
//   // }
//   //update
//   // if (response.method === "update"){
//   //     //{1: "red", 1}
//   //     if (!response.game.state) return;
//   //     for(const b of Object.keys(response.game.state))
//   //     {
//   //         const color = response.game.state[b];
//   //         const ballObject = document.getElementById("ball" + b);
//   //         ballObject.style.backgroundColor = color
//   //     }

//   // }
//   //join
//   // if (response.method === "join"){
//   //     const game = response.game;

//   //     while(divPlayers.firstChild)
//   //         divPlayers.removeChild (divPlayers.firstChild)

//   //     game.clients.forEach (c => {

//   //         const d = document.createElement("div");
//   //         d.style.width = "200px";
//   //         d.style.background = c.color
//   //         d.textContent = c.clientId;
//   //         divPlayers.appendChild(d);

//   //         if (c.clientId === clientId) playerColor = c.color;
//   //     })

//   //     while(divBoard.firstChild)
//   //     divBoard.removeChild (divBoard.firstChild)

//   //     for (let i = 0; i < game.balls; i++){

//   //         const b = document.createElement("button");
//   //         b.id = "ball" + (i +1);
//   //         b.tag = i+1
//   //         b.textContent = i+1
//   //         b.style.width = "150px"
//   //         b.style.height = "150px"
//   //         b.addEventListener("click", e => {
//   //             b.style.background = playerColor
//   //             const payLoad = {
//   //                 "method": "play",
//   //                 "clientId": clientId,
//   //                 "gameId": gameId,
//   //                 "ballId": b.tag,
//   //                 "color": playerColor
//   //             }
//   //             ws.send(JSON.stringify(payLoad))
//   //         })
//   //         divBoard.appendChild(b);
//   //     }

//   //  }
// };
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
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
  // if (gameId) {
  //   const payLoad = {
  //     method: "create",
  //     clientId: clientId,
  //     gameId: gameId,
  //   };

  // ws.send(JSON.stringify(payLoad));
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
// //wiring events
// btnJoin.addEventListener("click", e => {

//     if (gameId === null)
//         gameId = txtGameId.value;

//     const payLoad = {
//         "method": "join",
//         "clientId": clientId,
//         "gameId": gameId
//     }

//     ws.send(JSON.stringify(payLoad));

// })

// btnCreate.addEventListener("click", e => {

//     const payLoad = {
//         "method": "create",
//         "clientId": clientId
//     }

//     ws.send(JSON.stringify(payLoad));

// })
