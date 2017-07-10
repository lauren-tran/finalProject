window.onload = function () {
    var game = new Phaser.Game({
        height: 600,
        width: 800,
        parent: document.getElementById("main")
    });

    game.state.add('start', startState(game));
    game.state.add("pause", pause(game));
    game.state.add('title', gameTitle(game));
    game.state.add('gameOver', gameOver(game));

 
    game.state.start('title');
    window.game = game;
}
// switch to scroll updards
//this.game.world.setBounds(0, 0, 3500, this.game.height);

