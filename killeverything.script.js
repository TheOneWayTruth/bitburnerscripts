serversSeen = ['home'];
disableLog("ALL")
for (i = 0; i < serversSeen.length; i++) 
{
    thisScan = scan(serversSeen[i]);
    for (j = 0; j < thisScan.length; j++) 
    {
        if (serversSeen.indexOf(thisScan[j]) === -1) 
        {
            serversSeen.push(thisScan[j]);
            if(isRunning("allarounder.script", thisScan[j]))
            {
                kill("allarounder.script", thisScan[j])
                print("killing script on " + thisScan[j])
            }
        }
    }
}