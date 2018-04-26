for(i = 0;i < hacknetnodes.length;i++)
{
    if (hacknetnodes[i].cores<16)
    {
        times = 16 - hacknetnodes[i].cores;
        for (j = 0;j < times;j++)
        {
            if(hacknetnodes[i].getCoreUpgradeCost(1)<getServerMoneyAvailable("home"))
            {
                hacknetnodes[i].upgradeCore(1);
                print(i + ". cpu: " +hacknetnodes[i].cores)
            }
            else
            {
                break;    
            }
        }
    }
    
}