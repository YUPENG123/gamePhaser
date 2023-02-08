var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example');

var PhaserGame = function () {

};

PhaserGame.prototype = {

};

game.state.add('game',PhaserGame,true);