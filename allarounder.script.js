hostname = getHostname();
while(true){
weaken(hostname);
if(getServerMoneyAvailable(hostname) > 200000) 
{
    hack(hostname);
    print("hacking M: " + getServerMoneyAvailable(hostname))
} 
else 
{
    grow(hostname);
    print("growing M: "+ getServerMoneyAvailable(hostname))
}
}