function gameOver(game) {
    return {
        preload:function(){
            game.load.image('restartB','images/restartB.png');
            game.load.image('mainMenu', 'images/mainMenu.png');
            game.load.image('gameOver','images/gameOver.jpg');
        },
        
        create: function(){
            background = game.add.tileSprite(-250,0,1500,700,'gameOver')
            
            var restartB = 
                game.add.button(150,490,"restartB", function () {
                    game.state.start('start')
                })
                restartB.anchor.setTo(0.5,0.5);
            
            
            
            var mainMenu = 
                game.add.button(500,490,"mainMenu", function (){
                    game.state.start('title');
                })
                mainMenu.anchor.setTo(0.5,0.5);
        }
        
    }  
}