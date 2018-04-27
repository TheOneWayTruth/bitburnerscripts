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

serversSeen.shift();
serversSeen.sort(function(a, b){
    return getServerRequiredHackingLevel(a) - getServerRequiredHackingLevel(b);
});
rm("Allserver.txt");
write("Allserver.txt", serversSeen.join());
run("NetHack.script");