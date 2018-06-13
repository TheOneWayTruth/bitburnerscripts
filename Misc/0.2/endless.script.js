script = args[0];

while(true)
{
    if(!isRunning(script,"home"))
    {
        run(script);
    }
    
    while (isRunning(script, "home"))
    {
        sleep(1000,false);
    }
}