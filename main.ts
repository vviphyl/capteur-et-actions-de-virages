radio.onReceivedNumber(function (receivedNumber) {
    ListeDesVirages[NunVirage] = receivedNumber
    if (ListeDesVirages[NunVirage] == 0) {
        Départ = 1
    } else {
        NunVirage += 1
    }
})
let Départ = 0
let NunVirage = 0
let ListeDesVirages: number[] = []
radio.setGroup(9)
ListeDesVirages = []
NunVirage = 0
basic.forever(function () {
    if (Départ == 1) {
        if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) < 7) {
            if (ListeDesVirages[NunVirage] < 0) {
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 150)
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            }
            if (ListeDesVirages[NunVirage] > 0) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 150)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
            }
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 199)
        }
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
