hostname = getHostname();
moneyThresh = getServerMaxMoney(hostname) * 0.9;

while(true)
{
    if(getServerMoneyAvailable(hostname) < moneyThresh) 
    {
        grow(hostname);
    } 
    else 
    {
        hack(hostname);
    }
        weaken(hostname);
}