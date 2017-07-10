window.onload = function () {
    var game = new Phaser.Game({
        height: 600,
        width: 800,
        parent: document.getElementById("main")
    });

    game.state.add('start', startState(game))
    game.state.add('pause', pause(game))

    game.state.start('start')
}