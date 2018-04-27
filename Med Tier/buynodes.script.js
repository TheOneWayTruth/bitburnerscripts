disableLog("ALL")

//Buy all available nodes.
while (getServerMoneyAvailable("home") > getNextHacknetNodeCost()) {
    purchaseHacknetNode()
    print("Boght a new Node: " + hacknetnodes.length)
}
//check if a startby is given
if (args.length == 1) {
    startby = args[0];
} else {
    startby = 0;
}

//runs upgradenode.script on all nodes who arent max level.
for (i = startby; i < hacknetnodes.length; i++) {

    if (!(hacknetnodes[i].ram == 64 && hacknetnodes[i].cores == 16 && hacknetnodes[i].level == 200)) {
        if (!isRunning("upgradenode.script", "home", i)) {
            run("upgradenode.script", 1, i)
        }
    } else {
        print("Node " + i + " is Maxed")
    }
}