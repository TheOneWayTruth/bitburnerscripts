disableLog("ALL")
while(true)
{
    if(!isRunning(args[0],"home"))
    {
        run(args[0]);
        print("started "+ args[0])
    }
    
    for (i = 0;i < args[1];i++)
    {
        print("sleeping " + i + " - " + args[1]);
    }
}