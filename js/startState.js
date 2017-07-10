function startState (game) {
    var skeleton
    return {
        preload(){
            game.load.spritesheet('skeleton','images/skeleton.png',64,64);
        },
        create(){
            game.world.setBounds(0, 0, this.game.width, this.game.height+500);
            
            game.physics.startSystem(Phaser.Physics.ARCADE);
            
            skeleton = game.add.sprite(this.game.width/2, game.world._height,'skeleton');
            skeleton.animations.add('walkup', [0,1,2,3,4,5,6,7,8]);
            skeleton.animations.play('walkup', 50, true);
            game.physics.arcade.enable(skeleton)
            skeleton.body.gravity.y = 500
            skeleton.body.collideWorldBounds = true
            
            game.camera.follow(skeleton)
            
        }
    }
}