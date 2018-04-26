disableLog("ALL");
if (args.length === 0)
{
    time = 120;
    script = "buynodes.script";
}
else if(args.length == 1)
{
    time = 120;
    script = args[0];
}
else if(args.length == 2)
{
    time = args[1];
    script = args[0];
}
while(true)
{
    if(!isRunning(script,"home"))
    {
        run(script);
        print("started "+ script);
    }
    
    for (i = 0;i < time;i++)
    {
        print("sleeping " + i + " - " + time);
    }
}