function missions(game) {
    return {
        preload () {
            this.game.load.image ('play','images/play3.png');
            this.game.load.image ('back','images/back2.png');
            this.game.load.image ('missions', 'images/mission.png');
            this.game.load.image ('10coins', 'images/mission_coin10.png');
            this.game.load.image ('25coins', 'images/mission_coin25.png');
            this.game.load.image ('50coins', 'images/mission_coin50.png');
            this.game.load.image ('10000pts','images/mission_10000pts.png');
            this.game.load.image ('20000pts','images/mission_20000pts.png');
            this.game.load.image ('50000pts','images/mission_50000pts.png');
            this.game.load.image ('10moving','images/mission_moving10.png');
            this.game.load.image ('25moving','images/mission_moving25.png');
            this.game.load.image ('50moving','images/mission_moving50.png');
            this.game.load.image ('10platform','images/mission_platform10.png');
            this.game.load.image ('25platform','images/mission_platform25.png');
            this.game.load.image ('50platform','images/mission_platform50.png');
            this.game.load.image ('complete', 'images/missioncomplete.png');
            this.game.load.image ('coin', 'images/coins2.png');
        },
        
        create () {
            var back = this.game.add.button(50, 50, 'back', this.menu, null, this);
            back.anchor.setTo(0.5, 0.5);
            
            var play = this.game.add.button(115, 50, 'play', this.playTheGame, null, this);
            play.anchor.setTo(0.5, 0.5);
            
            var missions = this.game.add.sprite(400, 70, 'missions');
            missions.anchor.setTo(0.5, 0.5);
            
            var style = { font: "24px Arial", fill: "#FFD700", align: "right" };

            var text = game.add.text(game.world._width-75, 55, window.money, style);
            window.text = text
            text.anchor.set(0.5);
            
            var coin = this.game.add.sprite(757, 51, 'coin');
            coin.anchor.setTo(0.5, 0.5);
            
            switch (window.moneyMission.level) {
                case 0: {
                    let sprite = this.game.add.sprite (400, 200, '10coins')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                    
                case 1: {
                    let sprite = this.game.add.sprite (400, 200, '25coins')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                    
                case 2: {
                    let sprite = this.game.add.sprite (400, 200, '50coins')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                case 3: {
                    let sprite = this.game.add.sprite (400, 200, 'complete');
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                default:
                    throw new Error("WUT?")
            }
            
            switch (window.scoreMission.level) {
                case 0: {
                    let sprite = this.game.add.sprite (400, 300, '10000pts')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                    
                case 1: {
                    let sprite = this.game.add.sprite (400, 300, '20000pts')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                    
                case 2: {
                    let sprite = this.game.add.sprite (400, 300, '50000pts')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                case 3: {
                    let sprite = this.game.add.sprite (400, 300, 'complete');
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                default:
                    throw new Error("WUT?")
            }
            
            switch (window.movingPlatformMission.level) {
                case 0: {
                    let sprite = this.game.add.sprite (400, 400, '10moving')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                    
                case 1: {
                    let sprite = this.game.add.sprite (400, 400, '25moving')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                    
                case 2: {
                    let sprite = this.game.add.sprite (400, 400, '50moving')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                case 3: {
                    let sprite = this.game.add.sprite (400, 400, 'complete');
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                default:
                    throw new Error("WUT?")
            }
            
            switch (window.stationaryPlatformMission.level) {
                case 0: {
                    let sprite = this.game.add.sprite (400, 500, '10platform')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                    
                case 1: {
                    let sprite = this.game.add.sprite (400, 500, '25platform')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                    
                case 2: {
                    let sprite = this.game.add.sprite (400, 500, '50platform')
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                case 3: {
                    let sprite = this.game.add.sprite (400, 500, 'complete');
                    sprite.anchor.setTo(0.5, 0.5);
                    break;
                }
                default:
                    throw new Error("WUT?")
            }
        },

        menu: function () {
            this.game.state.start('title');
        },

        playTheGame: function () {
            this.game.state.start('start');
        },
    }
}