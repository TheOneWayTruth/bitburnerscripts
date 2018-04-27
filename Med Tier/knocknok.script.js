disableLog("ALL")
hostname = args[0];
hackedports = 0;

if (!hasRootAccess(hostname)) {
    if (fileExists("BruteSSH.exe", "home")) {
        brutessh(hostname);
        hackedports++;
        print("running BruteSSH.exe")
    }
    if (fileExists("FTPCrack.exe", "home")) {
        ftpcrack(hostname);
        hackedports++;
        print("running FTPCrack.exe")
    }
    if (fileExists("relaySMTP.exe", "home")) {
        relaysmtp(hostname);
        hackedports++;
        print("running relaySMTP.exe")
    }
    if (fileExists("HTTPWorm.exe", "home")) {
        httpworm(hostname);
        hackedports++;
        print("running HTTPWorm.exe")
    }
    if (fileExists("SQLInject.exe", "home")) {
        sqlinject(hostname);
        hackedports++;
        print("running SQLInject.exe")
    }
    print("required Ports: " + getServerNumPortsRequired(hostname))

    print("open Ports: " + hackedports)
    if (getServerNumPortsRequired(hostname) <= hackedports) {
        nuke(hostname);
        tprint(hostname + " was Nuked")
        run("getmax.script", 5, hostname)
    }
} 
else
{
    tprint(hostname + " is allready Nuked")
    run("getmax.script", 5, hostname)
}