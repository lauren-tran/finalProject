var InfiniteScroller = InfiniteScroller || {};

InfiniteScroller.Preload = function(){};
 
InfiniteScroller.Preload.prototype = {
  preload: function() {
      this.preload = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preload');