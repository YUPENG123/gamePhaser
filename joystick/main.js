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
    this.game.renderer.renderSession.roundPixels = true;
    this.physics.startSystem(Phaser.Physics.ARCADE);
  },
  preload: function () {
    this.load.image("bg", "assets/space1.png");
    this.load.image("ball", "assets/beball1.png");
    this.load.atlas(
      "arcade",
      "assets/arcade-joystick.png",
      "assets/arcade-joystick.json"
    );
  },
  create: function () {
    this.add.image(0, 0, "bg");
    this.sprite = this.add.sprite(400, 200, "ball");

    this.pad = this.game.plugins.add(Phaser.VirtualJoyStick);
    this.stick = this.pad.addstick(0, 0, 200, "arcade");
    console.log(pad);
    console.log(stick);
    console.log(sprite);
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
//console.log(PhaserGame);
