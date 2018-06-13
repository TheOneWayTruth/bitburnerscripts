function gethackingtools() {
    count = 0;
    if (fileExists("BruteSSH.exe", "home")) {
        count++;
    }
    if (fileExists("FTPCrack.exe", "home")) {
        count++;
    }
    if (fileExists("relaySMTP.exe", "home")) {
        count++;
    }
    if (fileExists("HTTPWorm.exe", "home")) {
        count++;
    }
    if (fileExists("SQLInject.exe", "home")) {
        count++;
    }
    return count;
}

if (fileExists("Allserver.txt", "home")) {
    str = read("Allserver.txt");
    Allserver = str.split(",");
    if (fileExists("NotHackedServer.txt", "home")) {
        str = read("NotHackedServer.txt");
        Allserver = str.split(",");
        rm("NotHackedServer.txt")
        rm("HackedServer.txt")
    }
    
    Hackingtools = gethackingtools();
    
    for (i = 0; i < Allserver.length; i++) {
        if (getServerRequiredHackingLevel(Allserver[i]) < getHackingLevel()) {
            if(hasRootAccess(Allserver[i])){
                run("GetMaxRam.script",1,Allserver[i])
                write("HackedServer.txt", Allserver[i]+",");
            }
            else if (getServerNumPortsRequired(Allserver[i]) <= Hackingtools) {
                run("SWAT.script", 1, Allserver[i]);
                write("HackedServer.txt", Allserver[i]+",");
            }
        }
        else{
            write("NotHackedServer.txt", Allserver[i]+",");
        }
    }
} else {
    run("getAllServer.script")
}