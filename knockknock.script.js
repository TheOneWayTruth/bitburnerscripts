disableLog("ALL")
hostname = args[0];
hackedports = 0;
  
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

if (hasRootAccess(hostname) === false && getServerNumPortsRequired(hostname) <= hackedports) {
   nuke(hostname);
   print("Throwing a Nuke")
}

if (hasRootAccess(hostname) === true && getServerRequiredHackingLevel(hostname) <= getHackingLevel()){
    scp("allarounder.script", "home", hostname);
    exec("allarounder.script", hostname);
    print("started allarounder")
}
else
{
    print("dont started allarounder")    
}