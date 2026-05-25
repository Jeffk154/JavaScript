function soundAlarm(){
    console.log("WARNING: ZOMBIES AT THE GATE!")
    console.log("RUN TAKE YOUR BAGS!")
}
soundAlarm()


function VictoryDance(){
    console.log("Slide to the left!")
    console.log("Spin around!")
    console.log("Moonwalk!")
}
VictoryDance()



function identifySupply(item){
    console.log("Scanning... Found one " , item)
}
identifySupply("Medkit")
identifySupply("Crossbow")


function calculateRations(Survivors , Days){
    let totalcans = Survivors * Days * 3
    console.log("You need" , totalcans , "Cans Of Beans To Survive")

}
calculateRations(100 , 150)


function distractZombies(direction , speed){
    console.log("Robot Dog is sprinting " , direction , " at " , speed , " miles per hour!")
}
distractZombies("North" , "25")