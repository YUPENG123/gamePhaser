var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example');

var PhaserGame = function () {

};

PhaserGame.prototype = {
init:function(){
console.log('init');
},
preload:function(){
console.log('preload');
},
};

game.state.add('game',PhaserGame,true);

