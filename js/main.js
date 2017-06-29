var game = new Phaser.Game(800, 600, Phaser.AUTO, 'Idonthaveanameyet')

game.state.add('start', startState(game))

game.state.start('start')