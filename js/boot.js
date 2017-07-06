var InfiniteScroller = InfiniteScroller || {};
 
InfiniteScroller.Boot = function(){};

InfiniteScroller.Boot.prototype = {
  preload: function() {
      this.load.image('loading','images/loading.png');
      
create: function(){
   this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  
    this.state.start('Preload');
    
}