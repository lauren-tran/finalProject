
window.money = 0;
window.totalMoney = 0;
window.maxHeight = 0;
window.platformHit = 0;
window.stationaryPlatformHit = 0;
window.moving = 0;
window.moneyMission = new MissionHandler ([
    {target: 100, reward: 10},
    {target: 250, reward: 10},
    {target: 500, reward: 10}
], function(n) {
    window.money += n
})

window.scoreMission = new MissionHandler ([
    {target: 10000, reward: 10},
    {target: 20000, reward: 10},
    {target: 50000, reward: 10}
], function(n) {
    window.money += n
})

window.movingPlatformMission = new MissionHandler ([
    {target: 10, reward: 10},
    {target: 25, reward: 10},
    {target: 50, reward: 10}
], function(n) {
    window.money += n
})

window.stationaryPlatformMission = new MissionHandler ([
    {target: 10, reward: 10},
    {target: 25, reward: 10},
    {target: 50, reward: 10}
], function(n) {
    window.money += n
})

window.characters = ["construction", "scientist", "police", "medic", "agent", "policeWoman", "medicWoman", "skeleton", "fox", "dog"]

window.currentCharacter = "construction"

window.ownedCharacters = ["construction"]

window.highScore = []

window.characterPrice = {
    construction: 100,
    scientist: 100, 
    police: 100, 
    medic: 100,
    agent: 100,
    policeWoman: 200,
    medicWoman: 200,
    skeleton: 200,
    fox: 200,
    dog: 200
}
