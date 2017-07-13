
function gameStore(game) {
    
    return {
        preload: function () {
            this.game.load.image('shop', 'images/shop.png');
            
            this.game.load.image('characterbutton', 'images/characterbutton2.png');
            
            this.game.load.image('powerup', 'images/powerup2.png');
            
            this.game.load.image('back', 'images/back2.png');
        },
        
        create: function () {
            this.game.stage.backgroundColor = "#000000";
            
            var shop = this.game.add.sprite(400, 150, 'shop');
            shop.anchor.setTo(0.5, 0.5);
            
            var back = this.game.add.button(50, 50, 'back', this.menu, null, this);
            back.anchor.setTo(0.5, 0.5);
            
            var characterbutton = this.game.add.button(400, 340, 'characterbutton', this.characterpage, null, this);
            characterbutton.anchor.setTo(0.5, 0.5);
            
            var powerup = this.game.add.button(400, 475, 'powerup', this.poweruppage, null, this);
            powerup.anchor.setTo(0.5, 0.5);
        },
        
            menu: function() {
                this.game.state.start('title');
        },
            
            characterpage: function() {
                this.game.state.start('characters');
        },
        
            poweruppage: function() {
                this.game.state.start('powerup');
            }
    }
}