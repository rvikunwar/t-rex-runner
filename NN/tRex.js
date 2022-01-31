let obstacles;
let trex_brain = new NeuralNetwork(4, 5, 3)

class tRex{
    constructor(){
        this.count = 10;
    }
}

setInterval(()=>{
    var tRex = Runner.instance_.tRex;
    var obstacles = Runner.instance_.horizon.obstacles;

    if(obstacles.length>0){
        var obsX = obstacles[0]?.xPos;
        var obsY = obstacles[0]?.yPos;
        var obsW = obstacles[0]?.width;
        var obsS = parseInt(Runner.instance_.currentSpeed)
        let output = trex_brain.predict([obsX, obsY, obsW, obsS])

        if(output[0] >= output[1] && output[0] >= output[2]){
            tRex.startJump(obsS);
        } else if(output[1] >= output[0] && output[1] >= output[2]){
            tRex.setDuck(true);
        } 
    }
 
},1000)