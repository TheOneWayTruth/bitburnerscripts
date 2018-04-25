hostname = args[0];
  
if (fileExists("BruteSSH.exe", "home")) {
    brutessh(hostname);
}
if (fileExists("FTPCrack.exe", "home")) {
    ftpcrack(hostname);
}
if (fileExists("relaySMTP.exe", "home")) {
    relaysmtp(hostname);
}
if (fileExists("HTTPWorm.exe", "home")) {
    httpworm(hostname);
}
if (fileExists("SQLInject.exe", "home")) {
    sqlinject(hostname);
}

nuke(hostname);

scp("allarounder.script", "home", hostname);
exec("allarounder.script", hostname);