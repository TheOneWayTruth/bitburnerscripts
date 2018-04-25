hostname = getHostname();
securityThresh = round(getServerBaseSecurityLevel(hostname) / 3) + 2;
moneyThresh = getServerMaxMoney(target) * 0.9;

while(true)
{
    if (getServerSecurityLevel(hostname) > securityThresh)
    {
        weaken(hostname);
    }
    else if(getServerMoneyAvailable(target) < moneyThresh) 
    {
        grow(hostname);
    } 
    else 
    {
        hack(hostname);
    }
}