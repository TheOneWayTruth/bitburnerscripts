//hacks the server on which its running.

disableLog("ALL")
hostname = getHostname();
moneyThresh = getServerMaxMoney(hostname) * 0.8;

while (true) {
    print("Money: " + getServerMoneyAvailable(hostname))
    if (getServerMoneyAvailable(hostname) < moneyThresh) {
        print("growing")
        grow(hostname);
    } else {
        print("hacking")
        hack(hostname);
    }
    print("weaking")
    weaken(hostname);
}