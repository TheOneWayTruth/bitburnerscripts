disableLog("ALL")

if (fileExists("MaxedNodes.txt", "home")){
    str = read("MaxedNodes.txt");
    isMax = str.split(",");
    isMax = Number(isMax);
}
else{
    isMax = 0;
}

while (getServerMoneyAvailable("home") > getNextHacknetNodeCost()) {
    purchaseHacknetNode()
    print("Boght a new Node: " + hacknetnodes.length)
}



for (i = isMax; i < hacknetnodes.length; i++) {
    if (!(hacknetnodes[i].ram == 64 && hacknetnodes[i].cores == 16 && hacknetnodes[i].level == 200)) {
        if (!isRunning("upgradenode.script", "home", i)) {
            run("upgradenode.script", 1, i)
        }
    } else {
        print("Node " + i + " is Maxed");
        if(i > isMax){
            isMax = i;
        }
    }
}

rm("MaxedNodes.txt");
write("MaxedNodes.txt", isMax+", 0");