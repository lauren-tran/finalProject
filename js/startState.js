function startState (game) {
    var skeleton
    var cursors
    var setupPlatform
    return {
        preload(){
            game.load.spritesheet('skeleton','images/skeleton.png',64,64);
            game.load.image('background','images/bg.jpg');
            game.load.image('platform2','images/platform2.png');
        },
        create(){
            // setup world
            game.world.setBounds(0, 0, this.game.width, this.game.height+1000);
            
            // setup physics
            game.physics.startSystem(Phaser.Physics.ARCADE);
            
            // setup background
            background = game.add.tileSprite(0,0,game.world._width, game.world._height, 'background')
            
            // create player
            skeleton = game.add.sprite(this.game.width/2, game.world._height,'skeleton');
            
            // create player animations
            skeleton.animations.add('walkup', [0,1,2,3,4,5,6,7,8]);
            skeleton.animations.play('walkup', 50, true);
            
            // create player physics
            game.physics.arcade.enable(skeleton)
            skeleton.body.gravity.y = 500
            skeleton.body.collideWorldBounds = true
            
            setupPlatform = game.add.physicsGroup()
            var platform1 = setupPlatform.create(100,game.world._height-100,"platform2")
            platform1.scale.setTo(0.5)
            platform1.body.immovable = true
            
            // setup camera
            game.camera.follow(skeleton)
            
            // setup keyboard
            cursors = game.input.keyboard.createCursorKeys();
            
        },
        update(){
            if(cursors.up.isDown){
                skeleton.body.velocity.y = -100
            }
                
            if(cursors.left.isDown){
                skeleton.body.velocity.x = -100
            }
                
            if(cursors.right.isDown){
                skeleton.body.velocity.x = 100
            }

        
        }
    }
}