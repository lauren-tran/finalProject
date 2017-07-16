function gameOver(game) {
    var score;
    return {
        preload:function(){
            game.load.image('restart2','images/restart2.png');
            game.load.image('menu2', 'images/menu2.png');
            game.load.image('gameOver','images/gameOver.jpg');
            game.load.image('store', 'images/store2.png');
            game.load.image('leaderboard','images/leader2.png');
        },
        init: function(_score) {
          score = _score; 
        },
        create: function(){
            background = game.add.tileSprite(-250,0,1500,700,'gameOver')
            
            var style = { font: "30px Arial", fill: "#FFFFFF"};

            var text = game.add.text(game.world._width/2, 385, `Score: ${score}`, style);

            text.anchor.set(0.5);
            
            var restartB = 
                game.add.button(150,490,"restart2", function () {
                    game.state.start('start')
                })
                restartB.anchor.setTo(0.5,0.5);
            
            var store = 
                game.add.button(300,490,'store', function(){
                    game.state.start('store')
                })
                store.anchor.setTo(0.5,0.5);
            
            var leaderboard = 
                game.add.button(450, 490,'leaderboard',function(){
                    game.state.start('leaderboard')
                })
                leaderboard.anchor.setTo(0.5,0.5);
            
            var mainMenu = 
                game.add.button(600,490,"menu2", function (){
                    game.state.start('title')
                })
                mainMenu.anchor.setTo(0.5,0.5);
        }        
    }  
}