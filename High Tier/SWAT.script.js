hostname = args[0];
hackedports = 0;

if (!hasRootAccess(hostname)) {
    if (fileExists("BruteSSH.exe", "home")) {
        brutessh(hostname);
        hackedports++;
    }
    if (fileExists("FTPCrack.exe", "home")) {
        ftpcrack(hostname);
        hackedports++;
    }
    if (fileExists("relaySMTP.exe", "home")) {
        relaysmtp(hostname);
        hackedports++;
    }
    if (fileExists("HTTPWorm.exe", "home")) {
        httpworm(hostname);
        hackedports++;
    }
    if (fileExists("SQLInject.exe", "home")) {
        sqlinject(hostname);
        hackedports++;

    }
    
    if (getServerNumPortsRequired(hostname) <= hackedports) {
        nuke(hostname);
        run("GetMaxRam.script", 1, hostname)
    }
} 
else
{
    run("GetMaxRam.script", 1, hostname)
}