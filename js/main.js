var game = new Phaser.Game(800, 600, Phaser.AUTO, 'Idonthaveanameyet');

game.state.add('start', startState(game));

game.state.add('title', gameTitle(game));

game.state.add('gameOver', gameOver(game));

game.state.start('gameOver');


var InfiniteScroller = InfiniteScroller || {};
 
InfiniteScroller.game = new Phaser.Game(746, 420, Phaser.CANVAS, '');
 
InfiniteScroller.game.state.add('Boot', InfiniteScroller.Boot);
InfiniteScroller.game.state.add('Preload', InfiniteScroller.Preload);
InfiniteScroller.game.state.add('Game', InfiniteScroller.Game);
 
InfiniteScroller.game.state.start('Boot');
