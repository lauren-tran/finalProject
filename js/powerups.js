function powerup(game) {
    
    return {
        preload: function () {
            this.game.load.image('back', 'images/back2.png');
            
            this.game.load.image('menu', 'images/menu3.png');
            
            this.game.load.image('coin', 'images/coins2.png');
        },
        
        create: function () {
            this.game.stage.backgroundColor = "#000000";
            
            var back = this.game.add.button(50, 50, 'back', this.store, null, this);
            back.anchor.setTo(0.5, 0.5);
            
            var menu = this.game.add.button(115, 50, 'menu', this.menu, null, this);
            menu.anchor.setTo(0.5, 0.5);
            
            var style = { font: "24px Arial", fill: "#FFD700", align: "right" };

            var text = game.add.text(game.world._width-75, 55, window.money, style);
            text.anchor.set(0.5);
            
            var coin = this.game.add.sprite(757, 51, 'coin');
            coin.anchor.setTo(0.5, 0.5);
        },
        
        store: function () {
            this.game.state.start('store');
        },
        
        menu: function () {
            this.game.state.start('title');
        }
    }
}