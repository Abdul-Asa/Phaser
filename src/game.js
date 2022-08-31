const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 1600,
  height: 1280,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: false,
      debug: true,
    },
  },
};

const game = new Phaser.Game(config);

let player1, player2, ball, cursors;
const keys = {};
let gameStarted = false;
let restart = false;
let openingText, player1VictoryText, player2VictoryText, scoresText;
let touches = 0;
let increaseSpeed = false;
let button;

const scores = { p1: 0, p2: 0 };
function preload() {
  this.load.image("ball", "./assets/images/ball.png");
  this.load.image("paddle", "./assets/images/paddle.png");
}

function create() {
  ball = this.physics.add.sprite(
    this.physics.world.bounds.width / 2, // x position
    this.physics.world.bounds.height / 2, // y position
    "ball" // key of image for the sprite
  );
  ball.disableBody(true, true);

  player1 = this.physics.add.sprite(
    this.physics.world.bounds.width - (ball.body.width / 2 + 10), // x position
    this.physics.world.bounds.height / 2, // y position
    "paddle" // key of image for the sprite
  );
  player2 = this.physics.add.sprite(
    ball.body.width / 2 + 10, // x position
    this.physics.world.bounds.height / 2, // y position
    "paddle" // key of image for the sprite
  );

  cursors = this.input.keyboard.createCursorKeys();
  keys.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  keys.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  keys.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

  player1.setCollideWorldBounds(true);
  player2.setCollideWorldBounds(true);
  ball.setCollideWorldBounds(true);
  ball.setBounce(1, 1);
  player1.setImmovable(true);
  player2.setImmovable(true);
  this.physics.add.collider(ball, player1, null, null, this);
  this.physics.add.collider(ball, player2, null, null, this);

  openingText = this.add.text(
    this.physics.world.bounds.width / 2,
    this.physics.world.bounds.height / 2,
    "Press SPACE to Start \n Press ESC to End",
    {
      fontSize: "40px",
      fill: "#fff",
    }
  );
  openingText.setOrigin(0.5);

  // Create player 1 victory text
  player1VictoryText = this.add.text(
    this.physics.world.bounds.width / 2,
    this.physics.world.bounds.height / 2,
    "Point for player 1!",
    {
      fontFamily: "Monaco, Courier, monospace",
      fontSize: "40px",
      fill: "#fff",
    }
  );
  player1VictoryText.setOrigin(0.5);
  // Make it invisible until the player loses
  player1VictoryText.setVisible(false);

  // Create the game won text
  player2VictoryText = this.add.text(
    this.physics.world.bounds.width / 2,
    this.physics.world.bounds.height / 2,
    "Point for player 2!",
    {
      fontFamily: "Monaco, Courier, monospace",
      fontSize: "40px",
      fill: "#fff",
    }
  );
  player2VictoryText.setOrigin(0.5);
  // Make it invisible until the player wins
  player2VictoryText.setVisible(false);

  scoresText = this.add.text(
    this.physics.world.bounds.width / 2,
    ball.body.width / 2 + 10,
    `${scores.p1} : ${scores.p2}`,
    {
      fontSize: "20px",
      fill: "#fff",
    }
  );
  scoresText.setOrigin(0.5);
  // Make it invisible until the player loses
  scoresText.setVisible(false);
  if (!gameStarted) {
    if (cursors.space.isDown) {
      scoresText.setVisible(true);
      restart = false;
      gameStarted = true;
      ball = this.physics.add.sprite(
        this.physics.world.bounds.width / 2, // x position
        this.physics.world.bounds.height / 2, // y position
        "ball" // key of image for the sprite
      );
      ball.setCollideWorldBounds(true);
      ball.setBounce(1, 1);
      player1.setImmovable(true);
      player2.setImmovable(true);
      this.physics.add.collider(ball, player1, hitPlayer, null, this);
      this.physics.add.collider(ball, player2, hitPlayer, null, this);
      touches = 0;
      const initialXSpeed = randomNumber(100, 200) + 50;
      const initialYSpeed = randomNumber(100, 200) + 50;
      ball.setVelocityX(initialXSpeed);
      ball.setVelocityY(initialYSpeed);
      openingText.setVisible(false);
      player1VictoryText.setVisible(false);
      player2VictoryText.setVisible(false);
    }
  }
}

function update() {
  if (isPlayer1Point()) {
    player1VictoryText.setVisible(true);
    ball.disableBody(true, true);
    gameStarted = false;
    if (!restart) {
      scores.p1 += 1;
      restart = true;
      scoresText.setText(`${scores.p2} : ${scores.p1}`);
    }
  }
  if (isPlayer2Point()) {
    player2VictoryText.setVisible(true);
    ball.disableBody(true, true);
    gameStarted = false;
    if (!restart) {
      scores.p2 += 1;
      restart = true;
      scoresText.setText(`${scores.p2} : ${scores.p1}`);
    }
  }

  player1.body.setVelocityY(0);
  player2.body.setVelocityY(0);

  if (cursors.up.isDown) {
    player1.body.setVelocityY(-350);
  } else if (cursors.down.isDown) {
    player1.body.setVelocityY(350);
  }

  if (keys.w.isDown) {
    player2.body.setVelocityY(-350);
  } else if (keys.s.isDown) {
    player2.body.setVelocityY(350);
  }

  if (!gameStarted) {
    if (cursors.space.isDown) {
      scoresText.setVisible(true);
      restart = false;
      gameStarted = true;
      ball = this.physics.add.sprite(
        this.physics.world.bounds.width / 2, // x position
        this.physics.world.bounds.height / 2, // y position
        "ball" // key of image for the sprite
      );
      ball.setCollideWorldBounds(true);
      ball.setBounce(1, 1);
      player1.setImmovable(true);
      player2.setImmovable(true);
      this.physics.add.collider(ball, player1, hitPlayer, null, this);
      this.physics.add.collider(ball, player2, hitPlayer, null, this);
      touches = 0;
      const initialXSpeed = randomNumber(100, 200) + 50;
      const initialYSpeed = randomNumber(100, 200) + 50;
      ball.setVelocityX(initialXSpeed);
      ball.setVelocityY(initialYSpeed);
      openingText.setVisible(false);
      player1VictoryText.setVisible(false);
      player2VictoryText.setVisible(false);
    }
  }
  if (gameStarted) {
    if (keys.esc.isDown) {
      gameStarted = false;
      this.registry.destroy(); // destroy registry
      this.events.off();
      this.scene.restart();
    }
  }
}

function isPlayer1Point() {
  return ball.body.x < player2.body.x;
}

function isPlayer2Point() {
  return ball.body.x > player1.body.x;
}

function hitPlayer() {
  touches += 1;
  console.log(touches);
  if (touches % 5 == 0) {
    ball.setVelocityX(ball.body.velocity.x * 1.3);
    ball.setVelocityY(ball.body.velocity.y * 1.3);
  }
}

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
