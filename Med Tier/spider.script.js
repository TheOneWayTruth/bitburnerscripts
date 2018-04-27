disableLog("ALL")

serversSeen = ['home'];

function hasram(server) {
    res = getServerRam(server);
    totalRam = res[0];
    ramUsed = res[1];
    RamNow = totalRam - ramUsed;
    ScriptRam = getScriptRam("allarounder.script", server)
    if (ScriptRam > RamNow) {
        return false;
    }
    return true;
}

for (i = 0; i < serversSeen.length; i++) 
{
    thisScan = scan(serversSeen[i]);
    for (j = 0; j < thisScan.length; j++) 
    {
        if (serversSeen.indexOf(thisScan[j]) === -1) 
        {
            serversSeen.push(thisScan[j]);
            print("found: " + thisScan[j])
            if (isRunning("allarounder.script", thisScan[j])===false)
            {
                if(hasram(thisScan[j])) 
                {    if(getServerRequiredHackingLevel(thisScan[j]) <= getHackingLevel()) 
                    {
                    tprint("starting Hack on " + thisScan[j])
                    run("knocknok.script", 1, thisScan[j]);
                    }
                }
            }
        }
    }
}