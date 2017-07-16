window.onload = function () {
    var game = new Phaser.Game({
        height: 600,
        width: 800,
        parent: document.getElementById("main"),
        renderer: Phaser.AUTO
    });

    game.state.add('start', startState(game));
    game.state.add('pause', pause(game));
    game.state.add('title', gameTitle(game));
    game.state.add('gameOver', gameOver(game));
    game.state.add('store', gameStore(game));
    game.state.add('missions', missions(game));
    game.state.add('leaderboard', leaderboard(game));
 
    game.state.start('title');
    window.game = game;
}
// switch to scroll upwards
//this.game.world.setBounds(0, 0, 3500, this.game.height);