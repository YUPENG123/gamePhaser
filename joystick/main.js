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
    this.load.atlas(
      "arcade",
      "assets/arcade-joystick.png",
      "assets/arcade-joystick.json"
    );
  },
  create: function () {
    this.add.image(0, 0, "bg");
    this.sprite = this.add.sprite(400, 200, "ball");

    this.pad = this.game.plugins.add(Phaser.VirtualJoystick);
    this.stick = this.pad.addStick(0, 0, 200, "arcade");
    this.stick.alignBottomLeft();

    this.buttonA = this.pad.addButton(
      500,
      520,
      "arcade",
      "button1-up",
      "button1-down"
    );
    this.buttonA.onDown.add(this.pressButtonA, this);
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
    var maxSpeed = 400;

    if(this.stick.isDown){
      this.physics.arcade.velocityFromRotation(this.stick.rotation,this.stick.force*maxSpeed,this.sprite.body.velocity);

    }
    else{
      this.sprite.body.velocity.set(0);

    }
  },
};

game.state.add("GAME", PhaserGame, true);
