function randSeconds() {
    const seconds = (Math.random() * 4000) + 1000
    return seconds
}

const assList = ["images/lantern.png", "images/rogel.jpg"]
let assIndex = 0
let assInterval;
let assIntervalOn = true
function assIntervalSwitch() {
    if(assIntervalOn) {
        document.getElementById("assbutton").value = "play"
        document.getElementById("assbutton").onclick = assIntervalSwitch
        clearInterval(assInterval)
        assIntervalOn = false
    } else {
        document.getElementById("assbutton").value = "pause"
        document.getElementById("assbutton").onclick = assIntervalSwitch
        assInterval = setInterval(switchAss, randSeconds())
        assIntervalOn = true
    }
}
function switchAss() {
    clearInterval(assInterval)
    assInterval = setInterval(switchAss, randSeconds())
    switch(assIndex) {
        case 0:
            document.getElementById("ass").src = assList[1]
            assIndex = 1
            break;
        case 1:
            document.getElementById("ass").src = assList[0]
            assIndex = 0
            break;
    }
}

const mmList = ["images/mm1.jpg","images/mm2.png","images/mm3.png","images/mm4.png","images/mm5.jpg","images/mm6.jpg","images/mm7.jpg","images/mm8.jpg","images/mmv.jpg"]
let mmIndex = 0;
let mmInterval;
let mmIntervalOn = true;
function mmIntervalSwitch() {
    if(mmIntervalOn) {
        document.getElementById("mmbutton").value = "pause"
        document.getElementById("mmbutton").onclick = mmIntervalSwitch
        clearInterval(mmInterval)
        mmIntervalOn = false
    } else {
        document.getElementById("mmbutton").value = "play"
        document.getElementById("mmbutton").onclick = mmIntervalSwitch
        mmInterval = setInterval(switchMM, randSeconds())
        mmIntervalOn = true
    }
}

function switchMM() {
    clearInterval(mmInterval)
    mmInterval = setInterval(switchMM, randSeconds())

    if(mmIndex > 7) {
        mmIndex = 0
        document.getElementById("mm").src = mmList[mmIndex]
    } else {
        mmIndex += 1
        document.getElementById("mm").src = mmList[mmIndex]
    }
}

const animeList = ["images/kuchinashi.jpg","images/momiji.jpg","images/kirara.jpg", "images/vanilla.png","images/chain.gif","images/chizuru.jpg","images/noi.jpg","images/rei.jpg"]
let animeIndex = 0;
let animeInterval;
let animeIntervalOn = true;

function animeIntervalSwitch() {
    if(animeIntervalOn) {
        document.getElementById("animebutton").value = "play"
        document.getElementById("animebutton").onclick = animeIntervalSwitch
        clearInterval(animeInterval)
        animeIntervalOn = false
    } else {
        document.getElementById("animebutton").value = "pause"
        document.getElementById("animebutton").onclick = animeIntervalSwitch
        animeInterval = setInterval(switchAnime, 1000)
        animeIntervalOn = true
    }
}

function switchAnime() {
    clearInterval(animeInterval)
    animeInterval = setInterval(switchAnime, randSeconds())
    if(animeIndex > 6) {
        animeIndex = 0
        document.getElementById("anime").src = animeList[animeIndex]
    } else {
        animeIndex += 1
        document.getElementById("anime").src = animeList[animeIndex]
    }
}

function init() {
    assInterval = setInterval(switchAss, 1000);
    mmInterval = setInterval(switchMM, 1000);
    animeInterval = setInterval(switchAnime, 1000)
}

function startGaz() {
    setInterval(playgaz, 1000);
}

function playgaz() {
    document.getElementById('gaz').play();
}

