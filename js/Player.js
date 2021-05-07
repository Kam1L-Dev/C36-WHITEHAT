class Player{
    constructor(){

    }

    getState(){
        var playerCountref=database.ref("playerCount")
        gameStateref.on("value",function(data){
            gameState=data.val()
        })
    }

    update(state){
        database.ref("/").update({
            playerCount:state
        })
    }}
