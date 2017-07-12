function gameTitle(game) {
    return {
        preload: function(){
           game.load.image('shopButton', 'images/shopButton.png');
            
            game.load.image('playButton', 'images/playButton.png');
            
            game.load.image('missionsButton', 'images/missionsButton.png');
            
            game.load.image('leaderboard', 'images/leaderboard.png');
        },
        
        create: function(){
            
            var gameTitle = this.game.add.sprite(385,100,'gameTitle');

            gameTitle.anchor.setTo(0.5,0.5);

            var playButton=
                game.add.button(385,250,'playButton',function (){
                    game.state.start('start')
                })
            playButton.anchor.setTo(0.5,0.5);

            playButton.scale.setTo(0.5,0.5);


            var shopButton = 
                game.add.button(385,350,'shopButton',function(){
                    game.state.start('store');
                })
            shopButton.scale.setTo(0.5)

            shopButton.anchor.setTo(0.5,0.5);
            
            var missionsButton = this.game.add.button(385,450,'missionsButton', this.playTheGame, null, this)
            missionsButton.anchor.setTo(0.5,0.5);
            missionsButton.scale.setTo(0.5);
            
            var leaderboard = this.game.add.button(385,550,'leaderboard', this.playTheGame,null,this)
            leaderboard.anchor.setTo(0.5,0.5);
            leaderboard.scale.setTo(0.5,0.5);
        },
    
        playTheGame: function(){
    
            this.game.state.start('main');
        }
    }
}