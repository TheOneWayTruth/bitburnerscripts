disableLog("ALL");

serversSeen = ['home'];
best_target = 'foodnstuff';

for (i = 0; i < serversSeen.length; i++) {
    thisScan = scan(serversSeen[i]);
    for (j = 0; j < thisScan.length; j++) {
        if (serversSeen.indexOf(thisScan[j]) === -1) {
            serversSeen.push(thisScan[j]);
            print("comparing " + thisScan[j]+" and "+best_target)
            if (getServerMaxMoney(thisScan[j]) > getServerMaxMoney(best_target) && getServerRequiredHackingLevel(thisScan[j]) < getHackingLevel()) {
                best_target = thisScan[j];
                print("new best target:" + best_target)
            }
        }
    }
}

scriptKill("notmyscript.script","home");
run("notmyscript.script",best_target);