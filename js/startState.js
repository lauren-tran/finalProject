function startState (game) {
    var skeleton
    return {
        preload(){
            game.load.spritesheet('skeleton','images/skeleton.png',64,64);
        },
        create(){
            skeleton = game.add.sprite(64,64,'skeleton');
            skeleton.animations.add('walkup', [0,1,2,3,4,5,6,7,8]);
            skeleton.animations.play('walkup', 50, true);
        }
    }
}