class Form{
    constructor(){

    }

    display(){
        var title=createElement("h1")
        title.html("Multiplayer Car Racing Game")
        title.position(130,10)

        var input = createInput("Name");
        var button = createButton("Play!");
        input.position(130,160)
        button.position(250,200)

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value()
            var greeting=createElement("h2")
            greeting.html("Hello "+ name)
            greeting.position(130,160)


        })
    }
}
