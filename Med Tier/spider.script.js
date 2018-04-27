//Runs the knocknok.script on all hackable(level) server.

disableLog("ALL")

serversSeen = ['home'];

//checks if the server has enough ram to run allarounder.script
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
			//checks if the server is allready running allarounder
            if (isRunning("allarounder.script", thisScan[j])===false)
            {
				//checks ram
                if(hasram(thisScan[j])) 
                {   
					//Checks if Hacking level is high enough
					if(getServerRequiredHackingLevel(thisScan[j]) <= getHackingLevel()) 
                    {
						tprint("starting Hack on " + thisScan[j])
						//starts knocknok to the server.
						run("knocknok.script", 1, thisScan[j]);
                    }
                }
            }
        }
    }
}