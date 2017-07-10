var gameTitle = {

        preload: function(){
       
         this.game.load.image('menubutton','image/menubutton.png');   
            
    this.game.load.image('powerupbutton','image/powerupbutton.png');
        
        This.game.load.image('charactersbutton','image/charactersbutton.png');
        
        
    },
     
    create: function(){
        
     this.game.stage.backgroundColor= black;
        
     var gameTitle = this.game.add.sprite(385,100,'gameTitle');
        
      gameTitle.anchor.setTo(0.5,0.5);
        
        var menubutton = this.game.add.button(385,550,'menubutton',this.playThegame,null, this);
        
        menubutton.anchor.setTo(0.5,0.5);
        
        var PowerButton = this.game.add.button(385,550,'powerupbutton',this.playThegame,null,this);
        
        PowerButton.anchor.setTo(0.5,0.5);
        
        var charctersbutton = this.game.add.button(385,550,'charactersbutton',this.playThegame,null,this);
        
        PowerButton.anchor.setTo(0.5,0.5);
        
    }
        
        
    
    
}