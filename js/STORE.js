function gameStore(game) {
    
    return {
        preload: function () {
            this.game.load.image('shop', 'images/shop.png');

            this.game.load.image('back', 'images/back2.png');
            
            this.game.load.image('play', 'images/play3.png');
            
            this.game.load.image('coin', 'images/coins2.png');
            
            this.game.load.image('charcost', 'images/char_cost2.png');
            
            this.game.load.image('charcost2', 'images/charcost2.png');
            
            this.game.load.spritesheet('fox', 'images/animal2.png', 39.5, 41, -1, 5, 4);
            
            this.game.load.spritesheet('skeleton', 'images/skeleton2.png', 65, 65);
            
            this.game.load.spritesheet('char', 'images/char2.png', 50, 50);
            
            this.game.load.spritesheet('pup', 'images/pups2.png', 50, 50);
            
        },
        
        create: function () {
            this.game.stage.backgroundColor = "#000000";
            
            var shop = this.game.add.sprite(400, 150, 'shop');
            shop.anchor.setTo(0.5, 0.5);
            
            var back = this.game.add.button(50, 50, 'back', this.menu, null, this);
            back.anchor.setTo(0.5, 0.5);
            
            var play = this.game.add.button(115, 50, 'play', this.playTheGame, null, this);
            play.anchor.setTo(0.5, 0.5);
            
            for (var i = 0; i < window.characters.length/2; i++) {
                var char = window.characters[i]
                
                console.log(125+(137.5*i))
                
                if (window.ownedCharacters.includes(char)) {
                    var style = { font: "12px Arial", fill: "#FFFFFF"};
                    var text = game.add.text(125+(137.5*i), 360, "already owned", style);
                    text.anchor.set(0.5);
                } else if (window.characterPrice[char] === 100) {
                    var charcost = this.game.add.button(125+(137.5*i), 360, 'charcost', this.char(char), null, this);
                    charcost.anchor.setTo(0.5, 0.5);
                } else if (window.characterPrice[char] === 200) {
                    var charcost = this.game.add.button(125+(137.5*i), 360, 'charcost2', this.char(char), null, this);
                    charcost.anchor.setTo(0.5, 0.5);
                } else {
                    throw new Error("WUT?")
                }
            }
            
            for (var i = 0; i < window.characters.length/2; i++) {
                var char = window.characters[i+window.characters.length/2]
                
                console.log(char);
                
                if (window.ownedCharacters.includes(char)) {
                    var style = { font: "12px Arial", fill: "#FFFFFF"};
                    var text = game.add.text(125+(137.5*i), 530, "already owned", style);
                    text.anchor.set(0.5);
                } else if (window.characterPrice[char] === 100) {
                    var charcost = this.game.add.button(125+(137.5*i), 530, 'charcost', this.char(char), null, this);
                    charcost.anchor.setTo(0.5, 0.5);
                } else if (window.characterPrice[char] === 200) {
                    var charcost = this.game.add.button(125+(137.5*i), 530, 'charcost2', this.char(char), null, this);
                    charcost.anchor.setTo(0.5, 0.5);
                } else {
                    throw new Error("WUT?")
                }
            }
            
            /*
            var charcost = this.game.add.button(125, 360, 'charcost', this.char("construction"), null, this);
            charcost.anchor.setTo(0.5, 0.5);
            var charcost = this.game.add.button(262.5, 360, 'charcost', this.char("scientist"), null, this);
            charcost.anchor.setTo(0.5, 0.5);
            var charcost = this.game.add.button(400, 360, 'charcost', this.char("police"), null, this);
            charcost.anchor.setTo(0.5, 0.5);
            var charcost = this.game.add.button(537.5, 360, 'charcost', this.char("medic"), null, this);
            charcost.anchor.setTo(0.5, 0.5);
            var charcost = this.game.add.button(675, 360, 'charcost', this.char("agent"), null, this);
            charcost.anchor.setTo(0.5, 0.5);
            
            var charcost = this.game.add.button(125, 530, 'charcost2', this.char("policeWoman"), null, this);
            charcost.anchor.setTo(0.5, 0.5);
            var charcost = this.game.add.button(262.5, 530, 'charcost2', this.char("medicWoman"), null, this);
            charcost.anchor.setTo(0.5, 0.5);
            var charcost = this.game.add.button(400, 530, 'charcost2', this.char("skeleton"), null, this);
            charcost.anchor.setTo(0.5, 0.5);
            var charcost = this.game.add.button(537.5, 530, 'charcost2', this.char("fox"), null, this);
            charcost.anchor.setTo(0.5, 0.5);
            var charcost = this.game.add.button(675, 530, 'charcost2', this.char("dog"), null, this);
            charcost.anchor.setTo(0.5, 0.5);
            */
            
            var style = { font: "24px Arial", fill: "#FFD700", align: "right" };

            var text = game.add.text(game.world._width-75, 55, window.money, style);
            window.text = text
            text.anchor.set(0.5);
            
            var coin = this.game.add.sprite(757, 51, 'coin');
            coin.anchor.setTo(0.5, 0.5);
            
            var sprite1 = this.game.add.sprite(100, 250, 'char', 0);
            var sprite2 = this.game.add.sprite(237.5, 250, 'char', 3);
            var sprite3 = this.game.add.sprite(375, 250, 'char', 6);
            var sprite4 = this.game.add.sprite(512.5, 250, 'char', 9);
            var sprite5 = this.game.add.sprite(650, 250, 'char', 48);
            var sprite6 = this.game.add.sprite(100, 420, 'char', 54);
            var sprite7 = this.game.add.sprite(237.5, 420, 'char', 57);
            var sprite8 = this.game.add.sprite(367.5, 410, 'skeleton', 18);
            var sprite9 = this.game.add.sprite(512.5, 420, 'fox', 0);
            var sprite10 = this.game.add.sprite(650, 420, 'pup', 0);
        },
        
        menu: function () {
            this.game.state.start('title');
        },
        
        playTheGame: function () {
            this.game.state.start('start');
        },
        char: function(character) {
            return function() {
                var price = window.characterPrice[character]

                if (window.ownedCharacters.includes(character)) {
                    window.currentCharacter = character
                } 
                else if (window.money >= price) {
                    window.money -= price;
                    window.ownedCharacters.push(character)
                    window.currentCharacter = character
                    game.state.start("store")
                    text.setText(window.money)
                }
            }
        }
    }
}