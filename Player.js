class Player{
    constructor(){}

    getCount(){
        var playercountref=database.ref("PlayerCount")
        playercountref.on("value",function(data){
            PlayerCount=data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
            PlayerCount:count
        });
    }

    update(name){
        var playerIndex="player"+PlayerCount;
        database.ref(playerIndex).set({
            name:name
        });
    }
}