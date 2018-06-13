if (fileExists("HackedServer.txt", "home")) {
    str = read("HackedServer.txt");
    HackedServer = str.split(",");
} else {
    HackedServer = ["home"]
}

for (i = 0; i < HackedServer.length; i++) {
    thisScan = scan(HackedServer[i]);
    for (j = 0; j < thisScan.length; j++) {
        if (HackedServer.indexOf(thisScan[j]) === -1) {
            if (isRunning("TrojanHorse.script", thisScan[j])) {
                kill("TrojanHorse.script", thisScan[j])
            }
        }
    }
}