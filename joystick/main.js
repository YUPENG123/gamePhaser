var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example");

var PhaserGame = function () {
  this.sprite;
  this.pad;
  this.stick;
  this.buttonA;
  this.buttonB;
  this.buttonC;
};

PhaserGame.prototype = {
  init: function () {
    console.log("init");
  },
  preload: function () {
    this.load.image("bg", "assets/space1.png");
    this.load.image("ball", "assets/beball1.png");
  },
  create: function () {
    this.add.image(0, 0, "bg");
    this.add.sprite(400, 200, "ball");
  },
  pressButtonA: function () {
    console.log("buttonA");
  },
  pressButtonB: function () {
    console.log("buttonB");
  },
  pressButtonC: function () {
    console.log("buttonC");
  },
  update: function () {
    console.log("update");
  },
};

game.state.add("game", PhaserGame, true);
console.log(PhaserGame);
