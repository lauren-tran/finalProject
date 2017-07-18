function startState(game) {
    var skeleton;
    var goldCollected;
    var score;
    var scoreText;
    var text;
    var cursors;
    var setupPlatform;
    var movePlatform;
    var platforms;
    var scoreText;
    var pause;
    var pauseMenu;
    var play;
    var restart;
    var mainMenu
    var maxHeight;
    var startHeight;
    var platformHit;
    var movingPlatform;
    var stationaryPlatform;
    var stationaryPlatformHit;

    return {
        preload: function () {
            this.game.load.image('background', 'images/b.gif');
            this.game.load.image('platform2', 'images/platform2.png');
            this.game.load.image('movingplatform',"images/movingPlatform.png")        
            this.game.load.image('background', 'images/bg.jpg');            
            this.game.load.image('pause', 'images/pause.png');
            this.game.load.image('coin', 'images/coins2.png');
            this.game.load.image('pauseScreen', 'images/pauseScreen2.png');
            this.game.load.image('restartButton', 'images/restart2.png');
            this.game.load.image('playButton', 'images/play2.png');
            this.game.load.image('mainMenu', 'images/menu2.png');
            this.game.load.spritesheet('fox', 'images/animal2.png', 47.5, 50);
            this.game.load.spritesheet('char', 'images/char2.png', 50, 50);
            this.game.load.spritesheet('pup', 'images/pups2.png', 50, 50);
            this.game.load.spritesheet('skeleton', 'images/skeleton2.png', 65, 65);
            this.game.load.spritesheet('gold', 'images/coin_gold.png', 32, 32);
            this.game.load.spritesheet('silver', 'images/coin_silver.png', 32, 32);
            this.game.load.spritesheet('copper', 'images/coin_copper.png', 32, 32);
        },
        
        create: function() {
            pause = false;
            maxHeight = 0; 
            goldCollected = 0;
            score = 0;
            platformHit = 0;
            stationaryPlatformHit = 0;
            
            // setup world
            game.world.setBounds(0, 0, 800, this.game.height + 10000);

            // setup physics
            game.physics.startSystem(Phaser.Physics.ARCADE);

            // setup background
            background = game.add.tileSprite(0, 0, game.world._width, game.world._height, 'background');
            
            // create player

            skeleton = game.add.sprite(this.game.width / 2, game.world._height - 125);
            startHeight = skeleton.position.y;
            this.world.wrap( skeleton, skeleton.width / 2, false )

            
            switch (window.currentCharacter) {
                case "construction":
                    skeleton.loadTexture("char")
                    skeleton.animations.add("walk_left", [12, 13, 14], 25)
                    skeleton.animations.add("walk_right", [24, 25, 26], 25)
                    skeleton.animations.add("stand", [2])
                    break;
                case "scientist":
                    skeleton.loadTexture("char")
                    skeleton.animations.add("walk_left", [15, 16, 17], 25)
                    skeleton.animations.add("walk_right", [27, 28, 29], 25)
                    skeleton.animations.add("stand", [5])
                    break;
                case "police":
                    skeleton.loadTexture("char")
                    skeleton.animations.add("walk_left", [18, 19, 20], 25)
                    skeleton.animations.add("walk_right", [30, 31, 32], 25)
                    skeleton.animations.add("stand", [8])
                    break;
                case "medic":
                    skeleton.loadTexture("char")
                    skeleton.animations.add("walk_left", [21, 22, 23], 25)
                    skeleton.animations.add("walk_right", [33, 34, 35], 25)
                    skeleton.animations.add("stand", [11])
                    break;
                case "agent":
                    skeleton.loadTexture("char")
                    skeleton.animations.add("walk_left", [60, 61, 62], 25)
                    skeleton.animations.add("walk_right", [72, 73, 74], 25)
                    skeleton.animations.add("stand", [50])
                    break;
                case "policeWoman":
                    skeleton.loadTexture("char")
                    skeleton.animations.add("walk_left", [66, 67, 68], 25)
                    skeleton.animations.add("walk_right", [78, 79, 80], 25)
                    skeleton.animations.add("stand", [56])
                    break;
                case "medicWoman":
                    skeleton.loadTexture("char")
                    skeleton.animations.add("walk_left", [69, 70, 71], 25)
                    skeleton.animations.add("walk_right", [81, 82, 83], 25)
                    skeleton.animations.add("stand", [59])
                    break;
                case "skeleton":
                    skeleton.loadTexture("skeleton")
                    skeleton.animations.add("walk_left", [9, 10, 11, 12, 13, 14, 15, 16, 17], 25)
                    skeleton.animations.add("walk_right", [27, 28, 29, 30, 31, 32, 33, 34, 35], 25)
                    skeleton.animations.add("stand", [18])
                    break;
                case "fox":
                    skeleton.loadTexture("fox")
                    skeleton.animations.add("walk_left", [0, 1, 2], 25)
                    skeleton.animations.add("walk_right", [12, 13, 14], 25)
                    skeleton.animations.add("stand", [4])
                    break;
                case "dog":
                    skeleton.loadTexture("pup")
                    skeleton.animations.add("walk_left", [12, 13, 14], 25)
                    skeleton.animations.add("walk_right", [24, 25, 26], 25)
                    skeleton.animations.add("stand", [1])
                    break;
                default:
                    throw new Error("Invalid current character")
            }

            skeleton.animations.play('walk_right', null, true);

            // create player physics
            game.physics.arcade.enable(skeleton);
            skeleton.body.gravity.y = 1000;
            //skeleton.body.collideWorldBounds = true;
            skeleton.body.setSize(10, 40, 25, 20);

            //create coin
            gold = game.add.sprite(32, 32, 'gold');
            
            //add gold coin
            gold.animations.add('gold', [0, 1, 2, 3, 4, 5, 6, 7]);
            gold.animations.play('gold', 50, true);
            
            // create player physics
            game.physics.arcade.enable(skeleton);
            skeleton.body.gravity.y = 900;
            
            setupPlatform = game.add.physicsGroup();
            setupPlatform.enableBody = true
            
            stationaryPlatform = game.add.group();
            stationaryPlatform.enableBody = true
            
            movingPlatform = game.add.group();
            movingPlatform.enableBody = true
            
            //creates platforms
            for (var i = 1; i < 100; i +=3) {
                var p = this.makePlatform(500 * Math.random(), game.world._height - (i * 50));
                stationaryPlatform.add(p)
            };
            
            for (var t = 1; t <1000 ; t += 100){
                this.makePlatform(t-50, game.world._height-50);
            };
            
            //creates moving platforms
            //this.makeMovingPlatform(200, game.world._height-100, 0, 400)
            
            //generates moving platforms
            for ( var h = 1; h < 500; h+=3){
                var x = h % 2 == 0 ? 200 : 400;
                this.makeMovingPlatform(x, game.world._height - (h*100), 0, 400);
            }
            
            // setup camera
            game.camera.focusOn(skeleton);

            // setup keyboard
            cursors = game.input.keyboard.createCursorKeys();
            
            gold = game.add.group();
            gold.enableBody = true;
            for (var i = 0; i < 100; i++) {
                gold.create(game.world.randomX, game.world.randomY, 'gold', 0);
            }
            gold.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
            gold.callAll('animations.play', 'animations', 'spin');
            
            var style = { font: "24px Arial", fill: "#000000", align: "right" };
            text = game.add.text(20, 60, `Gold: ${goldCollected}`, style);
            text.fixedToCamera = true;
            
            scoreText = game.add.text(20, 35, `Score: ${score}`, style);
            scoreText.fixedToCamera = true;
            
            var pauseButton = this.game.add.button(750, 50, 'pause', this.togglePause, null, this);
            pauseButton.anchor.setTo(0.5, 0.5);
            pauseButton.fixedToCamera = true;
            
            pauseMenu = game.add.group()
            pauseMenu.create(-83, 135, 'pauseScreen')
            
            var menuButton = game.add.button(100, 315, 'mainMenu', function () {
                game.state.start('title')
            })
            var restartButton = game.add.button(350, 315, 'restartButton', function() {
                game.state.start('start')
            })
            var playButton = game.add.button(600, 315, 'playButton', this.togglePause, null, this)
            
            pauseMenu.add(menuButton)
            pauseMenu.add(restartButton)
            pauseMenu.add(playButton)
            
            pauseMenu.fixedToCamera = true
            pauseMenu.forEach(function (m) {
                m.alpha = 0
            })
        },
        
        update: function() {
            game.physics.arcade.collide(skeleton, movingPlatform, function(skeleton, platform) {
                if (platform.data.hit == undefined && skeleton.body.touching.down) {
                    platformHit++;
                    platform.data.hit = true
                }
            })
            
            game.physics.arcade.collide(skeleton, stationaryPlatform, function(skeleton, platform) {
                if (platform.data.hit == undefined && skeleton.body.touching.down) {
                    stationaryPlatformHit++
                    platform.data.hit = true
                }
            })
            
            game.physics.arcade.collide(skeleton, setupPlatform)
            
            game.world.wrap(skeleton, 0, true, true, true)
                
            if (cursors.left.isDown) {
                skeleton.body.velocity.x = -200;
                skeleton.animations.play('walk_left', null, true);
            } else if (cursors.right.isDown) {
                skeleton.body.velocity.x = 200;
                skeleton.animations.play('walk_right', null, true);
            } else {
                skeleton.body.velocity.x = 0;
                skeleton.animations.play('stand', null, true);
            }
            
            if( cursors.up.isDown && (skeleton.body.touching.down || skeleton.body.onFloor() )) {
                skeleton.body.velocity.y = -550;
            }
            
            if (game.camera.y > skeleton.position.y-(game.height/2)) {
                game.camera.focusOn(skeleton);
            }
        
            if (game.camera.y + game.height < skeleton.position.y) {
                window.money += goldCollected
                window.totalMoney += goldCollected
                window.moneyMission.inc (goldCollected)
                window.highScore.push(score);
                window.scoreMission.inc (score)
                window.platformHit += platformHit
                window.movingPlatformMission.inc (platformHit)
                window.stationaryPlatformHit += stationaryPlatformHit
                window.stationaryPlatformMission.inc (stationaryPlatformHit)
                this.state.start("gameOver", false, false, score);
            }
            
            game.physics.arcade.overlap(skeleton, gold, this.collectGold, null, this);
                if (Math.abs(skeleton.position.y - startHeight) > Math.abs(maxHeight)) {
                    maxHeight = Math.abs(skeleton.position.y - startHeight)
                }

            if (maxHeight > window.maxHeight) {
                window.maxHeight = maxHeight
            }

            score = Math.floor(maxHeight)
            scoreText.setText(`Score: ${score}`)
        },
        
        makePlatform(x, y) {
            var p = setupPlatform.create(x, y, "platform2");
            p.scale.setTo(0.5);
            p.body.immovable = true;
            return p;
        },
        
        makeMovingPlatform(x, y, xdiff, ydiff) {
            var p = this.makePlatform(x, y);
            movingPlatform.add(p)
            var t = this.add.tween(p.position);
            t.to({ 
                y: p.position.y - ydiff,
                x: p.position.x - xdiff    
            }, 3000, Phaser.Easing.Linear.None, true, 0, -1, true);
        },
        
        collectGold: function(player, coin) {    
            coin.kill ();
            goldCollected = goldCollected+10;
            text.setText(`Gold: ${goldCollected}`);
        },
        
        togglePause: function () {
            console.log(pause)
            if (!pause) {
                console.log("not")
                pause = true
                game.physics.arcade.isPaused = true
                game.tweens.pauseAll()
                skeleton.animations.paused = true
                gold.forEach(function (goldCoin) {
                    goldCoin.animations.paused = true
                })
                pauseMenu.forEach(function (m) {
                    m.alpha = 50
                })
            } else {
                console.log("not not")
                pause = false
                game.physics.arcade.isPaused = false
                game.tweens.resumeAll()
                skeleton.animations.paused = false
                gold.forEach(function (goldCoin) {
                    goldCoin.animations.paused = false
                })
                pauseMenu.forEach(function (m) {
                    m.alpha = 0
                })
            }
        }
    }                  
}
