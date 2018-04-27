//Scanns All Servers and Returns them into a Allserver.txt

disableLog("ALL")

serversSeen = ['home'];

for (i = 0; i < serversSeen.length; i++) 
{
    thisScan = scan(serversSeen[i]);
    for (j = 0; j < thisScan.length; j++) 
    {
        if (serversSeen.indexOf(thisScan[j]) === -1) 
        {
            serversSeen.push(thisScan[j]);
        }
    }
}

//delete the Old file and writes a new one
rm("Allserver.txt");
write("Allserver.txt", serversSeen.join());