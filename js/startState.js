function startState (game) {
    var skeleton
    return {
        preload(){
            game.load.spritesheet('skeleton','images/skeleton.png',64,64); game.load.spritesheet('gold','images/coin_gold.png',32,32);
            
        },
        create(){
            skeleton = game.add.sprite(64,64,'skeleton');
            skeleton.animations.add('walkleft', [9,10,11,12,13,14,15,16,17]);
            skeleton.animations.play('walkleft', 50, true);
            
            gold = game.add.sprite(32,32,'gold');
            gold.animations.add('gold', [0,1,2,3,4,5,6,7]);
            gold.animations.play('gold', 50, true);
            
        }
    }
}