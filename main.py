def on_received_number(receivedNumber):
    global Départ, NunVirage
    ListeDesVirages[NunVirage] = receivedNumber
    if ListeDesVirages[NunVirage] == 0:
        Départ = 1
    else:
        NunVirage += 1
radio.on_received_number(on_received_number)

Départ = 0
NunVirage = 0
ListeDesVirages: List[number] = []
radio.set_group(9)
ListeDesVirages = []
NunVirage = 0

def on_forever():
    if Départ == 1:
        if DFRobotMaqueenPlus.ultra_sonic(PIN.P1, PIN.P2) < 7:
            if ListeDesVirages[NunVirage] < 0:
                DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 150)
                DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 0)
            if ListeDesVirages[NunVirage] > 0:
                DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CW, 150)
                DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CW, 0)
        else:
            DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 199)
    else:
        DFRobotMaqueenPlus.motot_stop(Motors.ALL)
basic.forever(on_forever)
