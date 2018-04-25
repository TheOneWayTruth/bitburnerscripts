hostname = args[0];
hackedports = 0;
  
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

print(getServerNumPortsRequired(hostname))
print(hackedports)

if (hasRootAccess(hostname) === false && getServerNumPortsRequired(hostname) <= hackedports) {
   nuke(hostname);
}

if (hasRootAccess(hostname) === true && getServerRequiredHackingLevel(hostname) <= getHackingLevel()){
    scp("allarounder.script", "home", hostname);
    exec("allarounder.script", hostname);
}