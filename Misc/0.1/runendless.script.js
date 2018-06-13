//easy Script to run a script endelss
disableLog("ALL");

if (args.length === 0)
{
    script = "buynodes.script";
}
else if(args.length == 1)
{
    script = args[0];
}

while(true)
{
    if(!isRunning(script,"home"))
    {
        run(script);
        print("started "+ script);
    }
    
    counter = 0
    while (isRunning(script, "home"))
    {
        counter ++;
        sleep(1000,false);
        print("sleeping - " + counter)
    }
}