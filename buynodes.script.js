disableLog("ALL")


while (getServerMoneyAvailable("home") > getNextHacknetNodeCost()) {
    purchaseHacknetNode()
    print("Boght a new Node: " + hacknetnodes.length)
}

if (args.length == 1) {
    startby = args[0];
} else {
    startby = 0;
}

for (i = startby; i < hacknetnodes.length; i++) {

    if (!(hacknetnodes[i].ram == 64 && hacknetnodes[i].cores == 16 && hacknetnodes[i].level == 200)) {
        if (!isRunning("upgradenode.script", "home", i)) {
            run("upgradenode.script", 1, i)
        }
    } else {
        print("Node " + i + " is Maxed")
    }
}