function missions(game) {
    return {
        preload () {
            this.game.load.image('play','images/play3.png');
            this.game.load.image('back','images/back2.png');
            this.game.load.image ('10coins', 'images/mission_10coin.png');
            this.game.load.image ('25coins', 'images/mission_25coin.png');
            this.game.load.image ('50coins', 'images/mission_50coin.png');
        },
        create () {
            var back = this.game.add.button(50, 50, 'back', this.menu, null, this);
            back.anchor.setTo(0.5, 0.5);
            
            var play = this.game.add.button(115, 50, 'play', this.playTheGame, null, this);
            play.anchor.setTo(0.5, 0.5);
            
            if (window.money > 500) {
                
            } else if (window.money > 250) {
                var sprite = this.game.add.sprite (400, 300, '50coins')
                sprite.anchor.setTo(0.5, 0.5);
            } else if (window.money > 100) {
                var sprite = this.game.add.sprite (400, 300, '25coins')
                sprite.anchor.setTo(0.5, 0.5);
            } else {
                var sprite = this.game.add.sprite (400, 300, '10coins')
                sprite.anchor.setTo(0.5, 0.5);
            }
        },

        menu: function () {
            this.game.state.start('title');
        },

        playTheGame: function () {
            this.game.state.start('start');
        },
    }
}