//This is not my script but it hacks a server very well

hackmult = 2.6880;
growmult = 1.7708;

//Bitnode Multiplier Constants, update after changing Bitnodes
bitnodehackmult = 1.0000;
bitnodegrowmult = 1.0000;
bitnodeweakenmult = 1.0000;

target = args[0];

if (hasRootAccess(args[0]) === false) {tprint(target + " is not hacked yet.")}
else
{
    //Gather Hack-related Variables
    skill = getHackingLevel();
    reqHack = getServerRequiredHackingLevel(target);
    minsecurity = Math.max((getServerBaseSecurityLevel(target)/3),1);

    //Calculate number of Hack Threads Required
    perhack = (100-minsecurity) * ((skill-reqHack+1)/skill) / 24000 * hackmult * bitnodehackmult;
    hacks = Math.ceil(1/perhack);

    //Gather Growth-related Variables
    growth = getServerGrowth(target);
    security = minsecurity + hacks * 0.002;
    maxmoney = getServerMaxMoney(target);

    //Calculate number of Grow Threads Required
    growpercent = Math.min(1 + 0.03/security,1.0035);
    pergrow = Math.pow(growpercent,growth/100 * growmult * bitnodegrowmult);
    var1 = maxmoney * Math.log(pergrow);
    lambert = Math.log(var1)-Math.log(Math.log(var1))-Math.log(1-Math.log(Math.log(var1))/Math.log(var1));
    grows = Math.ceil(lambert/Math.log(pergrow));

    //Calculate number of Weaken Threads Required
    weakens = Math.ceil((((hacks * 0.002) + (grows * 0.004)) / (0.05 * bitnodeweakenmult)));
    maxweakens = (100 - minsecurity) / (0.05 * bitnodeweakenmult);
    if (weakens > maxweakens) {weakens = maxweakens}

    //Add up how much memory this will use, report the value
    totalmem = hacks * 1.80 + grows * 1.55 + weakens * 1.55 + 6.70;
    tprint("Preparing to attack " + target + " with " + hacks + " hacks, " + grows + " grows, and " + weakens + "weakens for a total of " + totalmem + "GB of memory use");

    currsecurity = getServerSecurityLevel(target);

    if (currsecurity > minsecurity)
    {
        //tprint("bringing " + target + " down to min security...");
        run('weaken.script',Math.ceil((currsecurity - minsecurity) / 0.05),target);

        while (isRunning('weaken.script',getHostname(),target))
        {
            sleep(1000,false);
        }
        //tprint(target + " weakened, beginning hack.");
    }

    while (true)
    {
        run('weaken.script',weakens,target);
        run('grow.script',grows,target);
        if (isRunning('hack.script',getHostname(),target) === false) {run('hack.script',hacks,target);}

        while (isRunning('weaken.script',getHostname(),target))
        {
            sleep(1000,false);
        }
    }
}