function gameOver(game) {
    return {
        preload:function(){
            game.load.image('restart2','images/restart2.png');
            game.load.image('menu2', 'images/menu2.png');
            game.load.image('gameOver','images/gameOver.jpg');
        },
        
        create: function(){
            background = game.add.tileSprite(-250,0,1500,700,'gameOver')
            
            
            
            var restartB = 
                game.add.button(300,490,"restart2", function () {
                    game.state.start('start')
                })
                restartB.anchor.setTo(0.5,0.5);
            
            
            
            var mainMenu = 
                game.add.button(430,490,"menu2", function (){
                    game.state.start('title')
                })
                mainMenu.anchor.setTo(0.5,0.5);
        }
        
    }  
}