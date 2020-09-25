class Form{
    constructor(){}
    
    display(){
        var title=createElement('h2')
        title.html("Car Racing Game")
        title.position(130,0)

        var input=createInput("name");
        var button=createButton('Play');
        var greeting=createElement('h3');
        input.position(130,160);
        button.position(250,200);
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            PlayerCount=PlayerCount+1;
            player.update(name)
            player.updateCount(PlayerCount)
            greeting.html("Hello"+name)
            greeting.position(130,160)
        })
        
    }
}