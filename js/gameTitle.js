function gameTitle(game) {
    return {
        preload: function () {
            game.load.image('store', 'images/store2.png');
            
            game.load.image('play', 'images/playbutton.png');
            
            game.load.image('missions', 'images/missions2.png');
            
            game.load.image('leaderboard', 'images/leader2.png');
        },
        
        create: function () {
            
            var gameTitle = this.game.add.sprite(400, 100, 'gameTitle');
            gameTitle.anchor.setTo(0.5, 0.5);

            var play = this.game.add.button(168, 300, 'play', this.playTheGame, null, this);

            var store = this.game.add.button(168, 450, 'store', this.store, null, this);
            
            var missions = this.game.add.button(350, 450, 'missions', this.missions, null, this);
            
            var leaderboard = this.game.add.button(532, 450, 'leaderboard', this.leader, null, this);
        },
    
        playTheGame: function () {
            this.game.state.start('start');
        },
        
        store: function () {
            this.game.state.start('store');
        },
        
        missions: function () {
            this.game.state.start('missions');
        },
        
        leader: function () {
            this.game.state.start('leaderboard');
        }
    }
}