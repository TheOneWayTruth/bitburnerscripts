function getram(nowram)
{
    zahler = 0;
    while (nowram != 64)
    {
        nowram *= 2;
        zahler++;
    }
    return zahler;
}

for(i = 0;i < hacknetnodes.length;i++)
{
    if (hacknetnodes[i].ram<64)
    {
        times = getram(hacknetnodes[i].ram)
        for (j = 0;j < times;j++)
        {
            if(hacknetnodes[i].getRamUpgradeCost(1)<getServerMoneyAvailable("home"))
            {
                hacknetnodes[i].upgradeRam(1);
                print(i + ". ram: " +hacknetnodes[i].ram)
            }
            else
            {
                break;    
            }
        }
    }
    
}