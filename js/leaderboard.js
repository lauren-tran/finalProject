function leaderboard(game){
    return{
        preload: function(){
            game.load.image('play','images/play3.png');
            game.load.image('menu','images/menu2.png');
            game.load.image('back','images/back2.png');
            game.load.image('trophy','images/trophy.png');
        },
        create: function () {
            var style = { font: "75px Arial", fill: "#FFFFFF"};
            var back = this.game.add.button(50, 50, 'back', this.menu, null, this);
            back.anchor.setTo(0.5, 0.5);
            
            var play = this.game.add.button(110, 50, 'play', this.playTheGame, null, this);
            play.anchor.setTo(0.5, 0.5);
            
            var trophy = this.game.add.sprite(230,75,'trophy');
                trophy.anchor.setTo(0.5,0.5);
            
            var list = window.highScore.sort(function (a, b) {
                return a < b;
            })
            for (var i = 0; i < 3; i++) {
                if (i >= window.highScore.length) {
                    break;
                }
                
                game.add.text(180, 130+i*175, list[i], style);
            }
            
            for (var i = 0; i < 3; i++) {
                if (i+3 >= window.highScore.length) {
                    break;
                }
                
                game.add.text(530, 130+i*175, list[i+3], style);
            }
//            var style = { font: "90px Arial", fill: "#FFFFFF"};
            var text = game.add.text(480, 75, `Leaderboard`, style);
            text.anchor.set(0.5);
            
            var text = game.add.text(120, 175, "1) ", style);
            text.anchor.set(0.5);
            
            var text = game.add.text(120, 345, `2)`, style);
            text.anchor.set(0.5);
            
            var text = game.add.text(120, 515, `3)`, style);
            text.anchor.set(0.5);
            
            var text = game.add.text(470, 175, `4)`, style);
            text.anchor.set(0.5);
            
            var text = game.add.text(470, 345, `5)`, style);
            text.anchor.set(0.5);
            
            var text = game.add.text(470, 515, `6)`, style);
            text.anchor.set(0.5);
            
        },
            menu: function() {
                this.game.state.start('title');
            },
        
            playTheGame: function () {
                this.game.state.start('start');
            }
            
        }
            
    }
        
