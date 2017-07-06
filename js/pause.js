function pause(game) {
        return {
            preload: function(){
                game.load.image('menuButton','images/menu2.png');
                game.load.image('restartButton','images/restart2.png'); 
                
                game.load.image('playButton', 'images/play2.png');
                
                game.load.image('pauseScreen', 'images/pauseScreen.png');
            },

            create: function(){
                var background = this.game.add.sprite(0,0,'pauseScreen');
                background.scale.setTo(0.58565154);
                
                var menuButton = this.game.add.button(150, 490, 'menuButton', this.playTheGame, this);
                menuButton.anchor.setTo(0.5, 0.5);
                
                var restartButton = this.game.add.button(400, 490, 'restartButton', this.playTheGame, null, this);
                restartButton.anchor.setTo(0.5, 0.5);
                
                var playButton = this.game.add.button(650,490,'playButton', this.playTheGame, null, this);
                playButton.anchor.setTo(0.5,0.5);
            }
        }
}