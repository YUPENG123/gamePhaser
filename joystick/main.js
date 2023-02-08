var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example');

var PhaserGame = function () {

};

PhaserGame.prototype = {
init:function(){

},
preload:function(){
console.log('preload');
},
};

game.state.add('game',PhaserGame,true);

