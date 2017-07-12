function store(game) {
    return {
        preload: function(){
            game.load.image('menu', '../images/menubutton.png');
            game.load.image('characters', '../images/characterbutton.png');
            game.load.image('powerup', '../images/powerupbutton.png');
        },
        
        create: function(){
            var menu = game.add.button(400, 150, 'menu', function (){
                game.state.start('title');
            })
            menu.anchor.setTo(0.5, 0.5);
            
            var characters = game.add.button(400, 300, 'characters', function (){
                game.state.start('characters');
            })
            characters.anchor.setTo(0.5, 0.5);
            
            var powerup = game.add.button(400, 450, 'powerup', function (){
                game.state.start('powerup');
            })
            powerup.anchor.setTo(0.5, 0.5);
        }
    }
}