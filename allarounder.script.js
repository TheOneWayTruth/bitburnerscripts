disableLog("ALL")
hostname = getHostname();
moneyThresh = getServerMaxMoney(hostname) * 0.9;

while(true)
{
    print("Money: " + getServerMoneyAvailable(hostname))
    if(getServerMoneyAvailable(hostname) < moneyThresh) 
    {
        print("growing")
        grow(hostname);
    } 
    else 
    {
        print("hacking")
        hack(hostname);
    }
        print("weaking")
        weaken(hostname);
}