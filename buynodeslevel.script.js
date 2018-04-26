for(i = 0;i < hacknetnodes.length;i++)
{
    if (hacknetnodes[i].level<200)
    {
        times = 200 - hacknetnodes[i].level 
        if(hacknetnodes[i].getLevelUpgradeCost(times)<getServerMoneyAvailable("home"))
        {
            hacknetnodes[i].upgradeLevel(times);
            print(i + ". level: " +hacknetnodes[i].level)
            times = 0;
        }
        else
        {
            for (j = 0;j < times;j++)
            {
                if(hacknetnodes[i].getLevelUpgradeCost(5)<getServerMoneyAvailable("home"))
                {
                    hacknetnodes[i].upgradeLevel(5);
                    print(i + ". level: " +hacknetnodes[i].level)
                    j -= 4;
                }
                else if(hacknetnodes[i].getLevelUpgradeCost(1)<getServerMoneyAvailable("home"))
                {
                    hacknetnodes[i].upgradeLevel(1);
                    print(i + ". level: " +hacknetnodes[i].level)
                }
                else
                {
                    break;
                }
            }
        }
    }
}