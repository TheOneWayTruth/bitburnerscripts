i = args[0]

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


print(i+". HackerNode")
    if (hacknetnodes[i].level<200)
    {
        times = 200 - hacknetnodes[i].level 
        if(hacknetnodes[i].getLevelUpgradeCost(times)<getServerMoneyAvailable("home"))
        {
            hacknetnodes[i].upgradeLevel(times);
            print("level: " +hacknetnodes[i].level)
            times = 0;
        }
        else
        {
            for (j = 0;j < times;j++)
            {
                if(hacknetnodes[i].getLevelUpgradeCost(50)<getServerMoneyAvailable("home"))
                {
                    hacknetnodes[i].upgradeLevel(50);
                    print("level: " +hacknetnodes[i].level)
                    j += 49;
                }
                else if(hacknetnodes[i].getLevelUpgradeCost(10)<getServerMoneyAvailable("home"))
                {
                    hacknetnodes[i].upgradeLevel(10);
                    print("level: " +hacknetnodes[i].level)
                    j += 9;
                }
                else if(hacknetnodes[i].getLevelUpgradeCost(5)<getServerMoneyAvailable("home"))
                {
                    hacknetnodes[i].upgradeLevel(5);
                    print("level: " +hacknetnodes[i].level)
                    j += 4;
                }
                else if(hacknetnodes[i].getLevelUpgradeCost(1)<getServerMoneyAvailable("home"))
                {
                    hacknetnodes[i].upgradeLevel(1);
                    print("level: " +hacknetnodes[i].level)
                }
                else
                {
                    break;
                }
            }
        }
    }
    else
    {
        print("Max Level")
    }
    
    if (hacknetnodes[i].ram<64)
    {
        times = getram(hacknetnodes[i].ram)
        for (j = 0;j < times;j++)
        {
            if(hacknetnodes[i].getRamUpgradeCost(1)<getServerMoneyAvailable("home"))
            {
                hacknetnodes[i].upgradeRam(1);
                print("Boght " + hacknetnodes[i].ram + ". Ram")
            }
            else
            {
                print("No money to buy " + hacknetnodes[i].ram + ". Ram")
                break;    
            }
        }
    }
    else
    {
        print("Max Ram")
    }

    if (hacknetnodes[i].cores<16)
    {
        times = 16 - hacknetnodes[i].cores;
        for (j = 0;j < times;j++)
        {
            if(hacknetnodes[i].getCoreUpgradeCost(1)<getServerMoneyAvailable("home"))
            {
                hacknetnodes[i].upgradeCore(1);
                print("Boght " + hacknetnodes[i].cores + ". Core")
            }
            else
            {
                print("No money to buy " + hacknetnodes[i].cores + ". Core")
                break;    
            }
        }
    }
    else
    {
        print("Max Cores")
    }