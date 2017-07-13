function startState(game) {
    var skeleton;
    var score;
    var text;
    var cursors;
    var setupPlatform;
    var movePlatform;
    var platforms;
    var scoreText;
    
    return {
        preload: function () {
            game.load.spritesheet('skeleton', 'images/skeleton.png', 64, 64);
            
            game.load.spritesheet('gold', 'images/coin_gold.png', 32, 32);
            game.load.image('background', 'images/b.gif');
            game.load.image('platform2', 'images/platform2.png');
            game.load.image('movingplatform',"images/movingPlatform.png")
             game.load.spritesheet('silver', 'images/coin_silver.png', 32, 32);
            
            game.load.spritesheet('copper', 'images/coin_copper.png', 32, 32);
            
            game.load.image('background', 'images/bg.jpg');
            
            game.load.image('platform2', 'images/platform2.png');
            
            this.game.load.image('pause', 'images/pause2.png');
            
            this.game.load.image('coin', 'images/coins2.png');
        },
        create: function() {
            
            score = 0;
            // setup world
            game.world.setBounds(0, 0, 800, this.game.height + 5000);

            // setup physics
            game.physics.startSystem(Phaser.Physics.ARCADE);

            // setup background
            background = game.add.tileSprite(0, 0, game.world._width, game.world._height, 'background');
            
             // create player
            skeleton = game.add.sprite(this.game.width / 2, game.world._height - 125, 'skeleton');
            this.world.wrap( skeleton, skeleton.width / 2, false )
            
            // create player animations
            skeleton.animations.add('walkup', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
            skeleton.animations.play('walkup', 50, true);

            // create player physics
            game.physics.arcade.enable(skeleton);
            skeleton.body.gravity.y = 1000;
            //skeleton.body.collideWorldBounds = true;
            skeleton.body.setSize(10, 40, 25, 20);

            //create coin
            gold = game.add.sprite(32, 32, 'gold');
            
            //add gold coin
            gold.animations.add('gold', [0, 1, 2, 3, 4, 5, 6, 7]);
            gold.animations.play('gold', 50, true)
            
            // create player physics
            game.physics.arcade.enable(skeleton);
            skeleton.body.gravity.y = 500;
            
            setupPlatform = game.add.physicsGroup();
            
            //creates platforms
            for (var i = 1; i < 100; i +=3) {
                this.makePlatform(500 * Math.random(), game.world._height - (i * 50));
            };
            
            
            for (var t = 1; t <1000 ; t += 100){
                this.makePlatform(t, game.world._height-50);
            };
            
            
            //creates moving platforms
            //this.makeMovingPlatform(200, game.world._height-100, 0, 400)
            
            //generates moving platforms
            for ( var h = 1; h < 100; h+=3){
                var x = h % 2 == 0 ? 150 : 500
                this.makeMovingPlatform(x, game.world._height - (h*100), 0, 400);
            }
            
            
            
            // setup camera
            game.camera.focusOn(skeleton);

            // setup keyboard
            cursors = game.input.keyboard.createCursorKeys();
            
            gold = game.add.group();
            gold.enableBody = true;
            for (var i = 0; i < 50; i++) {
                gold.create(game.world.randomX, game.world.randomY, 'gold', 0);
            }
            gold.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
            gold.callAll('animations.play', 'animations', 'spin');
            
            var style = { font: "24px Arial", fill: "#FFD700", align: "right" };
            text = game.add.text(20, 35, `Score: ${score}`, style);
            text.fixedToCamera = true;
            
            
            var pause = this.game.add.button(350, 50, 'pause', this.pauseScreen, null, this);
            pause.anchor.setTo(0.5, 0.5);

        },
        update: function() {
            game.physics.arcade.collide(skeleton, setupPlatform)
            game.world.wrap(skeleton, 0, true, true, true)
                
            if (cursors.left.isDown) {
                skeleton.body.velocity.x = -200;
            } else if (cursors.right.isDown) {
                skeleton.body.velocity.x = 200;
            } else {
                skeleton.body.velocity.x = 0;
            }
            
            if( cursors.up.isDown && (skeleton.body.touching.down || skeleton.body.onFloor() )) {
                skeleton.body.velocity.y = -550;
            }
            
            
            if (game.camera.y > skeleton.position.y-(game.height/2)) {
                game.camera.focusOn(skeleton)
            }
        
            if (game.camera.y + game.height < skeleton.position.y) {
                this.state.start("gameOver")
            }
            
            game.physics.arcade.overlap(skeleton, gold, this.collectGold, null, this);

        },
        makePlatform(x, y) {
            var p = setupPlatform.create(x, y, "platform2");
            p.scale.setTo(0.5);
            p.body.immovable = true;
            return p;
        },
        makeMovingPlatform(x, y, xdiff, ydiff) {
            var p = this.makePlatform(x, y);
            var t = this.add.tween(p.position);
            t.to({ 
                y: p.position.y - ydiff,
                x: p.position.x - xdiff    
            }, 3000, Phaser.Easing.Linear.None, true, 0, -1, true);
        },
        collectGold: function(player, coin) {    
            coin.kill ();
            score = score+10;
            text.setText(`Score: ${score}`);
        },
        togglePause: function () {
                game.physics.arcade.isPaused = !game.physics.arcade.isPaused;
        }
    }                  
}