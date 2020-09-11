const assList = ["images/lantern.png", "images/rogel.jpg"]
let assIndex = 0
function assInterval() {
    setInterval(switchAss, 3000);
}
let assIntervalOn = true
const assIntervalSwitch = function() {
    if(assIntervalOn) {
        console.log("Interval Clearing")
        clearInterval(assInterval)
        assIntervalOn = false
    } else {
        assInterval()
        assIntervalOn = true
    }
}
const switchAss = function() {
    console.log("Switching")
    switch(assIndex) {
        case 0:
            console.log("Switching To Niger")
            document.getElementById("ass").src = assList[1]
            assIndex = 1
            break;
        case 1:
            console.log("Switching To Gay Lantern")
            document.getElementById("ass").src = assList[0]
            assIndex = 0
            break;
    }
}

function init() {
    assInterval()
    assIntervalOn = true

}

