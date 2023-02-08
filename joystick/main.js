var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example");

var PhaserGame = function () {};

PhaserGame.prototype = {
  init: function () {
    console.log("init");
  },
  preload: function () {
    console.log("preload");
  },
  create: function () {
    console.log("create");
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
  }
};

game.state.add("game", PhaserGame, true);
