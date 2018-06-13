hostname = getHostname();
moneyThresh = getServerMaxMoney(hostname) * 0.8;
while (true) {
    if (getServerMoneyAvailable(hostname) < moneyThresh) {
        grow(hostname);
    } else {
        hack(hostname);
    }
    weaken(hostname);
}