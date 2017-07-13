function gameTitle(game) {
    return {
        preload: function () {
            game.load.image('store', 'images/store2.png');
            
            game.load.image('play2', 'images/play2.png');
            
            game.load.image('missions', 'images/missions2.png');
            
            game.load.image('leaderboard', 'images/leader2.png');
            
            game.load.image('background','images/ml.jpg')
        },
        
        create: function () {
            
             background = game.add.tileSprite(0, 0, game.world._width, game.world._height, 'background');
            
            var gameTitle = this.game.add.sprite(400, 100, 'gameTitle');
            gameTitle.anchor.setTo(0.5, 0.5);

            var store = this.game.add.button(270, 450, 'store', this.store, null, this);
           
            var playButton=
                game.add.button(110,450,'play2',function (){
                    game.state.start('start')
                })
            
            
            var missions = this.game.add.button(430, 450, 'missions', this.missions, null, this);
            
            var leaderboard = this.game.add.button(590, 450, 'leaderboard', this.leader, null, this);
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
